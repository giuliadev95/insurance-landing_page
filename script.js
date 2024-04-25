/* Mobile menu */ 

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


/*  bg-pattern-intro-right-mobile >  bg-pattern-intro-right-desktop 
    on media (min-width:1024px) */ 