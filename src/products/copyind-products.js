var allergenDefaults = ['X', 'X', 'X', 'X', 'X', 'X', 'X'];
var allergenOptions = ['X', 'X', 'X', 'X', 'X', 'X', 'X'];


// var allergenDetails = [{
//         allergenOptionAbbreviation: 'DF',
//         className: 'dairyFree',
//         isDairyFree: 'X',
//         canBeDairyFree: 'X',
//     },
//     {
//         allergenOptionAbbreviation: 'EF',
//         className: 'eggFree',
//         isEggFree: 'X',
//         canBeEggFree: 'X',
//     },
//     {
//         allergenOptionAbbreviation: 'GF',
//         className: 'glutenFree',
//         isGlutenFree: 'X',
//         canBeGlutenFree: 'X',
//     },
//     {
//         allergenOptionAbbreviation: 'GRF',
//         className: 'grainFree',
//         isGrainFree: 'X',
//         canBeGrainFree: 'X',
//     },
//     {
//         allergenOptionAbbreviation: 'NF',
//         className: 'nutFree',
//         isNutFree: 'X',
//         canBeNutFree: 'X',
//     },
//     {
//         allergenOptionAbbreviation: 'RSF',
//         className: 'refinedSugarFree',
//         isRefinedSugarFree: 'X',
//         canBeRefinedSugarFree: 'X',
//     },
//     {
//         allergenOptionAbbreviation: 'V',
//         className: 'vegan',
//         isVegan: 'X',
//         canBeVegan: 'X',
//     }
// ]

// var allergenDetails = [{
//         abbreviation: 'DF',
//         defaultAllergenType: product.dairyFree,
//         canBeAllergenType: product.canBeDairyFree,
//         className: 'dairyFree',
//         arrayIndex: 0
//     },
//     {
//         abbreviation: 'EF',
//         defaultAllergenType: product.eggFree,
//         canBeAllergenType: product.canBeEggFree,
//         className: 'eggFree',
//         arrayIndex: 1
//     },
//     {
//         abbreviation: 'GF',
//         defaultAllergenType: product.glutenFree,
//         canBeAllergenType: product.canBeGlutenFree,
//         className: 'glutenFree',
//         arrayIndex: 2
//     },
//     {
//         abbreviation: 'GRF',
//         defaultAllergenType: product.grainFree,
//         canBeAllergenType: product.canBeGrainFree,
//         className: 'grainFree',
//         arrayIndex: 3
//     },
//     {
//         abbreviation: 'NF',
//         defaultAllergenType: product.nutFree,
//         canBeAllergenType: product.canBeNutFree,
//         className: 'nutFree',
//         arrayIndex: 4
//     },
//     {
//         abbreviation: 'RSF',
//         defaultAllergenType: product.refinedSugarFree,
//         canBeAllergenType: product.canBeRefinedSugarFree,
//         className: 'refinedSugarFree',
//         arrayIndex: 5
//     },
//     {
//         abbreviation: 'V',
//         defaultAllergenType: product.vegan,
//         canBeAllergenType: product.canBeVegan,
//         className: 'vegan',
//         arrayIndex: 6
//     },
// ]


$(document).ready(function () {
    populateTables();

});

// function getDefaults(currentProduct, products, allergenDefaults) {
//     console.log('in getDefaults function');

//     products.forEach(product => {
//         if (currentProduct === product.name) {

//             console.log('product.name', product.name);

//             const isDairyFree = (product.dairyFree);
//             allergenDefaults[0] = (product.dairyFree);
//             console.log('isDairyFree', isDairyFree);
//             const isEggFree = (product.eggFree);
//             allergenDefaults[1] = (product.eggFree);
//             console.log('isEggFree', isEggFree);
//             const isGlutenFree = (product.glutenFree);
//             allergenDefaults[2] = (product.glutenFree);
//             console.log('isGlutenFree', isGlutenFree);
//             const isGrainFree = (product.grainFree);
//             allergenDefaults[3] = (product.grainFree);
//             console.log('isGrainFree', isGrainFree);
//             const isNutFree = (product.nutFree);
//             allergenDefaults[4] = (product.nutFree);
//             console.log('isNutFree', isNutFree);
//             const isRefinedSugarFree = (product.refinedSugarFree);
//             allergenDefaults[5] = (product.refinedSugarFree);
//             console.log('isRefinedSugarFree', isRefinedSugarFree);
//             const isVegan = (product.vegan);
//             allergenDefaults[6] = (product.vegan);
//             console.log('isVegan', isVegan);
//             console.log('allergenDefaults', allergenDefaults);
//             if (currentProduct === product.name) {
//                 return;
//             }
//         }

//     })
// }

