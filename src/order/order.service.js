function getParentsOnlyProducts(callback) {
    const url = 'http://localhost:56886/api/products?parentsOnly=true';
    $.getJSON(url, callback);
}

function getIngredients(callback) {
    const url = 'http://localhost:56886/api/products?parentsOnly=true';
    $.getJSON(url, callback);
}