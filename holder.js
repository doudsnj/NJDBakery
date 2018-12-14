// Objective: When a Product option is chosen, populate its default dietary options and disable(hide ?) options that can be chosen
$(document).on('click', '.order-form__product', function () {
    console.log('in top of choose product function');
    let currentProduct = $('.order-form__product :selected').text();
    console.log('currentProduct: ' + currentProduct);
    const url = 'https://njd-bakery.azurewebsites.net/api/products?parentsOnly=true';
    let rowNumber;

    let listOfClassesOnSelect = $(this)[0].className.split(/\s+/);
    console.log('listOfClassesOnSelect: ' + listOfClassesOnSelect);
    //look through the array of classes on the select that was clicked, and find the one that includes the word 'entry'. Then get a substring to see what entry number/what row it is in.
    for (var i = 0; i < listOfClassesOnSelect.length; i++) {
        if ((listOfClassesOnSelect[i].includes)('entry')) {
            rowNumber = (listOfClassesOnSelect[i].substring(5));
            console.log('rowNumber: ' + rowNumber);
            break;
        }
    }
    console.log('logging');

    let data = $.getJSON(url, function (data) {
        console.log(data);

        for (var key in data) {
            if (data.hasOwnProperty(key)) {

                let arrayCurrentName = (data[key].name);
                if (arrayCurrentName === currentProduct) {

                    console.log('found needed array. arrayCurrentName and currentProduct ' + arrayCurrentName + currentProduct);
                    let currentArraySKU = (data[key].sku);
                    console.log('currentArraySKU ' + currentArraySKU);




                    let currentProductDairyFree = (data[key].dairyFree);
                    console.log('currentProductDairyFree is ' + currentProductDairyFree);
                    let currentProductEggFree = (data[key].eggFree);
                    console.log('currentProductEggFree is ' + currentProductEggFree);
                    let currentProductGlutenFree = (data[key].glutenFree);
                    console.log('currentProductGlutenFree is ' + currentProductGlutenFree);
                    let currentProductGrainFree = (data[key].grainFree);
                    console.log('currentProductGrainFree is ' + currentProductGrainFree);
                    let currentProductNutFree = (data[key].nutFree);
                    console.log('currentProductNutFree is ' + currentProductNutFree);
                    let currentProductSugarFree = (data[key].refinedSugarFree);
                    console.log('currentProductSugarFree is ' + currentProductSugarFree);
                    let currentProductVegan = (data[key].vegan);
                    console.log('currentProductVegan is ' + currentProductVegan);

                    // let dairyFreeCode;
                    // let eggFreeCode;
                    // let glutenFreeCode;
                    // let grainFreeCode;
                    // let nutFreeCode;
                    // let refinedSugarFreeCode;
                    // let veganCode;
                    let defaultOptionsText = 'Default product is: ';



                    if (currentProductDairyFree === true) {
                        // dairyFreeCode = ' DF';
                        defaultOptionsText = defaultOptionsText + ' DF';
                    }

                    if (currentProductEggFree === true) {
                        // eggFreeCode = ' EF';
                        defaultOptionsText = defaultOptionsText + ' EF';
                    }

                    if (currentProductGlutenFree === true) {
                        // glutenFreeCode = ' GF';
                        defaultOptionsText = defaultOptionsText + ' GF';
                    }

                    if (currentProductGrainFree === true) {
                        // grainFreeCode = ' GRF';
                        defaultOptionsText = defaultOptionsText + ' GRF';
                    }

                    if (currentProductNutFree === true) {
                        // nutFreeCode = ' NF';
                        defaultOptionsText = defaultOptionsText + ' NF';
                    }

                    if (currentProductSugarFree === true) {
                        // refinedSugarFreeCode = ' RSF';
                        defaultOptionsText = defaultOptionsText + ' RSF';
                    }

                    if (currentProductVegan === true) {
                        // veganCode = ' V';
                        defaultOptionsText = defaultOptionsText + ' EF';
                    }


                    // let defaultOptionsText = ('Default product is: ' + dairyFreeCode + eggFreeCode + glutenFreeCode + grainFreeCode + nutFreeCode + refinedSugarFreeCode + veganCode);
                    console.log('after all options checking, defaultOptionsText is ' + defaultOptionsText);


                    $(`[rel='js-dietary-options__defaults-text${rowNumber}']`).html(defaultOptionsText);
                }

            }

        }




    })



});