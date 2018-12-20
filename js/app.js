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
  var createRows = '';
  for (var i = 0; i < arr.length; i++) {
    createRows +=
            `
            <tr>
            <td>${arr[i].id}</td>
            <td>${arr[i].consumables}</td>
            <td>${arr[i].denomination}</td>
            <td>${arr[i].cargo_capacity}</td>
            <td>${arr[i].passengers}</td>
            <td>${arr[i].max_atmosphering_speed}</td>
            <td>${arr[i].crew}</td>
            <td>${arr[i].lengthiness}</td>
            <td>${arr[i].model}</td>
            <td>${arr[i].cost_in_credits}</td>
            <td>${arr[i].manufacturer}</td>
            <td><img src="../img/${arr[i].image}" alt="space" onerror="this.src='../img/luke_skywalker.jpg'"></td>
            </tr>
            `;
    table.innerHTML = createRows;
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
}

// Hívd meg a getSpacesipsJsonData függvényt a megfelelő paraméterekkel
getSpacesipsJsonData(
  './json/spaceships.json',
  successAjax
);



