var dropdown = document.querySelector(".dropdownItems");
var burgerIcon = document.querySelector(".burgerIcon");
var body = document.querySelector("body");


//EVENTLISTENER ON HAMBURGER ICON
burgerIcon.addEventListener("click", function () {
    //IF MENU ISNT SHOWN, THEN SHOW
    if (!(dropdown.style.display == "flex")) {
        console.log("dropdown shown");
        dropdown.style.display = "flex";

        //ADD CLASS "gradientBody" TO BODY
        body.classList.add("gradientBody");
    } else { //IF MENU IS SHOWN, THEN HIDE
        console.log("dropdown hidden");
        dropdown.style.display = "none";

        //REMOVE CLASS "gradientBody" FROM BODY
        body.classList.remove("gradientBody");
    }
});

//Naviger i menuen

//HENT DATA FRA JSON
document.addEventListener("DOMContentLoaded", hentJson);
let menuButtons = document.querySelectorAll(".menuButton")
let display = document.querySelector(".desktopMenu");
let mineRetter;

async function hentJson() {
    const myJson = await fetch("https://mandalskeawebspace.dk/claude_php/clean_up_spreadsheet.php?id=1k79U13NobDDqXMpGJpzrl9Y8D2hDyh6WUrhENSnA7bc");
    console.log(myJson);
    mineRetter = await myJson.json();
    console.log(mineRetter);

    visRetter("Apéritif");
}


menuButtons.forEach(menuButton => {
    menuButton.addEventListener("click", function () {
        visRetter(this.innerHTML);
    });
});


function visRetter(str) {
    display.innerHTML = "";
    render(str)
}

function render(str) {
    for (let i = 0; i < mineRetter.length; i++) {
        if (mineRetter[i].kategori === str) {
            display.innerHTML += `<div id="menuItem${i}" class="menuItem">
                    <div class="overlay">
                    <h4>${mineRetter[i].titel}</h4><p class="beskrivelse">${mineRetter[i].beskrivelse}</p>
                    <p class="priceTag">${mineRetter[i].pris}</p>
                    </div>
                </div>`;

            document.querySelector("#menuItem" + i).style.backgroundImage = "url('./billeder/" + mineRetter[i].billede + "')";

            console.log(mineRetter[i]);
        }
    }
}
