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
    href: 'index.html',
    linkText: 'HOME'
},
{
    class: 'Products',
    href: 'Products.html',
    linkText: 'PRODUCTS'
},
{
    class: 'Order',
    href: 'Order.html',
    linkText: 'ORDER'
},
{
    class: 'MeetNadine',
    href: 'MeetNadine.html',
    linkText: 'MEET NADINE'
},
{
    class: 'IngredientInfo',
    href: 'IngredientInfo.html',
    linkText: 'INGREDIENT INFO'
},
{
    class: 'Contact',
    href: 'Contact.html',
    linkText: 'CONTACT'
},
];

function generateNavLinks() {
    let navMenuDiv = $("[rel='js-nav-menu']");

    // navLinks.forEach(li => {
    //     let link = new Link();
    //     link.classList.add(`<a class="nav-menu__link nav-menu__link${link.class}" href="${link.href}">${link.linkText}</a>`);
    //     navMenuDiv.append(link);
    // });

    for (let index = 0; index < navLinks.length; index++) {
        const link = navLinks[index];
        let linkToAdd = $(`<a class="nav-menu__link nav-menu__link--${link.class}" href="${link.href}">${link.linkText}</a>`);
        // TODO: add current page logic in this loop
        // TODO: if current page, maybe add disabled attribute to prevent a full page load if user clicks the current link
        navMenuDiv.append(linkToAdd);
    };

};

let url = window.location.href;

//add class to current page's nav link for CSS needs
for (let index = 0; index < navLinks.length; index++) {
    const link = navLinks[index];
    let currentArrayURLMatches = url.includes(link.href);
    if (currentArrayURLMatches === true) {
        $(function () {
            $(`.nav-menu__link--${link.class}`).addClass('nav-menu__link--currentPage');
        });
        break;
    };

};

    // navLinks.forEach(li => {
    //     console.log('URL from function' + url);
    //     let urlResult = url.includes(li.href);
    //     console.log(urlResult);
    //     if (url.includes(li.href)) {
    //         console.log('rightafter url.includes');
    //         $(`".nav-menu__link--"${link.class}`).addClass("nav-menu__link--currentPage");
    //         console.log('Prior to break');
    //         Break;
    //     };
    // });









