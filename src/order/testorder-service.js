function getParentsOnlyProducts() {
    const specificDropdown = `.order-form__product${rowNumber}`;
    const dropdown = $(specificDropdown);

    dropdown.empty();

    dropdown.append('<option selected="true" disabled>Select...</option>');
    dropdown.prop('selectedIndex', 0);
    const url = 'http://localhost:56886/api/products?parentsOnly=true';
    $.getJSON(url, function (products) {
        //Nathan - even though 'key' is not used, if i take it out, the Products won't be populated as options in the product select field on new rows that are created. I have no clue why...
        $.each(products, function (key, product) {
            dropdown.append($('<option></option>').text(product.name));
        })
    });
}
