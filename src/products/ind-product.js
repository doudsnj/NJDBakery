$(document).ready(function () {
    populateInfo();

});

function getDefaults(currentProduct, products, allergenDefaults) {
    console.log('in getDefaults function');

    products.forEach(product => {
        if (currentProduct === product.name) {

            console.log('product.name', product.name);
            if (product.dairyFree === true) {
                $(`[rel='js-defaults-table']`).append(`<tr><td class="default-dairyFree__icon table_key"</td> <td class="default-dairyFree__text">DAIRY FREE</td></tr>`);
            }

            if (product.eggFree === true) {
                $(`[rel='js-defaults-table']`).append(`<tr><td class="default-eggFree__icon table_key"</td> <td class="default-eggFree__text">EGG FREE</td></tr>`);
            }

            if (product.glutenFree === true) {
                $(`[rel='js-defaults-table']`).append(`<tr><td class="default-glutenFree__icon table_key"</td> <td class="default-glutenFree__text">GLUTEN FREE</td></tr>`);
            }

            if (product.grainFree === true) {
                $(`[rel='js-defaults-table']`).append(`<tr><td class="default-grainFree__icon table_key"</td> <td class="default-grainFree__text">GRAIN FREE</td></tr>`);
            }

            if (product.nutFree === true) {
                $(`[rel='js-defaults-table']`).append(`<tr><td class="default-nutFree__icon table_key"</td> <td class="default-nutFree__text">NUT FREE</td></tr>`);
            }

            if (product.refinedSugarFree === true) {
                $(`[rel='js-defaults-table']`).append(`<tr><td class="default-refinedSugarFree__icon table_key"</td> <td class="default-refinedSugarFree__text">REFINED SUGAR FREE</td></tr>`);
            }

            if (product.vegan === true) {
                $(`[rel='js-defaults-table']`).append(`<tr><td class="default-vegan__icon table_key"</td> <td class="default-vegan__text">VEGAN FREE</td></tr>`);
            }

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
            products.forEach(product => {
                if (currentProduct === product.name) {

                    console.log('product.name', product.name);
                    if (product.canBeDairyFree === true) {
                        $(`[rel='js-options-table']`).append(`<tr><td class="option-dairyFree__icon table_key"</td> <td class="option-dairyFree__text">DAIRY FREE</td></tr>`);
                    }

                    if (product.canBeEggFree === true) {
                        $(`[rel='js-options-table']`).append(`<tr><td class="option-eggFree__icon table_key"</td> <td class="option-eggFree__text">EGG FREE</td></tr>`);
                    }

                    if (product.canBeGlutenFree === true) {
                        $(`[rel='js-options-table']`).append(`<tr><td class="option-glutenFree__icon table_key"</td> <td class="option-glutenFree__text">GLUTEN FREE</td></tr>`);
                    }

                    if (product.canBeGrainFree === true) {
                        $(`[rel='js-options-table']`).append(`<tr><td class="option-grainFree__icon table_key"</td> <td class="option-grainFree__text">GRAIN FREE</td></tr>`);
                    }

                    if (product.canBeNutFree === true) {
                        $(`[rel='js-options-table']`).append(`<tr><td class="option-nutFree__icon table_key"</td> <td class="option-nutFree__text">NUT FREE</td></tr>`);
                    }

                    if (product.canBeRefinedSugarFree === true) {
                        $(`[rel='js-options-table']`).append(`<tr><td class="option-refinedSugarFree__icon table_key"</td> <td class="option-refinedSugarFree__text">REFINED SUGAR FREE</td></tr>`);
                    }

                    if (product.canBeVegan === true) {
                        $(`[rel='js-options-table']`).append(`<tr><td class="option-vegan__icon table_key"</td> <td class="option-vegan__text">VEGAN FREE</td></tr>`);
                    }

                    if (currentProduct === product.name) {
                        return;
                    }
                }

            })
        }
    })

}

function populateInfo() {
    let str = document.title;
    let currentProduct = str.replace(/-/g, ' ');
    console.log('currentProduct', currentProduct);
    getParentsOnlyProducts(products => {
        getDefaults(currentProduct, products);
        getOptions(currentProduct, products);
    });
}