let hammenu = document.getElementsByClassName("hamburger-container");
let sideNav = document.getElementsByClassName("Sidenav");
let z = document.getElementsByClassName("navbar");
// console.log(window.outerWidth);
if(window.outerWidth <= 650) {
    console.log(window.outerWidth);
    hammenu[0].style.display = "block";
    sideNav[0].style.display = "block";
    z[0].style.display = "none";
}

window.addEventListener("resize" , myfunc);

function myfunc () {
    let hammenu = document.getElementsByClassName("hamburger-container");
    let sideNav = document.getElementsByClassName("Sidenav");
    let z = document.getElementsByClassName("navbar");
    // console.log(window.outerWidth);
    if(window.outerWidth <= 650) {
        console.log(window.outerWidth);
        hammenu[0].style.display = "block";
        sideNav[0].style.display = "block";
        z[0].style.display = "none";
    }

    else {
        console.log(window.outerWidth);
        hammenu[0].style.display = "none";
        sideNav[0].style.display = "none";
       z[0].style.display = "flex";
    }
}

function openNav() {
    document.getElementById("mySidenav").style.width = "250px";
}
  
function closeNav() {
    document.getElementById("mySidenav").style.width = "0";
}
