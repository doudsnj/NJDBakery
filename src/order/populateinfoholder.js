// //When a Product option is chosen, populate info about that product from the API
// function populateInfo(currentId) {
//     const currentRowNumber = findRowNumber(currentId);
//     const currentDropdownClass = '.order-form__product' + currentRowNumber;
//     const currentProduct = $(`${currentDropdownClass} option:selected`).text();

//     //Find the entry in the API that has the same name as the option that is currently in the Product dropdown. 
//     //Populate a p element with its default dietary info. 
//     //Disable dietary option checkboxes based on what the product 'can be'.
//     const url = 'http://localhost:56886/api/products?parentsOnly=true';

//     $.getJSON(url, function (products) {

//         products.forEach(product => {
//             if (currentProduct === product.name) {
//                 let defaultOptionsText = 'Default product is: ';



//                 //allergen options on product, third and fourth values brought in from API
//                 const allergenInfo = [{
//                     allergenOptionAbbreviation: 'DF',
//                     className: 'dairyFree',
//                     defaultAllergenType: product.dairyFree,
//                     canBeField: product.canBeDairyFree,
//                     abbreviationNeeded: 'No'
//                 },
//                 {
//                     allergenOptionAbbreviation: 'EF',
//                     className: 'eggFree',
//                     defaultAllergenType: product.eggFree,
//                     canBeField: product.canBeEggFree,
//                     abbreviationNeeded: 'No'
//                 },
//                 {
//                     allergenOptionAbbreviation: 'GF',
//                     className: 'glutenFree',
//                     defaultAllergenType: product.glutenFree,
//                     canBeField: product.canBeGlutenFree,
//                     abbreviationNeeded: 'Yes'
//                 },
//                 {
//                     allergenOptionAbbreviation: 'GRF',
//                     className: 'grainFree',
//                     defaultAllergenType: product.grainFree,
//                     canBeField: product.canBeGrainFree,
//                     abbreviationNeeded: 'No'
//                 },
//                 {
//                     allergenOptionAbbreviation: 'NF',
//                     className: 'nutFree',
//                     defaultAllergenType: product.nutFree,
//                     canBeField: product.canBeNutFree,
//                     abbreviationNeeded: 'No'
//                 },
//                 {
//                     allergenOptionAbbreviation: 'RSF',
//                     className: 'refinedSugarFree',
//                     defaultAllergenType: product.refinedSugarFree,
//                     canBeField: product.canBeRefinedSugarFree,
//                     abbreviationNeeded: 'No'
//                 },
//                 {
//                     allergenOptionAbbreviation: 'V',
//                     className: 'vegan',
//                     defaultAllergenType: product.vegan,
//                     canBeField: product.canBeVegan,
//                     abbreviationNeeded: 'No'
//                 }
//                 ];


//                 //Update 'defaultOptionsText' and check/disable or uncheck/enable the boxes of the default options
//                 allergenInfo.forEach(option => {
//                     setCheckboxAttributes(option.allergenOptionAbbreviation, option.className, option.defaultXAllergenType);
//                 })

//                 //Disable check boxes for dietary options that are not available on the current product
//                 allergenInfo.forEach(option => {
//                     disableUnavailableOptions(option.className, option.canBeField);
//                 })

//                 updateDefaultOptionsText();

//                 function setCheckboxAttributes(allergenOptionAbbreviation, className, defaultXAllergenType) {
//                     if (defaultXAllergenType) {
//                         updateDefaultOptionsTextAbbreviations(allergenOptionAbbreviation);
//                     }
//                     const neededClass = `.order-form__checkbox--${className}${currentRowNumber}`;
//                     $(neededClass).attr('checked', defaultXAllergenType);
//                     $(neededClass).attr('disabled', defaultXAllergenType);
//                 }

//                 function disableUnavailableOptions(className, availableOption) {
//                     if (!availableOption) {
//                         const neededClass = `.order-form__checkbox--${className}${currentRowNumber}`;
//                         $(neededClass).attr('disabled', true);
//                     }
//                 }

//                 //Updates the defaultOptionsTextAbbreviation array so that 
//                 function updateDefaultOptionsTextAbbreviations(currentOption) {
//                     allergenInfo.forEach(option => {
//                         if (option.allergenInfoAbbreviation === currentOption) {
//                             option.abbreviationNeeded = 'Yes';
//                         }
//                     })
//                 }

//                 function updateDefaultOptionsText() {
//                     allergenInfo.forEach(option => {
//                         if (option.abbreviationNeeded === 'Yes') {
//                             defaultOptionsText = defaultOptionsText + ' ' + option.allergenOptionAbbreviation;
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