let d = new Date();
let months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

let close = document.querySelector("#nav_close");
let open = document.querySelector("#menuknap");




window.addEventListener("load", sidenVises);


function sidenVises() {
    console.log("sidenVises");
    document.querySelector("#menuknap").addEventListener("click", toggleMenu);
    visDato();

}


// Klik på menu
function toggleMenu() {
    console.log("toggleMenu");
    document.querySelector("#menu").classList.toggle("hidden");


    if (open) {
        open.addEventListener("load", openNav());
    }

    if (close) {
        close.addEventListener("load", closeNav());
    }

}


// Lukker menu
function closeNav() {
    console.log("closeNav");
    document.querySelector("#navOverlay").style.height = "0%";
}


// Aktiverer menu (Overlay)
function openNav() {
    console.log("openNav");
    document.querySelector("#navOverlay").style.height = "100%";
}



//Viser Dato:
function forsidenVises() {
    console.log("forsidenVises");
    document.querySelector("#menuknap").addEventListener("click", toggleMenu);
    visDato();
}

//Viser Dato:
function visDato() {
    //udskriver i konsollen
    console.log("visDato " + d.getMonth());
    document.querySelector("#demo").innerHTML = months[d.getMonth()] + " " + d.getDate();
}
