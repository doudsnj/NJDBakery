//This is my first stab at what I was thinking for the the population of the product specific info
//for the individual product pages. Right now there are just the two, hard coded (not pulling from an
//actual template or anything) Chocolate Chip Cookies (real pictures and text) and Double Chocolate Chip Cookies 
//(needs pictures and text) pages.
//The batch nutrition calcs need to be updated for the Double Chocolate Chip Cookies - right now they
//all have single digits, so it looks like the calc is failing and showing all as zero. They just need actual
//values and the calc will work. Not pertinent to your code review though.

//For the overall page population, I was toying with the idea of doing an array of objects, but it wasn't shaking down to be any
//less coding, just a different type. So yeah, let me know your thoughts (if all these things should be
//loops/forEaches over arrays instead). Thanks!
$(document).ready(function () {
    populateInfo();
});

function populateDefaults(currentProduct, products) {

    products.forEach(product => {
        if (currentProduct === product.name) {
            //Will also populate related icon vector in 'icon' <td>'s, once Cicci gets them to me
            if (product.dairyFree === true) {
                $(`[rel='js-defaults-table']`).append(`<tr><td class="default-dairyFree__icon table_key"></td> <td class="default-dairyFree__text">DAIRY FREE</td></tr>`);
            }

            if (product.eggFree === true) {
                $(`[rel='js-defaults-table']`).append(`<tr><td class="default-eggFree__icon table_key"></td> <td class="default-eggFree__text">EGG FREE</td></tr>`);
            }

            if (product.glutenFree === true) {
                $(`[rel='js-defaults-table']`).append(`<tr><td class="default-glutenFree__icon table_key"></td> <td class="default-glutenFree__text">GLUTEN FREE</td></tr>`);
            }

            if (product.grainFree === true) {
                $(`[rel='js-defaults-table']`).append(`<tr><td class="default-grainFree__icon table_key"></td> <td class="default-grainFree__text">GRAIN FREE</td></tr>`);
            }

            if (product.nutFree === true) {
                $(`[rel='js-defaults-table']`).append(`<tr><td class="default-nutFree__icon table_key"></td> <td class="default-nutFree__text">NUT FREE</td></tr>`);
            }

            if (product.refinedSugarFree === true) {
                $(`[rel='js-defaults-table']`).append(`<tr><td class="default-refinedSugarFree__icon table_key"></td> <td class="default-refinedSugarFree__text">REFINED SUGAR FREE</td></tr>`);
            }

            if (product.vegan === true) {
                $(`[rel='js-defaults-table']`).append(`<tr><td class="default-vegan__icon table_key"></td> <td class="default-vegan__text">VEGAN FREE</td></tr>`);
            }

            if (currentProduct === product.name) {
                return;
            }
        }

    })
}

function populateInfo() {
    let str = document.title;
    let currentProduct = str.replace(/-/g, ' ');
    getParentsOnlyProducts(products => {
        populateDefaults(currentProduct, products);
        populateOptions(currentProduct, products);
        populateNutrition(currentProduct, products);
    });
}

function populateNutrition(currentProduct, products) {
    products.forEach(product => {
        if (currentProduct === product.name) {
            $(`[rel='js-nutrition-value__serving']`).html('1' + '"thing"');
            $(`[rel='js-nutrition-value__batch-servings']`).html(product.defaultNumberOfServings);
            $(`[rel='js-nutrition-value__calories']`).html(Math.trunc(product.totalBatchCalories / product.defaultNumberOfServings));
            $(`[rel='js-nutrition-value__fat']`).html(Math.trunc(product.totalBatchFat / product.defaultNumberOfServings));
            $(`[rel='js-nutrition-value__carbs']`).html(Math.trunc(product.totalBatchCarbs / product.defaultNumberOfServings));
            $(`[rel='js-nutrition-value__fiber']`).html(Math.trunc(product.totalBatchFiber / product.defaultNumberOfServings));
            $(`[rel='js-nutrition-value__sugar']`).html(Math.trunc(product.totalBatchSugar / product.defaultNumberOfServings));
            $(`[rel='js-nutrition-value__protein']`).html(Math.trunc(product.totalBatchProtein / product.defaultNumberOfServings));
        }
    })
}

function populateOptions(currentProduct, products) {
    products.forEach(product => {
        if (currentProduct === product.name) {
            //Will also populate related icon vector in 'icon' <td>'s, once Cicci gets them to me
            if (product.canBeDairyFree === true) {
                $(`[rel='js-options-table']`).append(`<tr><td class="option-dairyFree__icon table_key"></td> <td class="option-dairyFree__text">DAIRY FREE</td></tr>`);
            }

            if (product.canBeEggFree === true) {
                $(`[rel='js-options-table']`).append(`<tr><td class="option-eggFree__icon table_key"></td> <td class="option-eggFree__text">EGG FREE</td></tr>`);
            }

            if (product.canBeGlutenFree === true) {
                $(`[rel='js-options-table']`).append(`<tr><t class="option-glutenFree__icon table_key">/td> <tdclass="option-glutenFree__text">GLUTEN FREE</td></tr>`);
            }

            if (product.canBeGrainFree === true) {
                $(`[rel='js-options-table']`).append(`<tr><td class="option-grainFree__icon table_key"></td> <td class="option-grainFree__text">GRAIN FREE</td></tr>`);
            }

            if (product.canBeNutFree === true) {
                $(`[rel='js-options-table']`).append(`<tr><td class="option-nutFree__icon table_key"></td> <td class="option-nutFree__text">NUT FREE</td></tr>`);
            }

            if (product.canBeRefinedSugarFree === true) {
                $(`[rel='js-options-table']`).append(`<tr><td class="option-refinedSugarFree__icon table_key"></td> <td class="option-refinedSugarFree__text">REFINED SUGAR FREE</td></tr>`);
            }

            if (product.canBeVegan === true) {
                $(`[rel='js-options-table']`).append(`<tr><td class="option-vegan__icon table_key"></td> <td class="option-vegan__text">VEGAN FREE</td></tr>`);
            }

            if (currentProduct === product.name) {
                return;
            }
        }
    })
}