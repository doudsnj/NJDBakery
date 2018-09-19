const Http = new XMLHttpRequest();
const url = 'https://njd-bakery.azurewebsites.net/api/Products';
Http.open("GET", url);
Http.send();

Http.onload = function () {
    console.log(Http.responseText);
    console.log(Http);
}
