/* Mobile menu 
// const icon to open hamburger
const hamburgerOpenIcon = document.getElementById("open-hamburger"); 

// const icon to close hamburger
const hamburgerCloseicon = document.getElementById("close-hamburger");

// const hamburger menu element
const hamburgerMenu = document.getElementById("mobile-hamburger-menu");

// Function to show and hide the hamburger menu when the icon is clicked
hamburgerOpenIcon.addEventListener("click", function callMenu() {

    // show the hamburger menu
    hamburgerMenu.classList.add("show");

    // Hide the open icon
    hamburgerOpenIcon.style.display = "none";

    // show the close icon
    hamburgerCloseicon.style.display="block";
    }
);

// Function to hide again the menu when the closing icon is clicked,
// plus to hide the close icon and show again the open icon
    hamburgerCloseicon.addEventListener('click', function() {
    hamburgerMenu.classList.remove('show');
    hamburgerOpenIcon.style.display = 'block'; 
    hamburgerCloseicon.style.display = 'none'; // Nascondi l'icona di chiusura
  });

  
  // Make the menu and the close icon desappear also when a menu link is clicked
  const menuLinks = document.querySelectorAll('#mobile-hamburger-menu li a');
  
  menuLinks.forEach(link => {
      link.addEventListener('click', function() {
          hamburgerMenu.classList.remove('show');  // Hide the menu
          hamburgerOpenIcon.style.display = 'block'; // Show the open icon
          hamburgerCloseicon.style.display = 'none'; // Hide the close icon
        });
    });
    
    */


/* bg-pattern-intro-right-mobile > bg-pattern-intro-left-desktop
   on media (min-width:1024px)  */ 
var mobilePattern = document.getElementById('mobile-pattern');

function replacePattern() {

    var windowWidth = window.innerWidth || document.documentElement.clientWidth;

    if(windowWidth >=1024) {

        mobilePattern.src='./images/bg-pattern-intro-left-desktop.svg';
    }
    else {

        mobilePattern.src= './images/bg-pattern-intro-right-mobile.svg';
    }
}

replacePattern();
window.addEventListener('resize', replacePattern);


/* bg-pattern-how-we-work-mobile.svg > bg-pattern-how-we-work-desktop.svg
on media (min-width:1024px) */ 

