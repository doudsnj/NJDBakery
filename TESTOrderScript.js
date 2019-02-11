// TODO: personal pref and completely optional: my last 2 teams have alphabetized their .js/.ts files, so that when everything is collapsed it's a bit easier to find stuff.
//  it's pretty nit-picky so don't worry about it if you don't want, but it seems like something you'd like to have :)

//addRow Objective: find the 'entry' number of the last/newest created order fields row, to then add 1 to it and make that the number on the next row that will be created
//runs when the Add more button is clicked
function addRow() {
    //find the element with 'newest' class on it and look through its classes for the one that contains 'entry'
    // TODO: rather than split and loop through the classNames, maybe you could just use .find or .filter to get the current class that way?
    const classList = document.getElementsByClassName('newestRow')[0].className.split(/\s+/);
    classList.forEach(currentClass => {
        if ((currentClass.includes)('entry')) {
            // TODO: I think there's a safer way to get that last character, try currentClass.slice(-1). The thought here is that, if you ever change the word 'entry', suddenly you have to remember to change the substring length, but by getting the last char, it doesn't matter what you call that class now
            //convert the string to a number and remove the first five characters from the string, set a variable to whatever is left plus 1
            const rowNumber = parseInt(currentClass.substring(5), 10) + 1;

            //remove the 'newest' class from the element that currently has it
            // TODO: maybe you could just use a basic css selector here since you've got jQuery elsewhere? $('.newestRow').classList... or whatever that syntax is
            document.getElementsByClassName('newestRow')[0].classList.remove('newestRow');

            // TODO: this is a tad tricky to read and grok. One possible way of helping this would be to extract the selectors into a well named variable, and then use that variable for appending
            //create the new elements, adding a class of 'newestRow' to the order-fields__row and a class of 'row<rowNumbervariable> to all'
            $("[rel='js-order-fields__rows']").append(`<div id="row${rowNumber}" class="order-fields__row order-fields__row${rowNumber} newestRow entry${rowNumber}" rel="js-order-fields__row--${rowNumber}"></div>`);
            $(`[rel='js-order-fields__row--${rowNumber}']`).append(`<div class="order-form__bi-column order-form__bi-column--left order-form__bi-column--left--${rowNumber}" rel="js-order-form__bi-column__left--${rowNumber}"></div>`);
            $(`[rel='js-order-form__bi-column__left--${rowNumber}']`).append(`<div class="order-form__quad-column order-form__quad-column1 order-form__quad-column1--${rowNumber}" rel="js-order-form__quad-column1--${rowNumber}"></div>`);
            $(`[rel='js-order-form__quad-column1--${rowNumber}']`).append(`<div class="order-form__product-field--container order-form__product-field--container--${rowNumber} order-form__input" rel="js-order-form__product-field--container--${rowNumber}"></div>`);
            $(`[rel='js-order-form__product-field--container--${rowNumber}']`).append(`<select type="select" name="product" onclick="populateInfo(this)" id="product${rowNumber}" class="select order-form__input order-form__product order-form__product${rowNumber}  entry${rowNumber}"></select>`);
            $(`[rel='js-order-form__quad-column1--${rowNumber}']`).append(`<div class="remove-row__section remove-row__section--${rowNumber}" rel="js-remove-row__section--${rowNumber}"></div>`);
            $(`[rel='js-remove-row__section--${rowNumber}']`).append(`<button type="button" id="remove-row__button${rowNumber}" onclick="removeRow(this)"class="remove-row__button remove-row__button${rowNumber} entry${rowNumber} ">-</button>`);
            $(`[rel='js-order-form__bi-column__left--${rowNumber}']`).append(`<div class="order-form__quad-column order-form__quad-column2 order-form__quad-column2--${rowNumber}" rel="js-order-form__quad-column2--${rowNumber}"></div>`);
            $(`[rel='js-order-form__quad-column2--${rowNumber}']`).append(`<div class="quantity__bi-column quantity__bi-column--left" rel="js-quantity__bi-column--left--${rowNumber}"></div>`);
            $(`[rel='js-quantity__bi-column--left--${rowNumber}']`).append(`<p class="order-form__servings--text order-form__servings--text${rowNumber}" rel="js-order-form__servings${rowNumber}"></p>`);
            $(`[rel='js-order-form__quad-column2--${rowNumber}']`).append(`<div class="quantity__bi-column quantity__bi-column--right" rel="js-quantity__bi-column--right--${rowNumber}"></div>`);
            $(`[rel='js-quantity__bi-column--right--${rowNumber}']`).append(`<select type="text" name="quantity" id="quantity${rowNumber}" onclick="findRowNumber(this);calculatePrice(this)"  class="order-form__input order-form__quantity order-form__quantity${rowNumber} entry${rowNumber}" rel="js-order-form__quantity${rowNumber}"></select>`);

            // TODO: for example, what do you think of this?
            const orderFormQty = $(`[rel='js-order-form__quantity${rowNumber}']`);
            orderFormQty.append('<option value="1" selected="selected">1 batch</option>');
            orderFormQty.append('<option value="2">2 batches</option>');
            orderFormQty.append('<option value="3">3 batches</option>');
            orderFormQty.append('<option value="4">4 batches</option>');
            orderFormQty.append('<option value="5">5 batches</option>');

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
            $(`[rel='js-order-form__quad-column4--${rowNumber}']`).append(`<p class="order-form__price--text order-form__price--text${rowNumber} generated disabled" rel="js-order-form__price${rowNumber}"></p>`);

            // TODO: string interpolation
            const specificDropdown = `.order-form__product${rowNumber}`;
            const dropdown = $(specificDropdown);

            dropdown.empty();

            dropdown.append('<option selected="true" disabled>Select...</option>');
            dropdown.prop('selectedIndex', 0);

            const url = 'http://localhost:56886/api/products?parentsOnly=true';
// TODO: nit: avoid 2 consecutive line breaks
// TODO: I think that it's time to move  these API calls to their own files. Not everyone does this, but I'm a big fan of having any http-related stuff (i.e. api calls) in some type of service layer
// so you could have a file in your /order feature folder, called order-service.js which has nothing but functions that hit the endpoints on the API. Then this file would simply say:
// order-service.getParentsOnlyProducts()
// you might look up some patterns for this type of thing, because there are a lot of ways that you can handle the callback. Personally I'd just move the below function outside of this function and pass it to your service layer as a callback
// if you get stuck here, I can help show you what that would look like
            $.getJSON(url, function (products) {
                //Nathan - even though 'key' is not used, if i take it out, the Products won't be populated as options in the product select field on new rows that are created. I have no clue why...
                $.each(products, function (key, product) {
                    dropdown.append($('<option></option>').text(product.name));
                })
            });
            // TODO: nit - unnecessary semi-colon
        };
    });

    //hide or show Remove Row button and label depending on if there is more than one row showing
    const numberOfChildren = $('.order-fields__rows > div').length;

    if (numberOfChildren > 2) {
        const removeRowButton = document.getElementsByClassName('remove-row__button')[0];
        removeRowButton.classList.add('noVisibility');
        const removeRowLabel = document.getElementsByClassName('input-label__remove-row')[0];
        removeRowButton.classList.remove('noVisibility');
        removeRowLabel.classList.remove('noVisibility');
    }
    // TODO: nit - unnecessary semi-colon
};

