//get current URL 
let url = window.location.href;
console.log(url);

const navElements = [{
    class: 'index nav-menu__link--first',
    href: 'index.html',
    linkText: 'HOME'
},
{
    class: '--Products',
    href: 'Products.html',
    linkText: 'PRODUCTS'
}
    // etc...
]

function generateNavElements() {
    let navMenuDiv = $('.nav-menu');

    for (let index = 0; index < navElements.length; index++) {
        const el = navElements[index];

        // http://www.YOUR_ENVIRONMENT.com/api/UNIQUECTRL/UNIQUEID/products
        // ... + ... +
        // `http://www.${env}.com/api/${CTRL}/${ID}/products

        let elementToAdd = $(`<a class="nav-menu__link nav-menu__link--${el.class}" href="${el.href}">${el.linkText}</a>`);

        //  el.class = 'index'
        // `nav-menu__link--${el.class}` // string interpolation -> preference
        // 'nav-menu__link--' + el.class // string concatenation

        navMenuDiv.add(elementToAdd);
    }

    // navElements.forEach(el => {
    //     // need to figure out how to new up an anchor tag?
    //     let element = new Element();
    //     element.classList.add('nav-menu__link', `nav-menu__link--${el.class}`);
    //     element.innerHTML = el.linkText;
    //     element.href = el.href;
    //     div.add(element);
    // })
}

//determine which page the URL points to
// always use single quotes for strings in .js files
var contactResult = url.includes("Contact");
console.log(contactResult);

var indexResult = url.includes("index");
console.log(indexResult);

var ingredientInfoResult = url.includes("IngredientInfo");
console.log(ingredientInfoResult);

var meetNadineResult = url.includes("MeetNadine");
console.log(meetNadineResult);

var orderResult = url.includes("Order");
console.log(orderResult);

var productsResult = url.includes("Products");
console.log(productsResult);

var page = "placeholder";

var className = "nav-menu__link--" + page;
console.log(className);

//determine which class name to find
function setPage() {
    if (contactResult === true) {
        console.log("It is true.")
        page = "Contact"
        console.log("page set to:" + page);
        className = "nav-menu__link--" + page;
        console.log(className);
    }
}



setPage();
console.log("className outside of function: " + className);

//add a 'currentPage' class to the link for the current page
var element = document.getElementsByClassName(className);
element.classList.add("nav-menu__link--currentPage");
