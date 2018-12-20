// Ide írd a függvényeid
function costOrder(arr) {
  for (var i = 0; i < arr.length - 1; i++) {
    for (var j = i + 1; j < arr.length; j++) {
      if (arr[i].cost_in_credits > arr[j].cost_in_credits) {
        var temp = [arr[j], arr[i]];
        arr[i] = temp[0];
        arr[j] = temp[1];
      }
    }
  }
  // console.log(arr);
  return arr;
}

function deleteNull(arr) {
  var newArr = [];
  for (var i = 0; i < arr.length; i++) {
    if (arr[i].consumables === null) {
      arr[i].display = 'none';
    } else {
      newArr.push(arr[i]);
    }
  }
  // console.log(newArr);
  return newArr;
}

function unknownToBe(arr) {
  for (var k in arr) {
    if (arr.hasOwnProperty(k)) {
      for (var l in arr[k]) {
        if (arr[k].hasOwnProperty(l)) {
          if (arr[k][l] === null) {
            arr[k][l] = 'unknown';
          }
        }
      }
    }
  }
  console.log(arr);
  return arr;
}

function getDatas(arr) {
  var div = document.querySelector('.shapceship-list');
  var table = document.createElement('table');
  table.setAttribute('id', 'list__table');
  div.appendChild(table);
  // var button = document.querySelector('#search-button');
  // button.setAttribute('onclick', 'searchShip()');
  var createRows = '';
  for (var i = 0; i < arr.length; i++) {
    createRows +=
            `
            <tr>
            <td class="tr__td">${arr[i].id}</td>
            <td class="tr__td">${arr[i].consumables}</td>
            <td class="tr__td">${arr[i].denomination}</td>
            <td class="tr__td">${arr[i].cargo_capacity}</td>
            <td class="tr__td">${arr[i].passengers}</td>
            <td class="tr__td">${arr[i].max_atmosphering_speed}</td>
            <td class="tr__td">${arr[i].crew}</td>
            <td class="tr__td">${arr[i].lengthiness}</td>
            <td class="tr__td">${arr[i].model}</td>
            <td class="tr__td">${arr[i].cost_in_credits}</td>
            <td class="tr__td">${arr[i].manufacturer}</td>
            <td class="tr__td"><img src="../img/${arr[i].image}" alt="space" onerror="this.src='../img/luke_skywalker.jpg'"></td>
            </tr>
            `;
    table.innerHTML = createRows;
  }
}

function statistics(arr) {
  var div = document.querySelector('.shapceship-list');
  var div2 = document.createElement('div');
  div2.setAttribute('id', 'statistics__div');
  div.appendChild(div2);
  var p = '';
  var countCrew = 0;
  var maxCapacity = arr[0];
  var longestShip = arr[0];
  var imgOfLongestShip = longestShip.image;
  var sumPassengers = 0;
  for (var i = 0; i < arr.length; i++) {
    if (arr[i].crew === 1) {
      countCrew++;
    } else if (arr[i].cargo_capacity > maxCapacity.cargo_capacity) {
      maxCapacity = arr[i];
    } else if (arr[i].lengthiness > longestShip.lengthiness) {
      longestShip = arr[i];
    } else if (arr[i].passengers !== 'unknown') {
      sumPassengers += arr[i].passengers;
    }
    p =
          `
          <p class="statistics__p">Egy fős legénységgel rendelkező hajók darabszáma: ${countCrew}</p>
          <p class="statistics__p">A legnagyobb cargo kapacitással rendelkező hajó neve:${maxCapacity.denomination}, kapacitása: ${maxCapacity.cargo_capacity}</p>
          <p class="statistics__p">Az összes hajó utasainak összesített száma: ${sumPassengers}</p>
          <p class="statistics__p">A leghosszabb hajó:${longestShip.denomination} <br> képe: </p>
          <img src="../img/${imgOfLongestShip}" alt="longestShipEver" onerror="this.src='../img/leia_organa.jpg'">
          `;
    div2.innerHTML = p;
  }
}

function addOnclick(arr) {
  document.querySelector('#search-button').addEventListener('click', function () {searchShip(arr);});
}

// function getElement(arr) {
//   for (var i = 0; i < arr.length; i++) {
//     var td = document.querySelector('.tr__td');
//   }
//   addCustomListenerForTd(td, arr, i);
// }

// function addCustomListenerForTd(element, characters, index) {
//   element.addEventListener('click', function () { searchShip(characters, index); });
// }


function searchShip(arr) {
  var div = document.querySelector('.one-spaceship');
  var div2 = document.createElement('div');
  div2.setAttribute('id', 'search__div2');
  div.appendChild(div2);
  var table = '';
  var input = document.querySelector('#search-text').value;
  for (var i = 0; i < arr.length; i++) {
    table =
                `
                <p class="search__p">${arr[i].id}</p>
                <p class="search__p">${arr[i].consumables}</p>
                <p class="search__p">${arr[i].denomination}</p>
                <p class="search__p">${arr[i].cargo_capacity}</p>
                <p class="search__p">${arr[i].passengers}</p>
                <p class="search__p">${arr[i].max_atmosphering_speed}</p>
                <p class="search__p">${arr[i].crew}</p>
                <p class="search__p">${arr[i].lengthiness}</p>
                <p class="search__p">${arr[i].model}</p>
                <p class="search__p">${arr[i].cost_in_credits}</p>
                <p class="search__p">${arr[i].manufacturer}</p>
                <p class="search__p"><img src="../img/${arr[i].image}" alt="ship" onerror="this.src='../img/leia_organa.jpg'"></p>
                `;
    if (arr[i].model === input) {
      div2.innerHTML = table;
      console.log(table);
      break;
    } else {
      div2.innerHTML = 'not found';
    }
  }
}


function getSpacesipsJsonData(url, callbackFunc) {
  // Írj egy xmlHTTPRequest-et, ami elkéri a json mappába lévő spaceships.json file-t.
  // Ez a függvény paraméterént az url-t és a successAjax callback function kapja meg
  var xhttp = new XMLHttpRequest();
  xhttp.onreadystatechange = function () {
    if (this.readyState === 4 && this.status === 200) {
      callbackFunc(this);
    }
  };
  xhttp.open('GET', url, true);
  xhttp.send();
}

function successAjax(xhttp) {
  // ebbe a változóba parse-old a json adatokat
  var spaceShips = JSON.parse(xhttp.responseText);
  costOrder(spaceShips);
  var corrected = deleteNull(spaceShips);
  var better = unknownToBe(corrected);
  getDatas(better);
  statistics(better);
  // searchShip(better);
  addOnclick(better);
}

// Hívd meg a getSpacesipsJsonData függvényt a megfelelő paraméterekkel
getSpacesipsJsonData(
  './json/spaceships.json',
  successAjax
);



