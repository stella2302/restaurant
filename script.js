var dropdown = document.querySelector(".dropdownItems");

var container = document.querySelector(".container");

//BURGER ICON WHEN NOTHING IS CLICKED
var burgerIcon = document.querySelector(".burgerIcon");

//BURGER ICON WHEN THE BURGER MENU IS CLICKED
var burgerIcon2 = document.querySelector(".burgerIcon2");

var header = document.querySelector(".header");

var body = document.querySelector("body");


//EVENTLISTENER ON HAMBURGER ICON
burgerIcon.addEventListener("click", function () {
    //IF MENU ISNT SHOWN, THEN SHOW
    if (!(dropdown.style.display == "block")) {
        console.log("dropdown shown");
        dropdown.style.display = "block";
        container.style.display = "none";

        //ADD CLASS "gradientBody" TO BODY
        body.classList.add("gradientBody");
    } else { //IF MENU IS SHOWN, THEN HIDE
        console.log("dropdown hidden");
        dropdown.style.display = "none";
        container.style.display = "block";

        //REMOVE CLASS "gradientBody" FROM BODY
        body.classList.remove("gradientBody");
    }
});
