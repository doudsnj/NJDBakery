const Http = new XMLHttpRequest();
const url = 'https://njd-bakery.azurewebsites.net/api/Products';
Http.open("GET", url);
Http.send();

Http.onload = function () {
    console.log(Http.responseText);
    console.log(Http);
};

let counter = 1;

function addRow() {
    console.log('in addRow function');
    let $row = $('#test');
    let $clone = $row.clone();
    $("[rel='js-order-fields__row1']").after($clone);
    counter++;
    document.getElementById('test').classList.remove('order-fields__template');
    document.getElementById('test').classList.add('order-fields__row' + counter);
    document.getElementById('test').id.remove('test');
};

