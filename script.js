var dropdown = document.querySelector(".dropdownItems");

var burgerIcon = document.querySelector(".burgerIcon");

var body = document.querySelector("body");


//EVENTLISTENER ON HAMBURGER ICON
burgerIcon.addEventListener("click", function () {
    //IF MENU ISNT SHOWN, THEN SHOW
    if (!(dropdown.style.display == "block")) {
        console.log("dropdown shown");
        dropdown.style.display = "block";

        //ADD CLASS "gradientBody" TO BODY
        body.classList.add("gradientBody");
    } else { //IF MENU IS SHOWN, THEN HIDE
        console.log("dropdown hidden");
        dropdown.style.display = "none";

        //REMOVE CLASS "gradientBody" FROM BODY
        body.classList.remove("gradientBody");
    }
});
