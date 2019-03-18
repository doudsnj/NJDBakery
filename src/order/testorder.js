

//Populate the Product Select dropdown of the default row with the Parent Products from the API
$(document).ready(function () {
    populateProductDropdownOptions();
})

//find the 'entry' number of the last/newest created order fields row, to then add 1 to it and make that the number on the next row that will be created
//runs when the Add more button is clicked
function addRow() {
    const rowNumber = findNewestRow() + 1;

    //remove the 'newest' class from the element that currently has it (The commented out jquery just does not work for whatever reason...)
    //$("newestRow").removeClass("newestRow"); THIS DOES NOT WORK.
    document.getElementsByClassName('newestRow')[0].classList.remove('newestRow');

    const rowsContainer = "[rel='js-order-fields__rows']";
    const productContainer = `[rel='js-order-form__product-field--container--${rowNumber}']`;
    const productRow = `[rel='js-order-fields__row--${rowNumber}']`;
    const removeRowSection = `[rel='js-remove-row__section--${rowNumber}']`;
    const leftMainBiColumn = `[rel='js-order-form__bi-column__left--${rowNumber}']`;
    const rightMainBiColumn = `[rel='js-order-form__bi-column__right--${rowNumber}']`;
    const mainQuadColumn1 = `[rel='js-order-form__quad-column1--${rowNumber}']`;
    const mainQuadColumn2 = `[rel='js-order-form__quad-column2--${rowNumber}']`;
    const mainQuadColumn3 = `[rel='js-order-form__quad-column3--${rowNumber}']`;
    const mainQuadColumn4 = `[rel='js-order-form__quad-column4--${rowNumber}']`;
    const leftQuantityBiColumn = `[rel='js-quantity__bi-column--left--${rowNumber}']`;
    const rightQuantityBiColumn = `[rel='js-quantity__bi-column--right--${rowNumber}']`;
    const quantityContainer = `[rel='js-order-form__quantity-field-container--${rowNumber}']`;
    const quantitySelect = `[rel='js-order-form__quantity${rowNumber}']`;
    const dietaryOptions = `[rel='js-order-form__dietary-options-container--${rowNumber}']`;
    const dietOptsQuad1 = `[rel='js-dietary-options__quad-column1--${rowNumber}']`;
    const dietOptsQuad2 = `[rel='js-dietary-options__quad-column2--${rowNumber}']`;
    const dietOptsQuad3 = `[rel='js-dietary-options__quad-column3--${rowNumber}']`;
    const dietOptsQuad4 = `[rel='js-dietary-options__quad-column4--${rowNumber}']`;
    const dietOptsDefaults = `[rel='js-dietary-options__defaults--${rowNumber}']`;

    //create the new elements, adding a class of 'newestRow' to the order-fields__row and a class of 'row<rowNumbervariable> to all' 
    $(rowsContainer).append(`<div id="row${rowNumber}" class="order-fields__row order-fields__row${rowNumber} newestRow entry${rowNumber}" rel="js-order-fields__row--${rowNumber}"></div>`);
    $(productRow).append(`<div class="order-form__bi-column order-form__bi-column--left order-form__bi-column--left--${rowNumber}" rel="js-order-form__bi-column__left--${rowNumber}"></div>`);
    $(leftMainBiColumn).append(`<div class="order-form__quad-column order-form__quad-column1 order-form__quad-column1--${rowNumber}" rel="js-order-form__quad-column1--${rowNumber}"></div>`);
    $(mainQuadColumn1).append(`<div class="order-form__product-field--container order-form__product-field--container--${rowNumber} order-form__input" rel="js-order-form__product-field--container--${rowNumber}"></div>`);
    $(productContainer).append(`<select type="select" name="product" onclick="populateInfo(this);resetQuantity(this, calculatePrice)" id="product${rowNumber}" class="select order-form__input order-form__product order-form__product${rowNumber}  entry${rowNumber}"></select>`);
    $(mainQuadColumn1).append(`<div class="remove-row__section remove-row__section--${rowNumber}" rel="js-remove-row__section--${rowNumber}"></div>`);
    $(removeRowSection).append(`<button type="button" id="remove-row__button${rowNumber}" onclick="removeRow(this)"class="remove-row__button remove-row__button${rowNumber} entry${rowNumber} ">-</button>`);
    $(leftMainBiColumn).append(`<div class="order-form__quad-column order-form__quad-column2 order-form__quad-column2--${rowNumber}" rel="js-order-form__quad-column2--${rowNumber}"></div>`);
    $(mainQuadColumn2).append(`<div class="quantity__bi-column quantity__bi-column--left" rel="js-quantity__bi-column--left--${rowNumber}"></div>`);
    $(leftQuantityBiColumn).append(`<p class="order-form__servings--text order-form__servings--text${rowNumber}" rel="js-order-form__servings${rowNumber}"></p>`);
    $(mainQuadColumn2).append(`<div class="quantity__bi-column quantity__bi-column--right" rel="js-quantity__bi-column--right--${rowNumber}"></div>`);
    $(rightQuantityBiColumn).append(`<div class="order-form__quantity-field--container" rel="js-order-form__quantity-field-container--${rowNumber}"></div>`);
    $(quantityContainer).append(`<select type="text" name="quantity" id="quantity${rowNumber}" onclick="findRowNumber(this);calculatePrice(this)"  class="order-form__input order-form__quantity order-form__quantity${rowNumber} entry${rowNumber}" rel="js-order-form__quantity${rowNumber}"></select>`);
    $(quantitySelect).append('<option value="1" selected="selected">1 batch</option>');
    $(quantitySelect).append('<option value="2">2 batches</option>');
    $(quantitySelect).append('<option value="3">3 batches</option>');
    $(quantitySelect).append('<option value="4">4 batches</option>');
    $(quantitySelect).append('<option value="5">5 batches</option>');
    $(productRow).append(`<div class="order-form__bi-column order-form__bi-column--right order-form__bi-column--right--${rowNumber}" rel="js-order-form__bi-column__right--${rowNumber}"></div>`);
    $(rightMainBiColumn).append(`<div class="order-form__quad-column order-form__quad-column3 order-form__quad-column3--${rowNumber}" rel="js-order-form__quad-column3--${rowNumber}"></div>`);
    $(mainQuadColumn3).append(`<div class="order-form__dietary-options-container" rel="js-order-form__dietary-options-container--${rowNumber}"></div>`);
    $(dietaryOptions).append(`<div class="dietary-options__quad-column dietary-options__quad-column1" rel="js-dietary-options__quad-column1--${rowNumber}"></div>`);
    $(dietOptsQuad1).append(`<input type="checkbox" name="DairyFree" value="DairyFree" class="order-form__checkbox order-form__checkbox--dairyFree${rowNumber}" rel="js-order-form__checkbox--dairyFree${rowNumber}">`);
    $(dietOptsQuad1).append('<label for="DiaryFree" class="input-label--checkbox input-label__dairy-free">Dairy Free</label><br>');
    $(dietOptsQuad1).append(`<input type="checkbox" name="EggFree" value="EggFree" class="order-form__checkbox order-form__checkbox--eggFree${rowNumber}" rel="js-order-form__checkbox--eggFree${rowNumber}">`);
    $(dietOptsQuad1).append(`<label for="EggFree" class="input-label--checkbox input-label__egg-free">Egg Free</label><br>`);
    $(dietaryOptions).append(`<div class="dietary-options__quad-column dietary-options__quad-column2" rel="js-dietary-options__quad-column2--${rowNumber}"></div>`);
    $(dietOptsQuad2).append(`<input type="checkbox" name="GlutenFree" value="GlutenFree" class="order-form__checkbox order-form__checkbox--glutenFree${rowNumber}" rel="js-order-form__checkbox--glutenFree${rowNumber}" checked disabled>`);
    $(dietOptsQuad2).append(`<label for="GlutenFree" class="input-label--checkbox input-label__gluten-free">Gluten Free</label><br>`);
    $(dietOptsQuad2).append(`<input type="checkbox" name="GrainFree" value="GrainFree" class="order-form__checkbox order-form__checkbox--grainFree${rowNumber}" rel="js-order-form__checkbox--grainFree${rowNumber}">`);
    $(dietOptsQuad2).append(`<label for="GrainFree" class="input-label--checkbox input-label__grain-free">Grain Free</label><br>`);
    $(dietaryOptions).append(`<div class="dietary-options__quad-column dietary-options__quad-column3" rel="js-dietary-options__quad-column3--${rowNumber}"></div>`);
    $(dietOptsQuad3).append(`<input type="checkbox" name="NutFree" value="NutFree" class="order-form__checkbox order-form__checkbox--nutFree${rowNumber}" rel="js-order-form__checkbox--nutFree${rowNumber}">`);
    $(dietOptsQuad3).append(`<label for="NutFree" class="input-label--checkbox input-label__Nut-free">Nut Free</label><br>`);
    $(dietOptsQuad3).append(`<input type="checkbox" name="RefinedSugarFree" value="RefinedSugarFree" class="order-form__checkbox order-form__checkbox--refinedSugarFree${rowNumber}" rel="js-order-form__checkbox--refinedSugarFree${rowNumber}">`);
    $(dietOptsQuad3).append(`<label for="RefinedSugarFree" class="input-label--checkbox input-label__refined-sugar-free">Sugar Free*</label><br>`);
    $(dietaryOptions).append(`<div class="dietary-options__quad-column dietary-options__quad-column4" rel="js-dietary-options__quad-column4--${rowNumber}"></div>`);
    $(dietOptsQuad4).append(`<input type="checkbox" name="Vegan" value="Vegan" class="order-form__checkbox order-form__checkbox--vegan${rowNumber}" rel="js-order-form__checkbox--vegan${rowNumber}">`);
    $(dietOptsQuad4).append(`<label for="Vegan" class="input-label--checkbox input-label__vegan">Vegan</label><br>`);
    $(dietaryOptions).append(`<div class="dietary-options__defaults dietary-options__defaults--${rowNumber}" rel="js-dietary-options__defaults--${rowNumber}">`);
    $(dietOptsDefaults).append(`<p class="dietary-options__defaults-text dietary-options__defaults-text${rowNumber}" rel="js-dietary-options__defaults-text${rowNumber}"></p>`);
    $(rightMainBiColumn).append(`<div class="order-form__quad-column order-form__quad-column4 order-form__quad-column4--${rowNumber}" rel="js-order-form__quad-column4--${rowNumber}"></div>`);
    $(mainQuadColumn4).append(`<p class="order-form__price--text order-form__price--text${rowNumber} generated disabled" rel="js-order-form__price${rowNumber}"></p>`);

    populateProductDropdownOptions(rowNumber);

    //hide or show Remove Row button and label depending on if there is more than one row showing
    const numberOfChildren = $('.order-fields__rows > div').length;

    if (numberOfChildren > 2) {
        const removeRowButton = document.getElementsByClassName('remove-row__button')[0];
        removeRowButton.classList.add('noVisibility');
        const removeRowLabel = document.getElementsByClassName('input-label__remove-row')[0];
        removeRowButton.classList.remove('noVisibility');
        removeRowLabel.classList.remove('noVisibility');
    }
}

