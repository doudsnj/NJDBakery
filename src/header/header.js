//create header elements
$(function () {
    $("[rel='js-header']").append('<div class="logo-div" rel="js-logo-div"></div>');
    $("[rel='js-logo-div']").append('<img class="logo-div__logo" src="/assets/njdBakery_Logo_2_Color_web.png" alt="njd_bakery_logo">');
    $("[rel='js-header']").append('<div class="header-buttons" rel="js-header-buttons"></div>');
    $("[rel='js-header-buttons']").append('<div class="search-container"><button class="search-icon"><i class="fas fa-search fa-3x"></i></button></div>');
    $("[rel='js-header-buttons']").append('<div id="nav-button" class="nav-icon__container"><button onclick="toggleNav()" class="nav-bar__icon" rel="js-nav-bar__icon"><i class="fa fa-bars fa-3x"></i></button></div>');
});

//show/hide mobile nav on hamburger icon click
function toggleNav() {
    let nav = document.getElementById('reusable-nav');

    if ($(nav).hasClass('hide')) {
        $(nav).removeClass('hide');
    } else {
        $(nav).addClass('hide');
    }
}