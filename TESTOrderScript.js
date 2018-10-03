// const Http = new XMLHttpRequest();
// const url = 'https://njd-bakery.azurewebsites.net/api/Products';
// Http.open("GET", url);
// Http.send();

// Http.onload = function () {
//     console.log(Http.responseText);
//     console.log(Http);
// };


//addRow objective: find the 'entry' number of the last/newest created order fields row, to then add 1 to it and make that the number on the next row that will be created
function addRow() {
    console.log('top line of addRow function');
    //find the element with 'newest' class on it and look through its classes for the one that contains 'entry'
    let classList = document.getElementsByClassName('newest')[0].className.split(/\s+/);
    for (var i = 0; i < classList.length; i++) {
        if ((classList[i].includes)('entry')) {
            console.log('in addRow function');
            //convert the string to a number and remove the first three characters from the string, set a variable to whatever is left plus 1
            let rowNumber = parseInt(classList[i].substring(5), 10) + 1;
            console.log('rowNumber is: ' + rowNumber);
            //remove the 'newest' class from the element that currently has it
            document.getElementsByClassName('newest')[0].classList.remove('newest');
            //create the new elements, adding a class of 'newest' to the product input and a class of 'row<rowNumbervariable> to all' 
            $("[rel='js-order-fields__rows']").append(`<div class="order-fields__row order-fields__row${rowNumber}" rel="js-order-fields__row--${rowNumber}"></div>`);
            $(`[rel='js-order-fields__row--${rowNumber}']`).append(`<div class="order-form__bi-column order-form__bi-column--left order-form__bi-column--left--${rowNumber}" rel="js-order-form__bi-column__left--${rowNumber}"></div>`);
            $(`[rel='js-order-form__bi-column__left--${rowNumber}']`).append(`<div class="order-form__quad-column order-form__quad-column1 order-form__quad-column1--${rowNumber}" rel="js-order-form__quad-column1--${rowNumber}"></div>`);
            $(`[rel='js-order-form__quad-column1--${rowNumber}']`).append(`<div class="order-form__product-field--container order-form__product-field--container--${rowNumber}" rel="js-order-form__product-field--container--${rowNumber}"></div>`);
            $(`[rel='js-order-form__product-field--container--${rowNumber}']`).append(`<input type="text" name="product" class="order-form__input order-form__product order-form__product--${rowNumber} newest entry${rowNumber}">`);
            $(`[rel='js-order-form__quad-column1--${rowNumber}']`).append(`<div class="remove-row__section remove-row__section--entry${rowNumber}" rel="js-remove-row__section--${rowNumber}"></div>`);
            $(`[rel='js-remove-row__section--${rowNumber}']`).append(`<button type="button" class="remove-row__button remove-row__button${rowNumber}">-</button>`);
            $(`[rel='js-order-form__bi-column__left--${rowNumber}']`).append(`<div class="order-form__quad-column order-form__quad-column2 order-form__quad-column2--${rowNumber}" rel="js-order-form__quad-column2--${rowNumber}"></div>`);
            $(`[rel='js-order-form__quad-column2--${rowNumber}']`).append(`<input type="text" name="quantity" class="order-form__input order-form__quantity order-form__quantity${rowNumber}">`);
            $(`[rel='js-order-fields__row--${rowNumber}']`).append(`<div class="order-form__bi-column order-form__bi-column--right order-form__bi-column--right--${rowNumber}" rel="js-order-form__bi-column__right--${rowNumber}"></div>`);
            $(`[rel='js-order-form__bi-column__right--${rowNumber}']`).append(`<div class="order-form__quad-column order-form__quad-column3 order-form__quad-column3--${rowNumber}" rel="js-order-form__quad-column3--${rowNumber}"></div>`);
            $(`[rel='js-order-form__quad-column3--${rowNumber}']`).append(`<input type="text" name="dietary-options" class="order-form__input order-form__dietary-options order-form__dietary-options${rowNumber}">`);
            $(`[rel='js-order-form__bi-column__right--${rowNumber}']`).append(`<div class="order-form__quad-column order-form__quad-column4 order-form__quad-column4--${rowNumber}" rel="js-order-form__quad-column4--${rowNumber}"></div>`);
            $(`[rel='js-order-form__quad-column4--${rowNumber}']`).append(`<input type="text" value="will be generated and not an input" name="price" class="order-form__input order-form__order-field order-form__price entry${rowNumber}">`);
        };
    };
};


//removeRow objective: enable the user to remove any row they've filled out by clicking a button on that row
function removeRow() {
    console.log('in top of removeRow function');
    //When any remove row button is clicked, find its classes and split them out into an array
    $('.remove-row__button').click(function () {
        alert('Handler for .click() called.');
        let listOfClasses = $(this)[0].className.split(/\s+/);
        //START - from Nathan
        // let row = classList.find(class => {
        //     return class.includes('row')
        //});
        // let rowNum = row.substring(3);
        //END - from Nathan

        //look through the array of classes on the button that was clicked, and find the one that includes the word 'entry'
        for (var i = 0; i < listOfClasses.length; i++) {
            if ((listOfClasses[i].includes)('entry')) {
                let rowNumber = (listOfClasses[i].substring(5));
                let elementToFind = 'entry' + rowNumber;
                console.log(elementToFind);
                //determine if the row that's going to be deleted has the 'newest' class on it
                //RECENT:
                let classListOfElementToFind = document.getElementsByClassName(elementToFind)[0].className.split(/\s+/);
                //let classListOfElementToFind = $('.' + elementToFind)[0].className.split(/\s+/);
                for (var i = 0; i < classListOfElementToFind.length; i++) {
                    if ((classListOfElementToFind[i].includes)('newest')) {
                        //if it does, then remove that row, find the last child in that same div, find it's row number, and remove all elements with that row number
                        $(`.${elementToFind}`).remove();
                        let lastChildElement = $('.order-form__product-field--container input:last-child');
                        let lastChildClassList = $(lastChildElement)[0].className.split(/\s+/);
                        for (var i = 0; i < lastChildClassList.length; i++) {
                            if ((lastChildClassList[i].includes)('entry')) {
                                let rowNumber = (lastChildClassList[i].substring(5));
                                let nameOfClass = '.entry' + rowNumber;
                                $(nameOfClass).addClass('newest');
                            };
                        };
                        //if it's not the newest row, then simply delete that row
                    } else {
                        var elToRemove = $(`.${elementToFind}`)[0];
                        elToRemove.remove();
                    }
                }


            }
        }
    }
    )
};
//toggleRemoveLabel objective: hide the 'remove row' label and button on the first and only row, if there is only one row
// function toggleRemoveLabel() {
//     $('.remove-row__button').click(function () {
//         let numberOfChildren = $('.order-form__product-field--container > input').length;
//         console.log('numberOfChildren: ' + numberOfChildren);
//     }
//     )//i added this manually
// }