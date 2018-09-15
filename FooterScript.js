$(function () {
    $("[rel='js-body']").append('<div class="footer" rel="js-footer"></div>');
    $("[rel='js-footer']").append('<div class="footer-content" rel="js-footer-content"></div>');
    $("[rel='js-footer']").after('<div class="footer-copyright" rel="js-footer-copyright"></div>');
    $("[rel='js-footer-copyright']").append('<p class="footer-copyright__text" rel="js-footer-copyright__text">&copy; njdbakery 2018</p>');
    generateFooterLinks();
});

const footerLinks = [{
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
},
];

//populate footer links//
function generateFooterLinks() {
    let footerLinksDiv = $("[rel='js-footer-content']");
    for (let index = 0; index < footerLinks.length; index++) {
        console.log('in forLoop');
        let link = footerLinks[index];
        let linkToAdd = $(`<a class="${link.class}" href="${link.href}">${link.linkText}</a>`);
        footerLinksDiv.append(linkToAdd);
    };


};
