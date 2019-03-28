function getParentsOnlyProducts(callback) {
    console.log('in getParentsOnlyProducts function');
    const url = 'http://localhost:56886/api/products?parentsOnly=true';
    $.getJSON(url, callback)
}

