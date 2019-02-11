$(function () {
    $("[rel='js-body']").append('<div class="footer" rel="js-footer"></div>');
    $("[rel='js-footer']").append('<div class="footer-content" rel="js-footer-content"></div>');
    $("[rel='js-footer']").after('<div class="footer-copyright" rel="js-footer-copyright"></div>');
    $("[rel='js-footer-copyright']").append('<p class="footer-copyright__text" rel="js-footer-copyright__text">&copy; njdbakery 2018</p>');
    generateFooterLinks();
});

const footerLinks = [
    // TODO: nit - you might want to get a plugin for vs code that automatically formats on save.
    //  usually this type of collection would be formatted like this:
    {
        class: 'footer-content__link',
        href: 'index.html',
        linkText: 'HOME'
    },
    {
        class: 'footer-content__link',
        href: 'Products.html',
        linkText: 'PRODUCTS'
    },
    {
        class: 'footer-content__link',
        href: 'Order.html',
        linkText: 'ORDER'
    },
    {
        class: 'footer-content__link',
        href: 'MeetNadine.html',
        linkText: 'MEET NADINE'
    },
    {
        class: 'footer-content__link',
        href: 'IngredientInfo.html',
        linkText: 'INGREDIENT INFO'
    },
    {
        class: 'footer-content__link',
        href: 'Contact.html',
        linkText: 'CONTACT'
    },
    {
        class: 'footer-content__link',
        href: 'Products.html',
        linkText: 'COOKIES'
    },
    {
        class: 'footer-content__link',
        href: 'Products.html',
        linkText: 'BITES'
    },
    {
        class: 'footer-content__link',
        href: 'Products.html',
        linkText: 'BREADS'
    },
    {
        class: 'footer-content__link',
        href: 'Products.html',
        linkText: 'CAKES & CUPCAKES'
    },
    {
        class: 'footer-content__link',
        href: 'Products.html',
        linkText: 'DESSERT CREATIONS'
    },
    {
        class: 'footer-content__link',
        href: 'Products.html',
        linkText: 'MISCELLANEOUS'
    },
    {
        class: 'footer-content__link',
        href: 'Products.html',
        linkText: 'MUFFINS'
    },
    {
        class: 'footer-content__link',
        href: 'Products.html',
        linkText: 'SNACK BARS'
    }, // TODO: nit unnecessary ,
];

//populate footer links//
function generateFooterLinks() {
    const footerLinksDiv = $("[rel='js-footer-content']");
    footerLinks.forEach(li => {
        let linkToAdd = $(`<a class="${li.class}" href="${li.href}">${li.linkText}</a>`);
        footerLinksDiv.append(linkToAdd);
// TODO: nit unnecessary space
    })
}; // TODO: unnecessary ;