//Find the row number that the clicked element is in
function findRowNumber(currentId) {
    const idOnDiv = $(currentId).closest('.order-fields__row').attr('id');
    const currentRowNumber = (idOnDiv.substring(3));
    return currentRowNumber;
    // TODO: nit - unnecessary semi-colon
};

//If a remove row button is clicked, remove all fields in that row and set the previous row to the 'newest' row. If only one row remains, hide the remove option.
function removeRow(currentId) {
    const currentRowNumber = findRowNumber(currentId);
    // TODO: why parseFloat vs parseInt? Generally we try to avoid floats (and really anything in .js involving anything beyond basic math) because .js sucks at stuff like that
    const rowNumberMinusOne = parseFloat(currentRowNumber) - 1;
    const rowToAddClassTo = 'order-fields__row' + rowNumberMinusOne;
    const rowToRemove = 'order-fields__row' + currentRowNumber;
    //determine if the row that's going to be deleted has the 'newestRow' class on it
    // TODO: as above, can we just use jQuery and a .css selector?
    const classListOfRowToFind = document.getElementsByClassName(rowToRemove)[0].className.split(/\s+/);
    if ((classListOfRowToFind.includes)('newestRow')) {
        //if it does, remove that row. Then find the row that was right before it and add the 'newestRow' class to it
        $(`.${rowToRemove}`).remove();
        $(`.${rowToAddClassTo}`).addClass('newestRow');
    } else {
        $(`.${rowToRemove}`).remove();
        // TODO: nit - unnecessary semi-colon
    };

    //If only one row of fields remains, hide the remove button and label
    const numberOfChildren = $('.order-fields__rows > div').length;
    // TODO: use ===
    if (numberOfChildren == 2) {
        const removeRowButton = document.getElementsByClassName('remove-row__button')[0];
        removeRowButton.classList.add('noVisibility');
        const removeRowLabel = document.getElementsByClassName('input-label__remove-row')[0];
        removeRowLabel.classList.add('noVisibility');
    }
    // TODO: nit - unnecessary semi-colon
};

