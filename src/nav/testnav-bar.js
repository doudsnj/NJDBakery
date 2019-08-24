//create nav elements
$(function () {
    $("[rel='js-header']").after('<div id="reusable-nav" class="reusable-nav hide" rel="js-reusable-nav"></div>');
    $("[rel='js-reusable-nav']").append('<div class="nav-bar" rel="js-nav-bar"></div>');
    $("[rel='js-nav-bar']").append('<div class="nav-menu" rel="js-nav-menu"></div>');
    $("[rel='js-nav-menu']").append('<div class="close-container"><button class="close-nav__icon" onclick="hideNav()"><i class="fas fa-times"></i></button></div>');
    $("[rel='js-header']").after('<div id="search-bar__container" class="search-bar" rel="js-search-bar"></div>');
    $("[rel='js-search-bar']").append('<input type="text" name="search-input" placeholder="Search..." class="search-input">');
    $("[rel='js-search-bar']").append('<button class="close-search__icon"><i class="fas fa-times"></i></button>');

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
        const currentArrayURLMatches = url.includes(li.href);
        navMenuDiv.append(`<a class="nav-menu__link nav-menu__link--${li.class}" href="${li.href}">${li.linkText}</a>`);
        if (currentArrayURLMatches) {
            $(`.nav-menu__link--${li.class}`).addClass('nav-menu__link--currentPage disabled');
        }
    })
}

//when the x is clicked on the mobile nav, hide the nav
function hideNav() {
    let nav = document.getElementById('reusable-nav');
    if ($(nav).hasClass('hide')) {
        $(nav).removeClass('hide');
    } else {
        $(nav).addClass('hide');
    }
}