//When the quantity/number of batches is changed, calculate the price for the current row based on the number of batches selected
function calculatePrice(currentId) {
    const currentRowNumber = findRowNumber(currentId);
    const currentDropdownClass = '.order-form__product' + currentRowNumber;
    const currentProduct = $(`${currentDropdownClass} option:selected`).text();
    const url = 'http://localhost:56886/api/products?parentsOnly=true';

    $.getJSON(url, function (products) {

        products.forEach(product => {
            if (currentProduct === product.name) {
                const currentProductBatchPrice = (product.batchPrice);
                const currentQuantityDropdownClass = '.order-form__quantity' + currentRowNumber;
                const currentBatchSelection = $(`${currentQuantityDropdownClass} option:selected`).val();
                const pricePerRow = currentBatchSelection * currentProductBatchPrice;
                $(`[rel='js-order-form__price${currentRowNumber}']`).html('$' + pricePerRow);
            }
        })
    })
}


//Finds the row number on the row that was most recently created
function findNewestRow() {
    //find the element with 'newest' class on it and look through its classes for the one that contains 'entry'
    const classList = document.getElementsByClassName('newestRow')[0].className.split(/\s+/);
    const neededClass = classList.find(function (nameOfClass) {
        return nameOfClass.includes('entry');
    })

    //convert the string to a number and remove the first five characters from the string, set a variable to whatever is left
    const rowNumber = parseInt(neededClass.substring(5), 10);
    return rowNumber;
}

