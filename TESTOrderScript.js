//addRow objective: find the 'entry' number of the last/newest created order fields row, to then add 1 to it and make that the number on the next row that will be created
function addRow() {
    console.log('top line of addRow function');
    //find the element with 'newest' class on it and look through its classes for the one that contains 'entry'
    let classList = document.getElementsByClassName('newestRow')[0].className.split(/\s+/);
    console.log('classList: ' + classList);
    for (var i = 0; i < classList.length; i++) {
        if ((classList[i].includes)('entry')) {
            console.log('in addRow function');
            //convert the string to a number and remove the first five characters from the string, set a variable to whatever is left plus 1 
            let rowNumber = parseInt(classList[i].substring(5), 10) + 1;
            console.log('rowNumber is: ' + rowNumber);
            //remove the 'newest' class from the element that currently has it
            document.getElementsByClassName('newestRow')[0].classList.remove('newestRow');
            //create the new elements, adding a class of 'newestRow' to the order-fields__row and a class of 'row<rowNumbervariable> to all' 
            $("[rel='js-order-fields__rows']").append(`<div class="order-fields__row order-fields__row${rowNumber} newestRow entry${rowNumber}" rel="js-order-fields__row--${rowNumber}"></div>`);
            $(`[rel='js-order-fields__row--${rowNumber}']`).append(`<div class="order-form__bi-column order-form__bi-column--left order-form__bi-column--left--${rowNumber}" rel="js-order-form__bi-column__left--${rowNumber}"></div>`);
            $(`[rel='js-order-form__bi-column__left--${rowNumber}']`).append(`<div class="order-form__quad-column order-form__quad-column1 order-form__quad-column1--${rowNumber}" rel="js-order-form__quad-column1--${rowNumber}"></div>`);
            $(`[rel='js-order-form__quad-column1--${rowNumber}']`).append(`<div class="order-form__product-field--container order-form__product-field--container--${rowNumber} order-form__input" rel="js-order-form__product-field--container--${rowNumber}"></div>`);
            $(`[rel='js-order-form__product-field--container--${rowNumber}']`).append(`<select type="select" name="product" class="select order-form__input order-form__product order-form__product${rowNumber}  entry${rowNumber}"></select>`);
            $(`[rel='js-order-form__quad-column1--${rowNumber}']`).append(`<div class="remove-row__section remove-row__section--${rowNumber}" rel="js-remove-row__section--${rowNumber}"></div>`);
            $(`[rel='js-remove-row__section--${rowNumber}']`).append(`<button type="button" class="remove-row__button remove-row__button${rowNumber} entry${rowNumber} ">-</button>`);
            $(`[rel='js-order-form__bi-column__left--${rowNumber}']`).append(`<div class="order-form__quad-column order-form__quad-column2 order-form__quad-column2--${rowNumber}" rel="js-order-form__quad-column2--${rowNumber}"></div>`);
            $(`[rel='js-order-form__quad-column2--${rowNumber}']`).append(`<div class="quantity__bi-column quantity__bi-column--left" rel="js-quantity__bi-column--left--${rowNumber}"></div>`);
            $(`[rel='js-quantity__bi-column--left--${rowNumber}']`).append(`<p class="order-form__servings--text order-form__servings--text${rowNumber}" rel="js-order-form__servings${rowNumber}"></p>`);
            $(`[rel='js-order-form__quad-column2--${rowNumber}']`).append(`<div class="quantity__bi-column quantity__bi-column--right" rel="js-quantity__bi-column--right--${rowNumber}"></div>`);
            $(`[rel='js-quantity__bi-column--right--${rowNumber}']`).append(`<select type="text" name="quantity" class="order-form__input order-form__quantity order-form__quantity${rowNumber} entry${rowNumber}" rel="js-order-form__quantity${rowNumber}"></select>`);
            $(`[rel='js-order-form__quantity${rowNumber}']`).append('<option value="0">Select...</option>');
            $(`[rel='js-order-form__quantity${rowNumber}']`).append('<option value="1">1 batch</option>');
            $(`[rel='js-order-form__quantity${rowNumber}']`).append('<option value="2">2 batches</option>');
            $(`[rel='js-order-form__quantity${rowNumber}']`).append('<option value="3">3 batches</option>');
            $(`[rel='js-order-form__quantity${rowNumber}']`).append('<option value="4">4 batches</option>');
            $(`[rel='js-order-form__quantity${rowNumber}']`).append('<option value="5">5 batches</option>');
            $(`[rel='js-order-fields__row--${rowNumber}']`).append(`<div class="order-form__bi-column order-form__bi-column--right order-form__bi-column--right--${rowNumber}" rel="js-order-form__bi-column__right--${rowNumber}"></div>`);
            $(`[rel='js-order-form__bi-column__right--${rowNumber}']`).append(`<div class="order-form__quad-column order-form__quad-column3 order-form__quad-column3--${rowNumber}" rel="js-order-form__quad-column3--${rowNumber}"></div>`);
            $(`[rel='js-order-form__quad-column3--${rowNumber}']`).append(`<div class="order-form__dietary-options-container" rel="js-order-form__dietary-options-container--${rowNumber}"></div>`);
            $(`[rel='js-order-form__dietary-options-container--${rowNumber}']`).append(`<div class="dietary-options__quad-column dietary-options__quad-column1" rel="js-dietary-options__quad-column1--${rowNumber}"></div>`);
            $(`[rel='js-dietary-options__quad-column1--${rowNumber}']`).append(`<input type="checkbox" name="DairyFree" value="DairyFree" class="order-form__checkbox order-form__checkbox--dairyFree${rowNumber}" rel="js-order-form__checkbox--dairyFree${rowNumber}">`);
            $(`[rel='js-dietary-options__quad-column1--${rowNumber}']`).append('<label for="DiaryFree" class="input-label--checkbox input-label__dairy-free">Dairy Free</label><br>');
            $(`[rel='js-dietary-options__quad-column1--${rowNumber}']`).append(`<input type="checkbox" name="EggFree" value="EggFree" class="order-form__checkbox order-form__checkbox--eggFree${rowNumber}" rel="js-order-form__checkbox--eggFree${rowNumber}">`);
            $(`[rel='js-dietary-options__quad-column1--${rowNumber}']`).append(`<label for="EggFree" class="input-label--checkbox input-label__egg-free">Egg Free</label><br>`);
            $(`[rel='js-order-form__dietary-options-container--${rowNumber}']`).append(`<div class="dietary-options__quad-column dietary-options__quad-column2" rel="js-dietary-options__quad-column2--${rowNumber}"></div>`);
            $(`[rel='js-dietary-options__quad-column2--${rowNumber}']`).append(`<input type="checkbox" name="GlutenFree" value="GlutenFree" class="order-form__checkbox order-form__checkbox--glutenFree${rowNumber}" rel="js-order-form__checkbox--glutenFree${rowNumber}" checked disabled>`);
            $(`[rel='js-dietary-options__quad-column2--${rowNumber}']`).append(`<label for="GlutenFree" class="input-label--checkbox input-label__gluten-free">Gluten Free</label><br>`);
            $(`[rel='js-dietary-options__quad-column2--${rowNumber}']`).append(`<input type="checkbox" name="GrainFree" value="GrainFree" class="order-form__checkbox order-form__checkbox--grainFree${rowNumber}" rel="js-order-form__checkbox--grainFree${rowNumber}">`);
            $(`[rel='js-dietary-options__quad-column2--${rowNumber}']`).append(`<label for="GrainFree" class="input-label--checkbox input-label__grain-free">Grain Free</label><br>`);
            $(`[rel='js-order-form__dietary-options-container--${rowNumber}']`).append(`<div class="dietary-options__quad-column dietary-options__quad-column3" rel="js-dietary-options__quad-column3--${rowNumber}"></div>`);
            $(`[rel='js-dietary-options__quad-column3--${rowNumber}']`).append(`<input type="checkbox" name="NutFree" value="NutFree" class="order-form__checkbox order-form__checkbox--nutFree${rowNumber}" rel="js-order-form__checkbox--nutFree${rowNumber}">`);
            $(`[rel='js-dietary-options__quad-column3--${rowNumber}']`).append(`<label for="NutFree" class="input-label--checkbox input-label__Nut-free">Nut Free</label><br>`);
            $(`[rel='js-dietary-options__quad-column3--${rowNumber}']`).append(`<input type="checkbox" name="RefinedSugarFree" value="RefinedSugarFree" class="order-form__checkbox order-form__checkbox--refinedSugarFree${rowNumber}" rel="js-order-form__checkbox--refinedSugarFree${rowNumber}">`);
            $(`[rel='js-dietary-options__quad-column3--${rowNumber}']`).append(`<label for="RefinedSugarFree" class="input-label--checkbox input-label__refined-sugar-free">Sugar Free*</label><br>`);
            $(`[rel='js-order-form__dietary-options-container--${rowNumber}']`).append(`<div class="dietary-options__quad-column dietary-options__quad-column4" rel="js-dietary-options__quad-column4--${rowNumber}"></div>`);
            $(`[rel='js-dietary-options__quad-column4--${rowNumber}']`).append(`<input type="checkbox" name="Vegan" value="Vegan" class="order-form__checkbox order-form__checkbox--vegan${rowNumber}" rel="js-order-form__checkbox--vegan${rowNumber}">`);
            $(`[rel='js-dietary-options__quad-column4--${rowNumber}']`).append(`<label for="Vegan" class="input-label--checkbox input-label__vegan">Vegan</label><br>`);
            $(`[rel='js-order-form__dietary-options-container--${rowNumber}']`).append(`<div class="dietary-options__defaults dietary-options__defaults--${rowNumber}" rel="js-dietary-options__defaults--${rowNumber}">`);
            $(`[rel='js-dietary-options__defaults--${rowNumber}']`).append(`<p class="dietary-options__defaults-text dietary-options__defaults-text${rowNumber}" rel="js-dietary-options__defaults-text${rowNumber}"></p>`);
            $(`[rel='js-order-form__bi-column__right--${rowNumber}']`).append(`<div class="order-form__quad-column order-form__quad-column4 order-form__quad-column4--${rowNumber}" rel="js-order-form__quad-column4--${rowNumber}"></div>`);
            $(`[rel='js-order-form__quad-column4--${rowNumber}']`).append(`<p class="order-form__input order-form__price order-form__price1 generated disabled" rel="js-order-form__price${rowNumber}"></p>`);
            console.log('created new row');

            let specificdropdown = '.order-form__product' + `${rowNumber}`;
            console.log('specific dropdown is: ' + specificdropdown);
            let dropdown = $(specificdropdown);

            console.log('dropdown is: ' + dropdown);
            dropdown.empty();

            dropdown.append('<option selected="true" disabled>Select...</option>');
            dropdown.prop('selectedIndex', 0);

            const url = 'http://localhost:56886/api/products?parentsOnly=true';

            // Populate Product dropdown with list of products
            $.getJSON(url, function (data) {
                $.each(data, function (key, entry) {
                    dropdown.append($('<option></option>').attr('value', entry.abbreviation).text(entry.name));
                })
            });


        };
    };

    //hide or show Remove Row button and label depending on if there is more than one row showing
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

// let currentElementType;

// function findRowNumber() {
//     console.log('in findRowNumber function')
//     console.log('using currentElementType: ' + currentElementType);
//     console.log('this' + this);

//     let listOfClassesOnElement = $(this)[0].className.split(/\s+/);
//     console.log('listOfClassesOnElement: ' + listOfClassesOnElement);
//     for (var i = 0; i < listOfClassesOnElement.length; i++) {
//         if ((listOfClassesOnElement[i].includes)('entry')) {
//             rowNumber = (listOfClassesOnElement[i].substring(5));
//             console.log('rowNumber: ' + rowNumber);
//             return rowNumber;
//             break;
//         }
//     }
// };

// function findRowNumber() {
//     let listOfClassesOnElement = $('.order-form__product')[0].className.split(/\s+/);
//     console.log('listOfClassesOnElement: ' + listOfClassesOnElement);
//     for (var i = 0; i < listOfClassesOnElement.length; i++) {
//         if ((listOfClassesOnElement[i].includes)('entry')) {
//             rowNumber = (listOfClassesOnElement[i].substring(5));
//             console.log('rowNumber: ' + rowNumber);
//             return rowNumber;
//             break;
//         }
//     }

// };







//Objective: If a remove row button is clicked, remove all fields in that row and set the previous row to the 'newest' row. If only one row remains, hide the remove option.
//TODO: Enable the first row to be deleted if more than one row is showing

$(document).on('click', '.remove-row__button', function () {
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





// Objective: Populate the Product Select dropdown of the default row with the Parent Products from the API
$(document).ready(function () {
    let dropdown = $('.order-form__product1');

    dropdown.empty();

    dropdown.append('<option selected="true" disabled>Select...</option>');
    dropdown.prop('selectedIndex', 0);

    const url = 'http://localhost:56886/api/products?parentsOnly=true';

    // Populate dropdown with list of products
    $.getJSON(url, function (data) {
        $.each(data, function (key, entry) {
            dropdown.append($('<option></option>').attr('value', entry.abbreviation).text(entry.name));
            console.log('added Default Products to product dropdown');
        })
    });
});



// Objective: When a Product option is chosen, populate info about that product from the API
$(document).on('click', '.order-form__product', function () {
    currentElementType = ('.order-form__product');

    console.log('currentElementType is ' + currentElementType);
    let rowNumber;

    //Find the list of classes on that specific Product dropdown, and iterate through until you find the specific row number
    // findRowNumber();

    let listOfClassesOnElement = $(this)[0].className.split(/\s+/);
    console.log('this is ' + this);
    console.log('listOfClassesOnElement: ' + listOfClassesOnElement);
    for (var i = 0; i < listOfClassesOnElement.length; i++) {
        if ((listOfClassesOnElement[i].includes)('entry')) {
            rowNumber = (listOfClassesOnElement[i].substring(5));
            console.log('rowNumber: ' + rowNumber);
            break;
        }
    }

    //Set a variable so it holds the class name of the specific Product dropdown that was clicked
    let currentDropdownClass = '.order-form__product' + rowNumber;
    console.log('currentDropdownClass: ' + currentDropdownClass);

    //Get the text of the current selection of the current Product dropdown
    let currentProduct = $(`${currentDropdownClass} option:selected`).text();
    console.log('currentProduct is: ' + currentProduct);


    //Find the entry in the API that has the same name as the option that is currently in the Product dropdown. Populate a p element with its default dietary info. 
    //Disable dietary option checkboxes based on what the product 'can be'.
    const url = 'http://localhost:56886/api/products?parentsOnly=true';

    let data = $.getJSON(url, function (data) {
        console.log(data);

        for (var key in data) {
            if (data.hasOwnProperty(key)) {

                let arrayCurrentName = (data[key].name);
                if (arrayCurrentName === currentProduct) {

                    //Find which dietary options the parent product is by default/when made without alterations
                    console.log('found needed array. arrayCurrentName and currentProduct ' + arrayCurrentName + currentProduct);
                    let currentArraySKU = (data[key].sku);
                    console.log('currentArraySKU ' + currentArraySKU);
                    let currentProductDairyFree = (data[key].dairyFree);
                    console.log('currentProductDairyFree is ' + currentProductDairyFree);
                    let currentProductEggFree = (data[key].eggFree);
                    console.log('currentProductEggFree is ' + currentProductEggFree);
                    let currentProductGlutenFree = (data[key].glutenFree);
                    console.log('currentProductGlutenFree is ' + currentProductGlutenFree);
                    let currentProductGrainFree = (data[key].grainFree);
                    console.log('currentProductGrainFree is ' + currentProductGrainFree);
                    let currentProductNutFree = (data[key].nutFree);
                    console.log('currentProductNutFree is ' + currentProductNutFree);
                    let currentProductSugarFree = (data[key].refinedSugarFree);
                    console.log('currentProductSugarFree is ' + currentProductSugarFree);
                    let currentProductVegan = (data[key].vegan);
                    console.log('currentProductVegan is ' + currentProductVegan);

                    //Find which dietary options the product can be made to fit
                    let canBeDairyFree = (data[key].canBeDairyFree);
                    console.log('canBeDairyFree is ' + canBeDairyFree);
                    let canBeEggFree = (data[key].canBeEggFree);
                    console.log('canBeEggFree is ' + canBeEggFree);
                    let canBeGlutenFree = (data[key].canBeGlutenFree);
                    console.log('canBeGlutenFree is ' + canBeGlutenFree);
                    let canBeGrainFree = (data[key].canBeGrainFree);
                    console.log('canBeGrainFree is ' + canBeGrainFree);
                    let canBeNutFree = (data[key].canBeNutFree);
                    console.log('canBeNutFree is ' + canBeNutFree);
                    let canBeSugarFree = (data[key].canBeRefinedSugarFree);
                    console.log('canBeSugarFree is ' + canBeSugarFree);
                    let canBeVegan = (data[key].canBeVegan);
                    console.log('canBeVegan is ' + canBeVegan);



                    let defaultOptionsText = 'Default product is: ';
                    let dietaryPossibilities;


                    //Update 'defaultOptionsText' and check/disable or uncheck/enable the boxes of the default options
                    if (currentProductDairyFree) {
                        defaultOptionsText = defaultOptionsText + ' DF';
                        console.log('currentProductDairyFree' + currentProductDairyFree);
                        let neededClass = '.order-form__checkbox--dairyFree' + `${rowNumber}`;
                        console.log('neededClass is: ' + neededClass);
                        $(neededClass).attr('checked', true);
                        $(neededClass).attr('disabled', true);
                        console.log('checked and disabled dairyFree checkbox');
                    } else {
                        console.log('currentProductDairyFree' + currentProductDairyFree);
                        let neededClass = '.order-form__checkbox--dairyFree' + `${rowNumber}`;
                        console.log('neededClass is: ' + neededClass);
                        $(neededClass).attr('checked', false);
                        $(neededClass).attr('disabled', false);
                        console.log('unchecked and enabled dairyFree checkbox');
                    }

                    if (currentProductEggFree) {
                        defaultOptionsText = defaultOptionsText + ' EF';
                        console.log('currentProductEggFree' + currentProductEggFree);
                        let neededClass = '.order-form__checkbox--eggFree' + `${rowNumber}`;
                        console.log('neededClass is: ' + neededClass);
                        $(neededClass).attr('checked', true);
                        $(neededClass).attr('disabled', true);
                        console.log('checked and disabled eggFree checkbox');
                    } else {
                        console.log('currentProductEggFree' + currentProductEggFree);
                        let neededClass = '.order-form__checkbox--eggFree' + `${rowNumber}`;
                        console.log('neededClass is: ' + neededClass);
                        $(neededClass).attr('checked', false);
                        $(neededClass).attr('disabled', false);
                        console.log('unchecked and enabled eggFree checkbox');
                    }

                    if (currentProductGlutenFree) {
                        defaultOptionsText = defaultOptionsText + ' GF';
                    }

                    if (currentProductGrainFree) {
                        defaultOptionsText = defaultOptionsText + ' GRF';
                        console.log('currentProductGrainFree' + currentProductGrainFree);
                        let neededClass = '.order-form__checkbox--grainFree' + `${rowNumber}`;
                        console.log('neededClass is: ' + neededClass);
                        $(neededClass).attr('checked', true);
                        $(neededClass).attr('disabled', true);
                        console.log('checked and disabled grainFree checkbox');
                    } else {
                        console.log('currentProductGrainFree' + currentProductGrainFree);
                        let neededClass = '.order-form__checkbox--grainFree' + `${rowNumber}`;
                        console.log('neededClass is: ' + neededClass);
                        $(neededClass).attr('checked', false);
                        $(neededClass).attr('disabled', false);
                        console.log('unchecked and enabled grainFree checkbox');
                    }

                    if (currentProductNutFree) {
                        defaultOptionsText = defaultOptionsText + ' NF';
                        console.log('currentProductNutFree' + currentProductNutFree);
                        let neededClass = '.order-form__checkbox--nutFree' + `${rowNumber}`;
                        console.log('neededClass is: ' + neededClass);
                        $(neededClass).attr('checked', true);
                        $(neededClass).attr('disabled', true);
                        console.log('checked and disabled nutFree checkbox');
                    } else {
                        console.log('currentProductNutFree' + currentProductNutFree);
                        let neededClass = '.order-form__checkbox--nutFree' + `${rowNumber}`;
                        console.log('neededClass is: ' + neededClass);
                        $(neededClass).attr('checked', false);
                        $(neededClass).attr('disabled', false);
                        console.log('unchecked and enabled nutFree checkbox');
                    }

                    if (currentProductSugarFree) {
                        defaultOptionsText = defaultOptionsText + ' RSF';
                        console.log('currentProductSugarFree' + currentProductSugarFree);
                        let neededClass = '.order-form__checkbox--refinedSugarFree' + `${rowNumber}`;
                        console.log('neededClass is: ' + neededClass);
                        $(neededClass).attr('checked', true);
                        $(neededClass).attr('disabled', true);
                        console.log('checked and disabled sugarFree checkbox');
                    } else {
                        console.log('currentProductSugarFree' + currentProductSugarFree);
                        let neededClass = '.order-form__checkbox--refinedSugarFree' + `${rowNumber}`;
                        console.log('neededClass is: ' + neededClass);
                        $(neededClass).attr('checked', false);
                        $(neededClass).attr('disabled', false);
                        console.log('unchecked and enabled sugarFree checkbox');
                    }

                    if (currentProductVegan) {
                        defaultOptionsText = defaultOptionsText + ' V';
                        console.log('currentProductVegan' + currentProductVegan);
                        let neededClass = '.order-form__checkbox--vegan' + `${rowNumber}`;
                        console.log('neededClass is: ' + neededClass);
                        $(neededClass).attr('checked', true);
                        $(neededClass).attr('disabled', true);
                        console.log('checked and disabled vegan checkbox');
                    } else {
                        console.log('currentProductVegan' + currentProductVegan);
                        let neededClass = '.order-form__checkbox--vegan' + `${rowNumber}`;
                        console.log('neededClass is: ' + neededClass);
                        $(neededClass).attr('checked', false);
                        $(neededClass).attr('disabled', false);
                        console.log('unchecked and enabled vegan checkbox');
                    }


                    //Disable checkboxes on options that aren't available per the product
                    if (!canBeDairyFree) {
                        console.log('canBeDairyFree' + canBeDairyFree);
                        let neededClass = '.order-form__checkbox--dairyFree' + `${rowNumber}`;
                        console.log('neededClass is: ' + neededClass);
                        $(neededClass).attr('disabled', true);
                        console.log('disabled dairyFree checkbox');
                    }

                    if (!canBeEggFree) {
                        console.log('canBeEggFree' + canBeEggFree);
                        let neededClass = '.order-form__checkbox--eggFree' + `${rowNumber}`;
                        console.log('neededClass is: ' + neededClass);
                        $(neededClass).attr('disabled', true);
                        console.log('disabled eggFree checkbox');
                    }

                    if (!canBeGlutenFree) {
                        console.log('canBeGlutenFree' + canBeGlutenFree);
                        let neededClass = '.order-form__checkbox--glutenFree' + `${rowNumber}`;
                        console.log('neededClass is: ' + neededClass);
                        $(neededClass).attr('disabled', true);
                        console.log('disabled glutenFree checkbox');
                    }

                    if (!canBeGrainFree) {
                        console.log('canBeGrainFree' + canBeGrainFree);
                        let neededClass = '.order-form__checkbox--grainFree' + `${rowNumber}`;
                        console.log('neededClass is: ' + neededClass);
                        $(neededClass).attr('disabled', true);
                        console.log('disabled grainFree checkbox');
                    }

                    if (!canBeNutFree) {
                        console.log('canBeNutFree' + canBeNutFree);
                        let neededClass = '.order-form__checkbox--nutFree' + `${rowNumber}`;
                        console.log('neededClass is: ' + neededClass);
                        $(neededClass).attr('disabled', true);
                        console.log('disabled nutFree checkbox');
                    }

                    if (!canBeSugarFree) {
                        console.log('canBeSugarFree' + canBeSugarFree);
                        let neededClass = '.order-form__checkbox--sugarFree' + `${rowNumber}`;
                        console.log('neededClass is: ' + neededClass);
                        $(neededClass).attr('disabled', true);
                        console.log('disabled sugarFree checkbox');
                    }

                    if (!canBeVegan) {
                        console.log('canBeVegan' + canVegan);
                        let neededClass = '.order-form__checkbox--vegan' + `${rowNumber}`;
                        console.log('neededClass is: ' + neededClass);
                        $(neededClass).attr('disabled', true);
                        console.log('disabled vegan checkbox');
                    }

                    console.log('after all options checking, defaultOptionsText is ' + defaultOptionsText);
                    $(`[rel='js-dietary-options__defaults-text${rowNumber}']`).html(defaultOptionsText);


                    //Populate servings per product batch
                    let currentProductDefaultNumberOfServings = (data[key].defaultNumberOfServings);
                    console.log('currentProductDefaultNumberOfServings is:' + currentProductDefaultNumberOfServings);
                    $(`[rel='js-order-form__servings${rowNumber}']`).html(currentProductDefaultNumberOfServings);
                }
            }
        }
    })
});

//Populate the Price for the current row
$(document).on('click', '.order-form__quantity', function () {
    let rowNumber;

    //Find the list of classes on that specific Quantity dropdown, and iterate through until you find the specific row number
    let listOfClassesOnElement = $(this)[0].className.split(/\s+/);
    console.log('listOfClassesOnElement: ' + listOfClassesOnElement);
    for (var i = 0; i < listOfClassesOnElement.length; i++) {
        if ((listOfClassesOnElement[i].includes)('entry')) {
            rowNumber = (listOfClassesOnElement[i].substring(5));
            console.log('rowNumber from Quantity click: ' + rowNumber);
            break;
        }
    }

    //Set a variable so it holds the class name of the specific Quantity dropdown that was clicked
    let currentQuantityDropdownClass = '.order-form__quantity' + rowNumber;
    console.log('currentQuantityDropdownClass: ' + currentQuantityDropdownClass);

    //Get the text of the current selection of the current Product dropdown
    let currentQuantity = $(`${currentQuantityDropdownClass} option:selected`).text();
    console.log('currentQuantity is: ' + currentQuantity);

    //Retrieve the BatchPrice from the API of the current Product




});








