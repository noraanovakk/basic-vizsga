// Ide írd a függvényeid

function getSpacesipsJsonData(url, callbackFunc) {
  // Írj egy xmlHTTPRequest-et, ami elkéri a json mappába lévő spaceships.json file-t.
  // Ez a függvény paraméterént az url-t és a successAjax callback function kapja meg
  var xhttp = new XMLHttpRequest();
  xhttp.onreadystatechange = function () {
    if (this.onreadystatechange === 4 && this.status === 200) {
      callbackFunc(this);
    }
  };
  xhttp.open('GET', url, true);
  xhttp.send();
}

function successAjax(xhttp) {
  // ebbe a változóba parse-old a json adatokat
  var spaceShips = JSON.parse(xhttp.responseText);
}

// Hívd meg a getSpacesipsJsonData függvényt a megfelelő paraméterekkel
getSpacesipsJsonData(
  './json/spaceships.json',
  successAjax
);
