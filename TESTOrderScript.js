// const Http = new XMLHttpRequest();
// const url = 'https://njd-bakery.azurewebsites.net/api/Products';
// Http.open("GET", url);
// Http.send();

// Http.onload = function () {
//     console.log(Http.responseText);
//     console.log(Http);
// };

// var data = JSON.parse(this.response);

// data.forEach(product => {
//     console.log(product.title);
// });



//addRow objective: find the 'entry' number of the last/newest created order fields row, to then add 1 to it and make that the number on the next row that will be created
function addRow() {
    console.log('top line of addRow function');
    //find the element with 'newest' class on it and look through its classes for the one that contains 'entry'
    let classList = document.getElementsByClassName('newestRow')[0].className.split(/\s+/);
    console.log('classList: ' + classList);
    for (var i = 0; i < classList.length; i++) {
        if ((classList[i].includes)('entry')) {
            console.log('in addRow function');
            //convert the string to a number and remove the first three characters from the string, set a variable to whatever is left plus 1
            let rowNumber = parseInt(classList[i].substring(5), 10) + 1;
            console.log('rowNumber is: ' + rowNumber);
            //remove the 'newest' class from the element that currently has it
            document.getElementsByClassName('newestRow')[0].classList.remove('newestRow');
            //create the new elements, adding a class of 'newestRow' to the order-fields__row and a class of 'row<rowNumbervariable> to all' 
            $("[rel='js-order-fields__rows']").append(`<div class="order-fields__row order-fields__row${rowNumber} newestRow entry${rowNumber}" rel="js-order-fields__row--${rowNumber}"></div>`);
            $(`[rel='js-order-fields__row--${rowNumber}']`).append(`<div class="order-form__bi-column order-form__bi-column--left order-form__bi-column--left--${rowNumber}" rel="js-order-form__bi-column__left--${rowNumber}"></div>`);
            $(`[rel='js-order-form__bi-column__left--${rowNumber}']`).append(`<div class="order-form__quad-column order-form__quad-column1 order-form__quad-column1--${rowNumber}" rel="js-order-form__quad-column1--${rowNumber}"></div>`);
            $(`[rel='js-order-form__quad-column1--${rowNumber}']`).append(`<div class="order-form__product-field--container order-form__product-field--container--${rowNumber} order-form__input" rel="js-order-form__product-field--container--${rowNumber}"></div>`);
            $(`[rel='js-order-form__product-field--container--${rowNumber}']`).append(`<select type="select" name="product" class="select order-form__input order-form__product order-form__product${rowNumber}"></select>`);
            $(`[rel='js-order-form__quad-column1--${rowNumber}']`).append(`<div class="remove-row__section remove-row__section--${rowNumber}" rel="js-remove-row__section--${rowNumber}"></div>`);
            $(`[rel='js-remove-row__section--${rowNumber}']`).append(`<button type="button" class="remove-row__button remove-row__button${rowNumber} entry${rowNumber} ">-</button>`);
            $(`[rel='js-order-form__bi-column__left--${rowNumber}']`).append(`<div class="order-form__quad-column order-form__quad-column2 order-form__quad-column2--${rowNumber}" rel="js-order-form__quad-column2--${rowNumber}"></div>`);
            $(`[rel='js-order-form__quad-column2--${rowNumber}']`).append(`<input type="text" name="quantity" class="order-form__input order-form__quantity order-form__quantity${rowNumber}">`);
            $(`[rel='js-order-fields__row--${rowNumber}']`).append(`<div class="order-form__bi-column order-form__bi-column--right order-form__bi-column--right--${rowNumber}" rel="js-order-form__bi-column__right--${rowNumber}"></div>`);
            $(`[rel='js-order-form__bi-column__right--${rowNumber}']`).append(`<div class="order-form__quad-column order-form__quad-column3 order-form__quad-column3--${rowNumber}" rel="js-order-form__quad-column3--${rowNumber}"></div>`);
            $(`[rel='js-order-form__quad-column3--${rowNumber}']`).append(`<input type="text" name="dietary-options" class="order-form__input order-form__dietary-options order-form__dietary-options${rowNumber}">`);
            $(`[rel='js-order-form__bi-column__right--${rowNumber}']`).append(`<div class="order-form__quad-column order-form__quad-column4 order-form__quad-column4--${rowNumber}" rel="js-order-form__quad-column4--${rowNumber}"></div>`);
            $(`[rel='js-order-form__quad-column4--${rowNumber}']`).append(`<input type="text" value="will be generated and not an input" name="price" class="order-form__input order-form__price order-form__price${rowNumber}">`);
            console.log('created new row');
            let specificdropdown = '.order-form__product' + `${rowNumber}`;
            console.log('specific dropdown is: ' + specificdropdown);
            let dropdown = $(specificdropdown);

            console.log('dropdown is: ' + dropdown);
            dropdown.empty();

            dropdown.append('<option selected="true" disabled>Select...</option>');
            dropdown.prop('selectedIndex', 0);

            const url = 'https://njd-bakery.azurewebsites.net/api/products?parentsOnly=true';

            // Populate dropdown with list of products
            $.getJSON(url, function (data) {
                $.each(data, function (key, entry) {
                    dropdown.append($('<option></option>').attr('value', entry.abbreviation).text(entry.name));
                })
            });





        };
    };


    let numberOfChildren = $('.order-fields__rows > div').length;
    console.log('numberOfChildren: ' + numberOfChildren);

    if (numberOfChildren > 2) {
        console.log('numberOfChildren is more than 2: ' + numberOfChildren);
        let removeRowButton = document.getElementsByClassName('remove-row__button')[0];
        removeRowButton.classList.add('noVisibility');
        let removeRowLabel = document.getElementsByClassName('input-label__remove-row')[0];
        removeRowButton.classList.remove('noVisibility');
        removeRowLabel.classList.remove('noVisibility');
    }


};