//Find the row number that the clicked element is in
function findRowNumber(currentId) {
    const idOnDiv = $(currentId).closest('.order-fields__row').attr('id');
    const currentRowNumber = (idOnDiv.substring(3));
    return currentRowNumber;
}

//Prepares the current product dropdown for API population
function prepProductDropdown(rowNumber) {

    if (!rowNumber) {
        rowNumber = findNewestRow();
    }
    const specificDropdown = `.order-form__product${rowNumber}`;

    const dropdown = $(specificDropdown);

    dropdown.empty();
    dropdown.append('<option selected="true" disabled>Select...</option>');
    dropdown.prop('selectedIndex', 0);
    return dropdown;
}

//When a Product option is chosen, populate info about that product from the API
function populateInfo(currentId) {
    const currentRowNumber = findRowNumber(currentId);
    const currentDropdownClass = '.order-form__product' + currentRowNumber;
    const currentProduct = $(`${currentDropdownClass} option:selected`).text();



    //Find the entry in the API that has the same name as the option that is currently in the Product dropdown. 
    //Populate a p element with its default dietary info. 
    //Disable dietary option checkboxes based on what the product 'can be'.
    const url = 'http://localhost:56886/api/products?parentsOnly=true';

    $.getJSON(url, function (products) {

        products.forEach(product => {
            if (currentProduct === product.name) {
                let defaultOptionsText = 'Default product is: ';

                //allergen options on product
                const allergenInfo = [{
                    defaultOptionsTextExtension: 'DF',
                    className: 'dairyFree',
                    productField: product.dairyFree,
                    canBeField: product.canBeDairyFree
                },
                {
                    defaultOptionsTextExtension: 'EF',
                    className: 'eggFree',
                    productField: product.eggFree,
                    canBeField: product.canBeEggFree
                },
                {
                    defaultOptionsTextExtension: 'GRF',
                    className: 'grainFree',
                    productField: product.grainFree,
                    canBeField: product.canBeGrainFree
                },
                {
                    defaultOptionsTextExtension: 'NF',
                    className: 'nutFree',
                    productField: product.nutFree,
                    canBeField: product.canBeNutFree
                },
                {
                    defaultOptionsTextExtension: 'RSF',
                    className: 'refinedSugarFree',
                    productField: product.refinedSugarFree,
                    canBeField: product.canBeRefinedSugarFree
                },
                {
                    defaultOptionsTextExtension: 'V',
                    className: 'vegan',
                    productField: product.vegan,
                    canBeField: product.canBeVegan
                }
                ];

                // Used for creating 'Default product is ' text
                let defaultOptionsTextAbbreviations = [{
                    abbreviation: 'DF',
                    needed: 'No'
                },
                {
                    abbreviation: 'EF',
                    needed: 'No'
                },
                {
                    abbreviation: 'GF',
                    needed: 'Yes'
                },
                {
                    abbreviation: 'GRF',
                    needed: 'No'
                },
                {
                    abbreviation: 'NF',
                    needed: 'No'
                },
                {
                    abbreviation: 'RSF',
                    needed: 'No'
                },
                {
                    abbreviation: 'V',
                    needed: 'No'
                }
                ]

                //Update 'defaultOptionsText' and check/disable or uncheck/enable the boxes of the default options
                allergenInfo.forEach(option => {
                    setCheckboxAttributes(option.defaultOptionsTextExtension, option.className, option.productField);
                })

                //Disable check boxes for dietary options that are not available on the current product
                allergenInfo.forEach(option => {
                    disableUnavailableOptions(option.className, option.canBeField);
                })

                updateDefaultOptionsText();

                function setCheckboxAttributes(defaultOptionsTextExtension, className, productField) {
                    if (productField) {
                        updateDefaultOptionsTextAbbreviations(defaultOptionsTextExtension);
                    }
                    const neededClass = `.order-form__checkbox--${className}${currentRowNumber}`;
                    $(neededClass).attr('checked', productField);
                    $(neededClass).attr('disabled', productField);
                }

                function disableUnavailableOptions(className, availableOption) {
                    if (!availableOption) {
                        const neededClass = `.order-form__checkbox--${className}${currentRowNumber}`;
                        $(neededClass).attr('disabled', true);
                    }
                }

                function updateDefaultOptionsTextAbbreviations(currentOption) {
                    defaultOptionsTextAbbreviations.forEach(option => {
                        if (option.abbreviation == currentOption) {
                            option.needed = 'Yes';
                        }
                    })
                }

                function updateDefaultOptionsText() {
                    defaultOptionsTextAbbreviations.forEach(option => {
                        if (option.needed === 'Yes') {
                            defaultOptionsText = defaultOptionsText + ' ' + option.abbreviation;
                        }
                    })
                }

                //Populate text of what the default version of the product has for allergen free info
                $(`[rel='js-dietary-options__defaults-text${currentRowNumber}']`).html(defaultOptionsText);

                //Populate servings per product batch
                const currentProductDefaultNumberOfServings = (product.defaultNumberOfServings);
                $(`[rel='js-order-form__servings${currentRowNumber}']`).html(currentProductDefaultNumberOfServings);

                //Populate the default price for the current row, for one batch
                $(`[rel='js-order-form__price${currentRowNumber}']`).html('$' + product.batchPrice);
            }
        })
    })
}