//When the quantity/number of batches is changed, calculate the price for the current row based on the number of batches selected
function calculatePrice(currentId) {
    const currentRowNumber = findRowNumber(currentId);
    const currentDropdownClass = '.order-form__product' + currentRowNumber;
    const currentProduct = $(`${currentDropdownClass} option:selected`).text();
    const url = 'http://localhost:56886/api/products?parentsOnly=true';

    // TODO: move to service layer
    $.getJSON(url, function (products) {

        products.forEach(product => {
            if (currentProduct === product.name) {
                const currentProductBatchPrice = (product.batchPrice);
                const currentQuantityDropdownClass = '.order-form__quantity' + currentRowNumber;
                const currentBatchSelection = $(`${currentQuantityDropdownClass} option:selected`).val();
                const pricePerRow = currentBatchSelection * currentProductBatchPrice;
                $(`[rel='js-order-form__price${currentRowNumber}']`).html('$' + pricePerRow);
                // TODO: nit - unnecessary semi-colon
            };
        })
    })
    // TODO: nit - unnecessary semi-colon
};

//Populate the Product Select dropdown of the default row with the Parent Products from the API
$(document).ready(function () {
    const dropdown = $('.order-form__product1');
    dropdown.empty();
    dropdown.append('<option selected="true" disabled>Select...</option>');
    dropdown.prop('selectedIndex', 0);
    const url = 'http://localhost:56886/api/products?parentsOnly=true';

    // TODO: move to service layer
    // Populate dropdown with list of products
    $.getJSON(url, function (products) {
        //Nathan - Same issues as above when doing the same thing: Even though 'key' is not used, if i take it out, the Products won't be populated as options in the product select field on new rows that are created. I have no clue why...
        //Also, should this just be a function that is called whenever a Product dropdown is clicked?
        $.each(products, function (key, product) {
            dropdown.append($('<option></option>').text(product.name));
        })
    });
});

