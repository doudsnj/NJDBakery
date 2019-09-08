$(document).ready(function () {
    showTopImageForLargeViewports();
    hideMainLabelForLargeViewports();
    showLeftColumnIngredientsForLargeViewports();
    showMainHeadingForLargeViewports();
    hideMiddleColumnIngredientsForLargeViewports();
    populateInfo();
});

function populateDefaults(currentProduct, products) {

    products.forEach(product => {
        if (currentProduct === product.name) {
            //Will also populate related icon vector in 'icon' <td>'s, once Cicci gets them to me
            if (product.dairyFree === true) {
                $(`[rel='js-defaults-table']`).append(`<tr><td class="default-dairyFree__icon table__key"><img class="allergy-icon" src="/assets/allergy_icons/dairy_free.png" alt="dairy free icon"></td> <td class="default-dairyFree__text">DAIRY FREE</td></tr>`);
            }

            if (product.eggFree === true) {
                $(`[rel='js-defaults-table']`).append(`<tr><td class="default-eggFree__icon table__key"><img class="allergy-icon" src="/assets/allergy_icons/egg_free.png" alt="egg free icon"></td> <td class="default-eggFree__text">EGG FREE</td></tr>`);
            }

            if (product.glutenFree === true) {
                $(`[rel='js-defaults-table']`).append(`<tr><td class="default-glutenFree__icon table__key"><img class="allergy-icon" src="/assets/allergy_icons/gluten_free.png" alt="gluten free icon"></td> <td class="default-glutenFree__text">GLUTEN FREE</td></tr>`);
            }

            if (product.grainFree === true) {
                $(`[rel='js-defaults-table']`).append(`<tr><td class="default-grainFree__icon table__key"><img class="allergy-icon" src="/assets/allergy_icons/grain_free.png" alt="grain free icon"></td> <td class="default-grainFree__text">GRAIN FREE</td></tr>`);
            }

            if (product.nutFree === true) {
                $(`[rel='js-defaults-table']`).append(`<tr><td class="default-nutFree__icon table__key"><img class="allergy-icon" src="/assets/allergy_icons/nut_free.png" alt="nut free icon"></td> <td class="default-nutFree__text">NUT FREE</td></tr>`);
            }

            if (product.refinedSugarFree === true) {
                $(`[rel='js-defaults-table']`).append(`<tr><td class="default-refinedSugarFree__icon table__key"><img class="allergy-icon" src="/assets/allergy_icons/refined_sugar_free.png" alt="refined sugar free icon"></td> <td class="default-refinedSugarFree__text">REFINED SUGAR FREE</td></tr>`);
            }

            if (product.vegan === true) {
                $(`[rel='js-defaults-table']`).append(`<tr><td class="default-vegan__icon table__key"><img class="allergy-icon" src="/assets/allergy_icons/vegan.png" alt="vegan icon"></td> <td class="default-vegan__text">VEGAN</td></tr>`);
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
            //Need to add the type to the API, or pull in its category and remove plurals when necessary
            $(`[rel='js-nutrition-value__serving']`).html('1' + '"thing"');
            $(`[rel='js-nutrition-value__batch-servings']`).html(product.defaultNumberOfServings);
            $(`[rel='js-nutrition-value__calories']`).html(Math.trunc(product.totalBatchCalories / product.defaultNumberOfServings) + 'g');
            $(`[rel='js-nutrition-value__fat']`).html(Math.trunc(product.totalBatchFat / product.defaultNumberOfServings) + 'g');
            $(`[rel='js-nutrition-value__carbs']`).html(Math.trunc(product.totalBatchCarbs / product.defaultNumberOfServings) + 'g');
            $(`[rel='js-nutrition-value__fiber']`).html(Math.trunc(product.totalBatchFiber / product.defaultNumberOfServings) + 'g');
            $(`[rel='js-nutrition-value__sugar']`).html(Math.trunc(product.totalBatchSugar / product.defaultNumberOfServings) + 'g');
            $(`[rel='js-nutrition-value__protein']`).html(Math.trunc(product.totalBatchProtein / product.defaultNumberOfServings) + 'g');
        }
    })
}

function populateOptions(currentProduct, products) {
    products.forEach(product => {
        if (currentProduct === product.name) {
            //Will also populate related icon vector in 'icon' <td>'s, once Cicci gets them to me
            if (product.canBeDairyFree === true) {
                $(`[rel='js-options-table']`).append(`<tr><td class="option-dairyFree__icon table__key"><img class="allergy-icon" src="/assets/allergy_icons/dairy_free.png" alt="dairy free icon"></td> <td class="option-dairyFree__text">DAIRY FREE</td></tr>`);
            }

            if (product.canBeEggFree === true) {
                $(`[rel='js-options-table']`).append(`<tr><td class="option-eggFree__icon table__key"><img class="allergy-icon" src="/assets/allergy_icons/egg_free.png" alt="egg free icon"></td> <td class="option-eggFree__text">EGG FREE</td></tr>`);
            }

            if (product.canBeGlutenFree === true) {
                $(`[rel='js-options-table']`).append(`<tr><td class="option-glutenFree__icon table__key"><img class="allergy-icon" src="/assets/allergy_icons/gluten_free.png" alt="gluten free icon"></td><td class="option-glutenFree__text">GLUTEN FREE</td></tr>`);
            }

            if (product.canBeGrainFree === true) {
                $(`[rel='js-options-table']`).append(`<tr><td class="option-grainFree__icon table__key"><img class="allergy-icon" src="/assets/allergy_icons/grain_free.png" alt="grain free icon"> </td> <td class="option-grainFree__text">GRAIN FREE</td></tr>`);
            }

            if (product.canBeNutFree === true) {
                $(`[rel='js-options-table']`).append(`<tr><td class="option-nutFree__icon table__key"><img class="allergy-icon" src="/assets/allergy_icons/nut_free.png" alt="nut free icon"> </td> <td class="option-nutFree__text">NUT FREE</td></tr>`);
            }

            if (product.canBeRefinedSugarFree === true) {
                $(`[rel='js-options-table']`).append(`<tr><td class="option-refinedSugarFree__icon table__key"><img class="allergy-icon" src="/assets/allergy_icons/refined_sugar_free.png" alt="refined sugar free icon"> </td> <td class="option-refinedSugarFree__text">REFINED SUGAR FREE</td></tr>`);
            }

            if (product.canBeVegan === true) {
                $(`[rel='js-options-table']`).append(`<tr><td class="option-vegan__icon table__key"><img class="allergy-icon" src="/assets/allergy_icons/vegan.png" alt="vegan icon"> </td> <td class="option-vegan__text">VEGAN</td></tr>`);
            }

            if (currentProduct === product.name) {
                return;
            }
        }
    })
}

function showTopImageForLargeViewports() {
    var viewport = document.body.clientWidth;
    let topImage = document.getElementById('top-image');
    if (viewport >= 992) {

        if ($(topImage).hasClass('hide')) {
            $(topImage).removeClass('hide');
        }
    } else {
        $(topImage).addClass('hide');
    }
};

function showLeftColumnIngredientsForLargeViewports() {
    var viewport = document.body.clientWidth;
    let largeIngredients = document.getElementById('lv-ingredients');
    if (viewport >= 992) {

        if ($(largeIngredients).hasClass('hide')) {
            $(largeIngredients).removeClass('hide');
        }
    } else {
        $(largeIngredients).addClass('hide');
    }
};

function showMainHeadingForLargeViewports() {
    var viewport = document.body.clientWidth;
    let mainHeading = document.getElementById('lv-heading');
    if (viewport >= 992) {

        if ($(mainHeading).hasClass('hide')) {
            $(mainHeading).removeClass('hide');
        }
    } else {
        $(mainHeading).addClass('hide');
    }
};

function hideMainLabelForLargeViewports() {
    var viewport = document.body.clientWidth;
    let mobileLabel = document.getElementById('main-image__label--mobile');
    if (viewport <= 992) {

        if ($(mobileLabel).hasClass('hide')) {
            $(mobileLabel).removeClass('hide');
        }
    } else {
        $(mobileLabel).addClass('hide');
    }
};

function hideMiddleColumnIngredientsForLargeViewports() {
    var viewport = document.body.clientWidth;
    let ingredients = document.getElementById('sv-ingredients');
    if (viewport <= 992) {

        if ($(ingredients).hasClass('hide')) {
            $(ingredients).removeClass('hide');
        }
    } else {
        $(ingredients).addClass('hide');
    }
};

$(window).resize(function () {
    showTopImageForLargeViewports();
    hideMainLabelForLargeViewports();
    showLeftColumnIngredientsForLargeViewports();
    showMainHeadingForLargeViewports();
    hideMiddleColumnIngredientsForLargeViewports();
});