//Reset Quantity field to default option when the Product selection changes, then recalculate the price. THe callback function is defined in the onchange in the html 
function resetQuantity(currentId) {
    const currentQuantity = 'quantity' + findRowNumber(currentId);
    $('#' + currentQuantity).val('1');
}



//TODO: this is just the beginnings of splitting out the populateInfo function into svc layer vs text layer
// function populateProductInfo() {

//     getParentsOnlyProducts(parentProducts => {
//         setProductDropdown(parentProducts, dropdown)
//     });
// }


//TODO: this is just the beginnings of splitting out the populateInfo function into svc layer vs text layer
// function setAllergenOptions(){
//     products.forEach(product => {
//         if (currentProduct === product.name) {
//             let defaultOptionsText = 'Default product is: ';

//             //allergen options on product
//             const allergenInfo = [{
//                 defaultOptionsTextExtension: 'DF',
//                 className: 'dairyFree',
//                 productField: product.dairyFree,
//                 canBeField: product.canBeDairyFree
//             },
//             {
//                 defaultOptionsTextExtension: 'EF',
//                 className: 'eggFree',
//                 productField: product.eggFree,
//                 canBeField: product.canBeEggFree
//             },
//             {
//                 defaultOptionsTextExtension: 'GRF',
//                 className: 'grainFree',
//                 productField: product.grainFree,
//                 canBeField: product.canBeGrainFree
//             },
//             {
//                 defaultOptionsTextExtension: 'NF',
//                 className: 'nutFree',
//                 productField: product.nutFree,
//                 canBeField: product.canBeNutFree
//             },
//             {
//                 defaultOptionsTextExtension: 'RSF',
//                 className: 'refinedSugarFree',
//                 productField: product.refinedSugarFree,
//                 canBeField: product.canBeRefinedSugarFree
//             },
//             {
//                 defaultOptionsTextExtension: 'V',
//                 className: 'vegan',
//                 productField: product.vegan,
//                 canBeField: product.canBeVegan
//             }
//             ];

