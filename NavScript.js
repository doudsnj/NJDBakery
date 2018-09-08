
$(function(){
    $(".reusable-nav").load("NavBar.html");

    // now you have the html created
    // get ref to nav-menu
    // loop through elements in nav array, creating new <a> for each element in the array
      // if the element matches the current window.location.href, add the active class
});

//get current URL 
var url = window.location.href;
console.log(url);


//determine which page the URL points to

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
function setPage(){
    if (contactResult === true){
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





