// //create nav elements
// $(function () {
//     $("[rel='js-logo-div']").after('<div class="reusable-nav" rel="js-reusable-nav"></div>');
//     $("[rel='js-reusable-nav']").append('<div class="nav-bar" rel="js-nav-bar"></div>');
//     $("[rel='js-nav-bar']").append('<button onclick="showNav()" class="nav-bar__icon" rel="js-nav-bar__icon"><i class="fa fa-bars"></i></button>')
//     $("[rel='js-nav-bar__icon']").after('<div class="nav-menu" rel="js-nav-menu"></div>');
//     generateNavLinks();
// });

// //set nav attributes
// const navLinks = [{
//     class: 'index',
//     href: 'index.html',
//     linkText: 'HOME'
// },
// {
//     class: 'Products',
//     href: 'Products.html',
//     linkText: 'PRODUCTS'
// },
// {
//     class: 'Order',
//     href: 'Order.html',
//     linkText: 'ORDER'
// },
// {
//     class: 'MeetNadine',
//     href: 'MeetNadine.html',
//     linkText: 'MEET NADINE'
// },
// {
//     class: 'IngredientInfo',
//     href: 'IngredientInfo.html',
//     linkText: 'INGREDIENT INFO'
// },
// {
//     class: 'Contact',
//     href: 'Contact.html',
//     linkText: 'CONTACT'
// },
// ];

// //create nav links, and add class to current page's nav link for CSS needs
// function generateNavLinks() {
//     const navMenuDiv = $("[rel='js-nav-menu']");
//     navLinks.forEach(li => {
//         const url = window.location.href;
//         console.log('url from window is ' + url);
//         const currentArrayURLMatches = url.includes(li.href);
//         navMenuDiv.append(`<a class="nav-menu__link nav-menu__link--${li.class}" href="${li.href}">${li.linkText}</a>`);
//         if (currentArrayURLMatches) {
//             $(`.nav-menu__link--${li.class}`).addClass('nav-menu__link--currentPage disabled');
//         };
//     });
// };

//create nav elements
$(function () {
    $("[rel='js-logo-div']").after('<div class="reusable-nav" rel="js-reusable-nav"></div>');
    $("[rel='js-reusable-nav']").append('<div class="nav-bar" rel="js-nav-bar"></div>');
    $("[rel='js-nav-bar']").append('<button onclick="showNav()" class="nav-bar__icon" rel="js-nav-bar__icon"><i class="fa fa-bars"></i></button>')
    $("[rel='js-nav-bar__icon']").after('<div class="nav-menu" rel="js-nav-menu"></div>');
    generateNavLinks();
});

//set nav attributes
const navLinks = [{
    class: 'index',
    href: '/src/index/index.html',
    linkText: 'HOME'
},
{
    class: 'Products',
    href: '/src/products/products.html',
    linkText: 'PRODUCTS'
},
{
    class: 'order',
    href: '/src/order/order.html',
    linkText: 'ORDER'
},
{
    class: 'MeetNadine',
    href: '/src/meet-nadine/meet-nadine.html',
    linkText: 'MEET NADINE'
},
{
    class: 'IngredientInfo',
    href: '/src/ingredients/ingredients.html',
    linkText: 'INGREDIENT INFO'
},
{
    class: 'Contact',
    href: '/src/contact/contact.html',
    linkText: 'CONTACT'
},
];

//create nav links, and add class to current page's nav link for CSS needs
function generateNavLinks() {
    const navMenuDiv = $("[rel='js-nav-menu']");
    navLinks.forEach(li => {
        const url = window.location.href;
        console.log('window.location.href is ' + window.location.href);

        const currentArrayURLMatches = url.includes(li.href);
        console.log('currentArrayURLMatches is ' + currentArrayURLMatches);
        navMenuDiv.append(`<a class="nav-menu__link nav-menu__link--${li.class}" href="${li.href}">${li.linkText}</a>`);
        console.log(`<a class="nav-menu__link nav-menu__link--${li.class}" href="${li.href}">${li.linkText}</a>`);
        if (currentArrayURLMatches) {
            $(`.nav-menu__link--${li.class}`).addClass('nav-menu__link--currentPage disabled');
        };
    });
};




