//             // Used for creating 'Default product is ' text
//             let defaultOptionsTextAbbreviations = [{
//                 abbreviation: 'DF',
//                 needed: 'No'
//             },
//             {
//                 abbreviation: 'EF',
//                 needed: 'No'
//             },
//             {
//                 abbreviation: 'GF',
//                 needed: 'Yes'
//             },
//             {
//                 abbreviation: 'GRF',
//                 needed: 'No'
//             },
//             {
//                 abbreviation: 'NF',
//                 needed: 'No'
//             },
//             {
//                 abbreviation: 'RSF',
//                 needed: 'No'
//             },
//             {
//                 abbreviation: 'V',
//                 needed: 'No'
//             }
//             ]

//             //Update 'defaultOptionsText' and check/disable or uncheck/enable the boxes of the default options
//             allergenInfo.forEach(option => {
//                 setCheckboxAttributes(option.defaultOptionsTextExtension, option.className, option.productField);
//             })

//             //Disable check boxes for dietary options that are not available on the current product
//             allergenInfo.forEach(option => {
//                 disableUnavailableOptions(option.className, option.canBeField);
//             })

//             updateDefaultOptionsText();

//             function setCheckboxAttributes(defaultOptionsTextExtension, className, productField) {
//                 if (productField) {
//                     updateDefaultOptionsTextAbbreviations(defaultOptionsTextExtension);
//                 }
//                 const neededClass = `.order-form__checkbox--${className}${currentRowNumber}`;
//                 $(neededClass).attr('checked', productField);
//                 $(neededClass).attr('disabled', productField);
//             }

