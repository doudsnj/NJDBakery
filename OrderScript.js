// const Http = new XMLHttpRequest();
// const url = 'https://njd-bakery.azurewebsites.net/api/Products';
// Http.open("GET", url);
// Http.send();

// Http.onload = function () {
//     console.log(Http.responseText);
//     console.log(Http);
// };


//addRow objective: find the 'row' number of the last/newest created order fields row, to then add 1 to it and make that the number on the next row that will be created
function addRow() {
    //find the element with 'newest' class on it and look through its classes for the one that contains 'row'
    let classList = document.getElementsByClassName('newest')[0].className.split(/\s+/);
    for (var i = 0; i < classList.length; i++) {
        if ((classList[i].includes)('row')) {
            //convert the string to a number and remove the first three characters from the string, set a variable to whatever is left plus 1
            let rowNumber = parseInt(classList[i].substring(3), 10) + 1;
            //remove the 'newest' class from the element that currently has it
            document.getElementsByClassName('newest')[0].classList.remove('newest');
            //create the new elements, adding a class of 'newest' to the product input and a class of 'row<rowNumbervariable> to all' 
            $("[rel='js-order-form__product-field--container']").append(`<input type="text" name="product" class="order-form__input order-form__order-field order-form__product row${rowNumber} newest">`);
            $("[rel='js-order-form__quad-column1']").append(`<div class="remove-row__section row${rowNumber}" rel="js-remove-row__section--row${rowNumber}">`);
            $(`[rel='js-remove-row__section--row${rowNumber}']`).append(`<button type="button" class="remove-row__button row${rowNumber}">-</button>`).click([rowNumber], removeRow);
            $(`[rel='js-remove-row__section--row${rowNumber}']`).append(`<span class="remove-row__button--text input-label row${rowNumber}">Remove</span>`);
            $("[rel='js-order-form__quad-column2']").append(`<input type="text" name="quantity" class="order-form__input order-form__order-field order-form__quantity row${rowNumber}">`);
            $("[rel='js-order-form__quad-column3']").append(`<input type="text" name="dietary-options" class="order-form__input order-form__order-field order-form__dietary-options row${rowNumber}">`);
            $("[rel='js-order-form__quad-column4']").append(`<input type="text" value="will be generated and not an input" name="price" class="order-form__input order-form__order-field order-form__price row${rowNumber}">`);
        };
    };

};

function removeRow() {
    $('.remove-row__button').click(function () {
        alert('Handler for .click() called.');
        let classList = $(this)[0].className.split(/\s+/);
        // let row = classList.find(class => {
        //     return class.includes('row')
        //});
        // let rowNum = row.substring(3);
        for (var i = 0; i < classList.length; i++) {
            if ((classList[i].includes)('row')) {
                console.log('logging classList' + classList[i]);
                if ((classList[i].includes)('row')) {
                    let rowNumber = (classList[i].substring(3));
                    let elementToFind = 'row' + rowNumber;
                    console.log(elementToFind);
                    $(`.${elementToFind}`).remove();
                };
            };

        };
    });
};