// function getOptions(currentProduct, products) {
//     console.log('in getOptions function');
//     products.forEach(product => {
//         if (currentProduct === product.name) {
//             console.log('product.name', product.name);
//             const canBeDairyFree = (product.canBeDairyFree);
//             allergenOptions[0] = (product.canBeDairyFree);
//             console.log('canBeDairyFree', canBeDairyFree);
//             const canBeEggFree = (product.canBeEggFree);
//             allergenOptions[1] = (product.canBeEggFree);
//             console.log('canBeEggFree', canBeEggFree);
//             const canBeGlutenFree = (product.canBeGlutenFree);
//             allergenOptions[2] = (product.canBeGlutenFree);
//             console.log('canBeGlutenFree', canBeGlutenFree);
//             const canBeGrainFree = (product.canBeGrainFree);
//             allergenOptions[3] = (product.canBeGrainFree);
//             console.log('canBeGrainFree', canBeGrainFree);
//             const canBeNutFree = (product.canBeNutFree);
//             allergenOptions[4] = (product.canBeNutFree);
//             console.log('canBeNutFree', canBeNutFree);
//             const canBeRefinedSugarFree = (product.canBeRefinedSugarFree);
//             allergenOptions[5] = (product.canBeRefinedSugarFree);
//             console.log('canBeRefinedSugarFree', canBeRefinedSugarFree);
//             const canBeVegan = (product.canBeVegan);
//             allergenOptions[6] = (product.canBeVegan);
//             console.log('canBeVegan', canBeVegan);
//             console.log('allergenOptions', allergenOptions);

//             if (currentProduct === product.name) {
//                 return;
//             }
//         }
//     })

// }

// function populateInfo() {
//     let str = document.title;
//     let currentProduct = str.replace(/-/g, ' ');
//     console.log('currentProduct', currentProduct);
//     getParentsOnlyProducts(products => {
//         getDefaults(currentProduct, products, allergenDefaults);
//         getOptions(currentProduct, products, allergenOptions);
//     });

// }

// function populateTables() {
//     allergenDetails.forEach(allergen => {

//     })


//     duplicateAllergenInfo.forEach(allergenObject => {
//         const currentAbbreviation = allergenObject.allergenOptionAbbreviation;
//         allergenInfoAdditions.forEach(additionObject => {
//             if (additionObject.abbreviation === currentAbbreviation) {
//                 const arrayIndex = additionObject.arrayIndex;
//                 duplicateAllergenInfo[arrayIndex].defaultAllergenType = additionObject.defaultAllergenType;
//                 duplicateAllergenInfo[arrayIndex].canBeAllergenType = additionObject.canBeAllergenType;
//             }
//         })
//     });

// }

// function populateOptions () {

// }


function populateTables(products, allergenInfo) {
    let str = document.title;
    let currentProduct = str.replace(/-/g, ' ');
    console.log('allergenInfo', allergenInfo);

    let duplicateAllergenInfo;
    $.each(products, function (key, product) {
        if (currentProduct === product.name) {
            duplicateAllergenInfo = JSON.parse(JSON.stringify(allergenInfo));
            console.log('duplicateAllergenInfo', duplicateAllergenInfo);

            const allergenInfoAdditions = [{
                    abbreviation: 'DF',
                    defaultAllergenType: product.dairyFree,
                    canBeAllergenType: product.canBeDairyFree,
                    arrayIndex: 0
                },
                {
                    abbreviation: 'EF',
                    defaultAllergenType: product.eggFree,
                    canBeAllergenType: product.canBeEggFree,
                    arrayIndex: 1
                },
                {
                    abbreviation: 'GF',
                    defaultAllergenType: product.glutenFree,
                    canBeAllergenType: product.canBeGlutenFree,
                    arrayIndex: 2
                },
                {
                    abbreviation: 'GRF',
                    defaultAllergenType: product.grainFree,
                    canBeAllergenType: product.canBeGrainFree,
                    arrayIndex: 3
                },
                {
                    abbreviation: 'NF',
                    defaultAllergenType: product.nutFree,
                    canBeAllergenType: product.canBeNutFree,
                    arrayIndex: 4
                },
                {
                    abbreviation: 'RSF',
                    defaultAllergenType: product.refinedSugarFree,
                    canBeAllergenType: product.canBeRefinedSugarFree,
                    arrayIndex: 5
                },
                {
                    abbreviation: 'V',
                    defaultAllergenType: product.vegan,
                    canBeAllergenType: product.canBeVegan,
                    arrayIndex: 6
                },
            ]

            //Where the abbreviation from the object in allergenInfoAdditions[] matches the abbreviation of the 
            //current object/current iteration of the loop, add the defaultAllergenType key value pair and the 
            //canBeAllergenType key value pair from the matching object that's in the allergenInfoAdditions array to the
            //current object/iteration of the duplicateAllergenInfo array
            duplicateAllergenInfo.forEach(allergenObject => {
                const currentAbbreviation = allergenObject.allergenOptionAbbreviation;
                allergenInfoAdditions.forEach(additionObject => {
                    if (additionObject.abbreviation === currentAbbreviation) {
                        const arrayIndex = additionObject.arrayIndex;
                        duplicateAllergenInfo[arrayIndex].defaultAllergenType = additionObject.defaultAllergenType;
                        duplicateAllergenInfo[arrayIndex].canBeAllergenType = additionObject.canBeAllergenType;
                    }
                })
            });
            console.log('duplicateAllergenInfo', duplicateAllergenInfo);
        }
    })
}