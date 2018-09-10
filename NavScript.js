$( document ).ready();
    $(function(){
        $("[rel='js-logo-div']").after('<div class="reusable-nav" rel="js-reusable-nav"></div>');
        $("[rel='js-reusable-nav']").after('<div class="nav-bar" rel="js-nav-bar"></div>');
        $("[rel='js-nav-bar']").after('<button onclick="showNav()" class="nav-bar__icon" rel="js-nav-bar__icon"><i class="fa fa-bars"></i></button>')
        $("[rel='js-nav-bar__icon']").after('<div class="nav-menu" rel="js-nav-menu"></div>');
        //$("[rel='js-reusable-nav']").load("NavBar.html");
        generateNavLinks();
    }
    );

const navLinks = [{
    class: '--index nav-menu__link--first',
    href: 'index.html',
    linkText: 'HOME'
},
{
    class: '--Products',
    href: 'Products.html',
    linkText: 'PRODUCTS'
},
{
    class: '--Order',
    href: 'Order.html',
    linkText: 'Order'
},
{
    class: '--MeetNadine',
    href: 'MeetNadine.html',
    linkText: 'MEET NADINE'
},
{
    class: '--IngredientInfo',
    href: 'IngredientInfo.html',
    linkText: 'INGREDIENT INFO'
},
{
    class: '--Contact nav-menu__link--last',
    href: 'Contact.html',
    linkText: 'CONTACT'
},
];

function generateNavLinks(){
    let navMenuDiv = $('.nav-menu');//TODO: figure out how to make it reference the rel, instead of the class

    //TODO: redo as forEach loop arrow function
    for (let index = 0; index <navLinks.length; index++) {
        const link = navLinks[index];
        let linkToAdd = $(`<a class="nav-menu__link nav-menu__link${link.class}" href="${link.href}">${link.linkText}</a>`);
        navMenuDiv.append(linkToAdd);
    };

};








