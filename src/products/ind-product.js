var allergenDefaults = ['X', 'X', 'X', 'X', 'X', 'X', 'X'];
var allergenOptions = ['X', 'X', 'X', 'X', 'X', 'X', 'X'];

$(document).ready(function () {
    populateInfo();

});

function getDefaults(currentProduct, products, allergenDefaults) {
    console.log('in getDefaults function');

    products.forEach(product => {
        if (currentProduct === product.name) {

            console.log('product.name', product.name);

            const isDairyFree = (product.dairyFree);
            allergenDefaults[0] = (product.dairyFree);
            console.log('isDairyFree', isDairyFree);
            const isEggFree = (product.eggFree);
            allergenDefaults[1] = (product.eggFree);
            console.log('isEggFree', isEggFree);
            const isGlutenFree = (product.glutenFree);
            allergenDefaults[2] = (product.glutenFree);
            console.log('isGlutenFree', isGlutenFree);
            const isGrainFree = (product.grainFree);
            allergenDefaults[3] = (product.grainFree);
            console.log('isGrainFree', isGrainFree);
            const isNutFree = (product.nutFree);
            allergenDefaults[4] = (product.nutFree);
            console.log('isNutFree', isNutFree);
            const isRefinedSugarFree = (product.refinedSugarFree);
            allergenDefaults[5] = (product.refinedSugarFree);
            console.log('isRefinedSugarFree', isRefinedSugarFree);
            const isVegan = (product.vegan);
            allergenDefaults[6] = (product.vegan);
            console.log('isVegan', isVegan);
            console.log('allergenDefaults', allergenDefaults);
            if (currentProduct === product.name) {
                return;
            }
        }

    })
}

function getOptions(currentProduct, products) {
    console.log('in getOptions function');
    products.forEach(product => {
        if (currentProduct === product.name) {
            console.log('product.name', product.name);
            const canBeDairyFree = (product.canBeDairyFree);
            allergenOptions[0] = (product.canBeDairyFree);
            console.log('canBeDairyFree', canBeDairyFree);
            const canBeEggFree = (product.canBeEggFree);
            allergenOptions[1] = (product.canBeEggFree);
            console.log('canBeEggFree', canBeEggFree);
            const canBeGlutenFree = (product.canBeGlutenFree);
            allergenOptions[2] = (product.canBeGlutenFree);
            console.log('canBeGlutenFree', canBeGlutenFree);
            const canBeGrainFree = (product.canBeGrainFree);
            allergenOptions[3] = (product.canBeGrainFree);
            console.log('canBeGrainFree', canBeGrainFree);
            const canBeNutFree = (product.canBeNutFree);
            allergenOptions[4] = (product.canBeNutFree);
            console.log('canBeNutFree', canBeNutFree);
            const canBeRefinedSugarFree = (product.canBeRefinedSugarFree);
            allergenOptions[5] = (product.canBeRefinedSugarFree);
            console.log('canBeRefinedSugarFree', canBeRefinedSugarFree);
            const canBeVegan = (product.canBeVegan);
            allergenOptions[6] = (product.canBeVegan);
            console.log('canBeVegan', canBeVegan);
            console.log('allergenOptions', allergenOptions);

            if (currentProduct === product.name) {
                return;
            }
        }
    })

}

function populateInfo() {
    let str = document.title;
    let currentProduct = str.replace(/-/g, ' ');
    console.log('currentProduct', currentProduct);
    getParentsOnlyProducts(products => {
        getDefaults(currentProduct, products, allergenDefaults);
        getOptions(currentProduct, products, allergenOptions);
    });

}

function populateDefaults() {

}

// function populateOptions () {

// }