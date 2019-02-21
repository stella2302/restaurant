var dropdown = document.querySelector(".dropdownItems");

var container = document.querySelector(".container");

var burgerIcon = document.querySelector(".burgerIcon");


//EVENTLISTENER ON HAMBURGER ICON
burgerIcon.addEventListener("click", function () {
    //IF MENU ISNT SHOWN, THEN SHOW
    if (!(dropdown.style.display == "block")) {
        console.log("dropdown shown");
        dropdown.style.display = "block";
        container.style.display = "none";
    } else { //IF MENU IS SHOWN, THEN HIDE
        console.log("dropdown hidden");
        dropdown.style.display = "none";
        container.style.display = "block";
    }
});