//             function disableUnavailableOptions(className, availableOption) {
//                 if (!availableOption) {
//                     const neededClass = `.order-form__checkbox--${className}${currentRowNumber}`;
//                     $(neededClass).attr('disabled', true);
//                 }
//             }

//             function updateDefaultOptionsTextAbbreviations(currentOption) {
//                 defaultOptionsTextAbbreviations.forEach(option => {
//                     if (option.abbreviation == currentOption) {
//                         option.needed = 'Yes';
//                     }
//                 })
//             }

//             function updateDefaultOptionsText() {
//                 defaultOptionsTextAbbreviations.forEach(option => {
//                     if (option.needed === 'Yes') {
//                         defaultOptionsText = defaultOptionsText + ' ' + option.abbreviation;
//                     }
//                 })
//             }

//             //Populate text of what the default version of the product has for allergen free info
//             $(`[rel='js-dietary-options__defaults-text${currentRowNumber}']`).html(defaultOptionsText);

//             //Populate servings per product batch
//             const currentProductDefaultNumberOfServings = (product.defaultNumberOfServings);
//             $(`[rel='js-order-form__servings${currentRowNumber}']`).html(currentProductDefaultNumberOfServings);

//             //Populate the default price for the current row, for one batch
//             $(`[rel='js-order-form__price${currentRowNumber}']`).html('$' + product.batchPrice);
//         }
//     })
// }

//Calls functions in a specific order to populate the Product dropdown with a list of parent products from the API
function populateProductDropdownOptions(rowNumber) {
    let dropdown = prepProductDropdown(rowNumber);
    getParentsOnlyProducts(parentProducts => {
        setProductDropdown(parentProducts, dropdown)
    });
}

//If a remove row button is clicked, remove all fields in that row and set the previous row to the 'newest' row. If only one row remains, hide the remove option.
function removeRow(currentId) {
    const currentRowNumber = findRowNumber(currentId);
    const rowNumberMinusOne = parseInt(currentRowNumber) - 1;
    const rowToAddClassTo = 'order-fields__row' + rowNumberMinusOne;
    const rowToRemove = 'order-fields__row' + currentRowNumber;
    //determine if the row that's going to be deleted has the 'newestRow' class on it
    const classListOfRowToFind = document.getElementsByClassName(rowToRemove)[0].className.split(/\s+/);
    if ((classListOfRowToFind.includes)('newestRow')) {
        //if it does, remove that row. Then find the row that was right before it and add the 'newestRow' class to it
        $(`.${rowToRemove}`).remove();
        $(`.${rowToAddClassTo}`).addClass('newestRow');
    } else {
        $(`.${rowToRemove}`).remove();
    }

    //If only one row of fields remains, hide the remove button and label
    const numberOfChildren = $('.order-fields__rows > div').length;
    if (numberOfChildren === 2) {
        const removeRowButton = document.getElementsByClassName('remove-row__button')[0];
        removeRowButton.classList.add('noVisibility');
        const removeRowLabel = document.getElementsByClassName('input-label__remove-row')[0];
        removeRowLabel.classList.add('noVisibility');
    }
}

//TODO: add validation to Pickup/Delivery date field
function setNeededDateMin(currentID) {
    const minDate = moment().add(10, 'days').calendar();

    document.getElementById('neededDate').min = minDate;

    // $(`[rel='js-order-fields__needed-date']`).moment({
    //     minDate: minDate
    // });


    //$(`[rel='js-order-fields__needed-date']`).attr(min, minDate);
}


//Populates the current product dropdown with parent products that were retrieved from the API
function setProductDropdown(products, dropdown) {
    $.each(products, function (key, product) {
        dropdown.append($('<option></option>').text(product.name));
    })
}
