let nav = document.getElementsByClassName("navbar");

window.addEventListener("scroll" , myFunc);
function myFunc() {
    if(window.scrollY >=68) {
        nav[0].style.backgroundColor = "white";
    }
    else {
        nav[0].style.backgroundColor = "rgb(248,249,250)";
    }
}

let x = document.getElementById("dealer");
x.addEventListener("click" , myDealer);

let y = document.getElementById("dealer-anchor");
y.addEventListener("click" , myDealer);

function myDealer() {
    let ma = document.getElementsByClassName("main");
    ma[0].style.display = "none";

    let d = document.getElementsByClassName("dealer");
    d[0].style.display = "block";
}

// ============