//When a Product option is chosen, populate info about that product from the API
function populateInfo(currentId) {
    const currentRowNumber = findRowNumber(currentId);
    const currentDropdownClass = '.order-form__product' + currentRowNumber;
    const currentProduct = $(`${currentDropdownClass} option:selected`).text();

    //Reset Quantity field to default option
    //TODO: Find a way to only do this if the select option is actually changed, and not just when the Product field is clicked
    // TODO: missing semi-colon
    const currentQuantity = 'quantity' + currentRowNumber //TODO: nit, missing ;
    $('#' + currentQuantity).val('1');

    //Find the entry in the API that has the same name as the option that is currently in the Product dropdown. Populate a p element with its default dietary info.
    //Disable dietary option checkboxes based on what the product 'can be'.
    const url = 'http://localhost:56886/api/products?parentsOnly=true';

    // TODO: move to svc layer
    $.getJSON(url, function (products) {

        products.forEach(product => {
            if (currentProduct === product.name) {
                let defaultOptionsText = 'Default product is: ';

                // TODO: I think I'd be inclined to have this in its own file. With that said, to do that properly, you probably should move to a module pattern of some sort, and if that doesn't sound familiar
                // then I'd say just move these 2 big collections out of this function but leave them in the file. Down the road I think we'll want to use something like the 'revealing module pattern', which keeps you from dumping all of this stuff
                // into the global scope. For now it's fine though, because I think having the code just working in a simple but clean way is good enough so that you can start writing tests. Moving to modules would be
                // a nice development phase 2, and definitely something that will benefit all of your code (not just this, but your test suites too)

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

                // TODO: const? as above, I'd be inclined to move this out of the function
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
                ] // TODO: missing ;

                //Update 'defaultOptionsText' and check/disable or uncheck/enable the boxes of the default options
                allergenInfo.forEach(option => {
                    setCheckboxAttributes(option.defaultOptionsTextExtension, option.className, option.productField);
                });

                //Disable check boxes for dietary options that are not available on the current product
                allergenInfo.forEach(option => {
                    disableUnavailableOptions(option.className, option.canBeField);
                });


                updateDefaultOptionsText();

                // TODO: I'd move the following 4 functions outside of this function
                // TODO: maybe some more descriptive param names here? even if it's just defaultOpttionsTextExt, className, productField
                function setCheckboxAttributes(a, b, c) {
                    if (c) {
                        updateDefaultOptionsTextAbbreviations(a);
                    }
                    // TODO: const
                    let neededClass = `.order-form__checkbox--${b}${currentRowNumber}`;
                    $(neededClass).attr('checked', c);
                    $(neededClass).attr('disabled', c);
                }; // TODO: unnecessary ;

                function disableUnavailableOptions(className, availableOption) {
                    if (!availableOption) {
                        // TODO: const
                        let neededClass = `.order-form__checkbox--${className}${currentRowNumber}`;
                        $(neededClass).attr('disabled', true);
                    }
                }; // TODO: unnecessary ;

                function updateDefaultOptionsTextAbbreviations(currentOption) {
                    defaultOptionsTextAbbreviations.forEach(option => {
                        // TODO: ===
                        if (option.abbreviation == currentOption) {
                            option.needed = 'Yes';
                        }
                    });
                }

                function updateDefaultOptionsText() {
                    defaultOptionsTextAbbreviations.forEach(option => {
                        if (option.needed === 'Yes') {
                            // TODO: string interpolation
                            defaultOptionsText = `${defaultOptionsText} ${option.abbreviation}`;
                        }
                    })
                }

                //Populate text of what the default version of the product has for allergen free info
                $(`[rel='js-dietary-options__defaults-text${currentRowNumber}']`).html(defaultOptionsText);

                //Populate servings per product batch
                let currentProductDefaultNumberOfServings = (product.defaultNumberOfServings);
                $(`[rel='js-order-form__servings${currentRowNumber}']`).html(currentProductDefaultNumberOfServings);

                //Populate the default price for the current row, for one batch
                $(`[rel='js-order-form__price${currentRowNumber}']`).html('$' + product.batchPrice);
            }
        });
    });
}; // TODO: unnecessary ;

// TODO: nit - always finish files with just one blank line - this is weird but it's just one of those quirky best practices, and is a unix thing (so you'd only have problems for someone running on linux or mac, and even though, you'd probably never have a problem, but we all just do it anyways)








