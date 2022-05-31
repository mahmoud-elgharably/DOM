/**
 * 
 * Manipulating the DOM exercise.
 * Exercise programmatically builds navigation,
 * scrolls to anchors from navigation,
 * and highlights section in viewport upon scrolling.
 * 
 * Dependencies: None
 * 
 * JS Version: ES2015/ES6
 * 
 * JS Standard: ESlint
 * 
*/

/**
 * Comments should be present at the beginning of each procedure and class.
 * Great to have comments before crucial code sections within the procedure.
*/

/**
 * Define Global Variables
 * 
*/

let allSections = [...document.querySelectorAll('section')];
let menuLinks;

/**
 * End Global Variables
 * Start Helper Functions
 * 
*/



/**
 * End Helper Functions
 * Begin Main Functions
 * 
*/


// Scroll to anchor ID using scrollTO event


/**
 * End Main Functions
 * Begin Events
 * 
*/

// Build menu 

// Scroll to section on link click

// Set sections as active

window.addEventListener('DOMContentLoaded', (event) => {
    buildNavBar('getElementsByTagName', 'Array.from', 'appendChild', true);
    menuLinks = [...document.getElementsByClassName('menu__link')];
});

document.addEventListener('scroll', function (event) {
    activateInView(true);    
});


document.getElementById('mblMenu').addEventListener('click', () => {

    let x = document.querySelector('.navbar__menu');
    //console.log(x.style.display);
    if (x.style.display !== "block") {
      x.style.display = "block";
    } else {
      x.style.display = "none";
    }



    //if (x.style.display !== "none") {
    //  x.style.display = "none";
    //} else {
    //  x.style.display = "block";
    //}
});