//objective: If a remove row button is clicked, remove all fields in that row and set the previous row to the 'newest' row. If only one row remains, hide the remove option.
//TODO: Enable the first row to be deleted if more than one row is showing
$(document).on('click', '.remove-row__button', function () {
    console.log('in top of new removeRow function');
    let listOfClassesOnButton = $(this)[0].className.split(/\s+/);
    console.log('listOfClassesOnButton: ' + listOfClassesOnButton);
    //look through the array of classes on the button that was clicked, and find the one that includes the word 'entry'. Then get a substring to see what entry number/what row it is in.
    for (var i = 0; i < listOfClassesOnButton.length; i++) {
        if ((listOfClassesOnButton[i].includes)('entry')) {
            let rowNumber = (listOfClassesOnButton[i].substring(5));
            console.log('rowNumber: ' + rowNumber);
            let rowNumberMinusOne = parseFloat(rowNumber) - 1;
            console.log('rowNumberMinusOne: ' + rowNumberMinusOne);
            let rowToAddClassTo = 'order-fields__row' + rowNumberMinusOne;
            let rowToRemove = 'order-fields__row' + rowNumber;
            console.log('rowToRemove: ' + rowToRemove);
            //determine if the row that's going to be deleted has the 'newestRow' class on it
            let classListOfRowToFind = document.getElementsByClassName(rowToRemove)[0].className.split(/\s+/);
            console.log('classListOfRowToFind: ' + classListOfRowToFind);

            for (var i = 0; i < classListOfRowToFind.length; i++) {

                if ((classListOfRowToFind[i].includes)('newestRow')) {
                    console.log('classListOfRowToFind included "newestRow"');

                    //if it does, remove that row. Then find the row that was right before it and add the 'newestRow' class to it
                    $(`.${rowToRemove}`).remove();
                    $(`.${rowToAddClassTo}`).addClass('newestRow');

                } else {
                    console.log('classListOfRowToFind did not include "newestRow"');
                    $(`.${rowToRemove}`).remove();

                }
            }
        }

    }

    //If only one row of fields remains, hide the remove button and label
    let numberOfChildren = $('.order-fields__rows > div').length;
    console.log('numberOfChildren: ' + numberOfChildren);

    if (numberOfChildren == 2) {
        console.log('numberOfChildren is 1: ' + numberOfChildren);
        let removeRowButton = document.getElementsByClassName('remove-row__button')[0];
        removeRowButton.classList.add('noVisibility');
        let removeRowLabel = document.getElementsByClassName('input-label__remove-row')[0];
        removeRowLabel.classList.add('noVisibility');
    }
});


//NOT CURRENTLY IN USE - using html default Select element for the time being. 
//Objective: Show and hide the Product list when the Select field is clicked
//TODO: Add functionality to collapse the list if anywhere else on the page is clicked
// $(document).on('click', '.order-form__product-select-container', function () {
//     let listOfClassesOnSelect = $(this)[0].className.split(/\s+/);
//     for (var i = 0; i < listOfClassesOnSelect.length; i++) {
//         if ((listOfClassesOnSelect[i].includes)('entry')) {
//             let rowNumber = parseInt(listOfClassesOnSelect[i].substring(5), 10);
//             let productListClasses = document.getElementsByClassName(`order-form__product-option-list${rowNumber}`)[0];
//             if (productListClasses.classList.contains('noVisibility')) {
//                 $(`.order-form__product-option-list${rowNumber}`).removeClass('noVisibility');
//             } else {
//                 $(`.order-form__product-option-list${rowNumber}`).addClass('noVisibility');
//             }
//         }
//     }

// });



//Objective: Populate the Product Select dropdown of the default row with the Parent Products from the API
$(document).ready(function () {
    let dropdown = $('.order-form__product');

    dropdown.empty();

    dropdown.append('<option selected="true" disabled>Select...</option>');
    dropdown.prop('selectedIndex', 0);

    const url = 'https://njd-bakery.azurewebsites.net/api/products?parentsOnly=true';

    // Populate dropdown with list of products
    $.getJSON(url, function (data) {
        $.each(data, function (key, entry) {
            dropdown.append($('<option></option>').attr('value', entry.abbreviation).text(entry.name));
            console.log('added Default Products to product dropdown');
        })
    });
});






