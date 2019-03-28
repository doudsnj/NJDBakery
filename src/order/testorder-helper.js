//allergen options on product, third and fourth values brought in from API
// function populateAllergenInfo(product) {

//     return [{
//         allergenOptionAbbreviation: 'DF',
//         className: 'dairyFree',
//         defaultAllergenType: product.dairyFree,
//         canBeField: product.canBeDairyFree,
//         abbreviationNeeded: 'No'
//     },
//     {
//         allergenOptionAbbreviation: 'EF',
//         className: 'eggFree',
//         defaultAllergenType: product.eggFree,
//         canBeField: product.canBeEggFree,
//         abbreviationNeeded: 'No'
//     },
//     {
//         allergenOptionAbbreviation: 'GF',
//         className: 'glutenFree',
//         defaultAllergenType: product.glutenFree,
//         canBeField: product.canBeGlutenFree,
//         abbreviationNeeded: 'Yes'
//     },
//     {
//         allergenOptionAbbreviation: 'GRF',
//         className: 'grainFree',
//         defaultAllergenType: product.grainFree,
//         canBeField: product.canBeGrainFree,
//         abbreviationNeeded: 'No'
//     },
//     {
//         allergenOptionAbbreviation: 'NF',
//         className: 'nutFree',
//         defaultAllergenType: product.nutFree,
//         canBeField: product.canBeNutFree,
//         abbreviationNeeded: 'No'
//     },
//     {
//         allergenOptionAbbreviation: 'RSF',
//         className: 'refinedSugarFree',
//         defaultAllergenType: product.refinedSugarFree,
//         canBeField: product.canBeRefinedSugarFree,
//         abbreviationNeeded: 'No'
//     },
//     {
//         allergenOptionAbbreviation: 'V',
//         className: 'vegan',
//         defaultAllergenType: product.vegan,
//         canBeField: product.canBeVegan,
//         abbreviationNeeded: 'No'
//     }
//     ]
// };

const allergenInfo = [{
    allergenOptionAbbreviation: 'DF',
    className: 'dairyFree',
    abbreviationNeeded: 'No'
},
{
    allergenOptionAbbreviation: 'EF',
    className: 'eggFree',
    abbreviationNeeded: 'No'
},
{
    allergenOptionAbbreviation: 'GF',
    className: 'glutenFree',
    abbreviationNeeded: 'Yes'
},
{
    allergenOptionAbbreviation: 'GRF',
    className: 'grainFree',
    abbreviationNeeded: 'No'
},
{
    allergenOptionAbbreviation: 'NF',
    className: 'nutFree',
    abbreviationNeeded: 'No'
},
{
    allergenOptionAbbreviation: 'RSF',
    className: 'refinedSugarFree',
    abbreviationNeeded: 'No'
},
{
    allergenOptionAbbreviation: 'V',
    className: 'vegan',
    abbreviationNeeded: 'No'
}
]
console.log('allergenInfo from helper', allergenInfo);



