// function populateInfo(currentId) {
//     const currentRowNumber = findRowNumber(currentId);
//     const currentDropdownClass = '.order-form__product' + currentRowNumber;
//     const currentProduct = $(`${currentDropdownClass} option:selected`).text();

//     //Reset Quantity field to default option
//     //TODO: Find a way to only do this if the select option is actually changed, and not just when the Product field is clicked
//     const currentQuantity = 'quantity' + currentRowNumber;
//     $('#' + currentQuantity).val('1');

//     //Find the entry in the API that has the same name as the option that is currently in the Product dropdown. 
//     //Populate a p element with its default dietary info. 
//     //Disable dietary option checkboxes based on what the product 'can be'.
//     const url = 'http://localhost:56886/api/products?parentsOnly=true';

//     $.getJSON(url, function (products) {

//         products.forEach(product => {
//             if (currentProduct === product.name) {
//                 let defaultOptionsText = 'Default product is: ';

//                 //allergen options on product
//                 const allergenInfo = [{
//                     defaultOptionsTextExtension: 'DF',
//                     className: 'dairyFree',
//                     productField: product.dairyFree,
//                     canBeField: product.canBeDairyFree
//                 },
//                 {
//                     defaultOptionsTextExtension: 'EF',
//                     className: 'eggFree',
//                     productField: product.eggFree,
//                     canBeField: product.canBeEggFree
//                 },
//                 {
//                     defaultOptionsTextExtension: 'GRF',
//                     className: 'grainFree',
//                     productField: product.grainFree,
//                     canBeField: product.canBeGrainFree
//                 },
//                 {
//                     defaultOptionsTextExtension: 'NF',
//                     className: 'nutFree',
//                     productField: product.nutFree,
//                     canBeField: product.canBeNutFree
//                 },
//                 {
//                     defaultOptionsTextExtension: 'RSF',
//                     className: 'refinedSugarFree',
//                     productField: product.refinedSugarFree,
//                     canBeField: product.canBeRefinedSugarFree
//                 },
//                 {
//                     defaultOptionsTextExtension: 'V',
//                     className: 'vegan',
//                     productField: product.vegan,
//                     canBeField: product.canBeVegan
//                 }
//                 ];

//                 // Used for creating 'Default product is ' text
//                 let defaultOptionsTextAbbreviations = [{
//                     abbreviation: 'DF',
//                     needed: 'No'
//                 },
//                 {
//                     abbreviation: 'EF',
//                     needed: 'No'
//                 },
//                 {
//                     abbreviation: 'GF',
//                     needed: 'Yes'
//                 },
//                 {
//                     abbreviation: 'GRF',
//                     needed: 'No'
//                 },
//                 {
//                     abbreviation: 'NF',
//                     needed: 'No'
//                 },
//                 {
//                     abbreviation: 'RSF',
//                     needed: 'No'
//                 },
//                 {
//                     abbreviation: 'V',
//                     needed: 'No'
//                 }
//                 ]

//                 //Update 'defaultOptionsText' and check/disable or uncheck/enable the boxes of the default options
//                 allergenInfo.forEach(option => {
//                     setCheckboxAttributes(option.defaultOptionsTextExtension, option.className, option.productField);
//                 })

//                 //Disable check boxes for dietary options that are not available on the current product
//                 allergenInfo.forEach(option => {
//                     disableUnavailableOptions(option.className, option.canBeField);
//                 })

//                 updateDefaultOptionsText();

//                 function setCheckboxAttributes(defaultOptionsTextExtension, className, productField) {
//                     if (productField) {
//                         updateDefaultOptionsTextAbbreviations(defaultOptionsTextExtension);
//                     }
//                     const neededClass = `.order-form__checkbox--${className}${currentRowNumber}`;
//                     $(neededClass).attr('checked', productField);
//                     $(neededClass).attr('disabled', productField);
//                 }

//                 function disableUnavailableOptions(className, availableOption) {
//                     if (!availableOption) {
//                         const neededClass = `.order-form__checkbox--${className}${currentRowNumber}`;
//                         $(neededClass).attr('disabled', true);
//                     }
//                 }

//                 function updateDefaultOptionsTextAbbreviations(currentOption) {
//                     defaultOptionsTextAbbreviations.forEach(option => {
//                         if (option.abbreviation == currentOption) {
//                             option.needed = 'Yes';
//                         }
//                     })
//                 }

//                 function updateDefaultOptionsText() {
//                     defaultOptionsTextAbbreviations.forEach(option => {
//                         if (option.needed === 'Yes') {
//                             defaultOptionsText = defaultOptionsText + ' ' + option.abbreviation;
//                         }
//                     })
//                 }

//                 //Populate text of what the default version of the product has for allergen free info
//                 $(`[rel='js-dietary-options__defaults-text${currentRowNumber}']`).html(defaultOptionsText);

//                 //Populate servings per product batch
//                 const currentProductDefaultNumberOfServings = (product.defaultNumberOfServings);
//                 $(`[rel='js-order-form__servings${currentRowNumber}']`).html(currentProductDefaultNumberOfServings);

//                 //Populate the default price for the current row, for one batch
//                 $(`[rel='js-order-form__price${currentRowNumber}']`).html('$' + product.batchPrice);
//             }
//         })
//     })
// }