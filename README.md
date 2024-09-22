# Insurance landing page
This project is a static landing page, built with HTML, CSS, and JavaScript.
It's a solution to the [Insure landing page challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/insure-landing-page-uTU68JV8). Frontend Mentor challenges help you improve your coding skills by building realistic projects. 


# TABLE OF CONTENT
- [Live project](#live-project)
- [Workflow](#workflow)
- [Code snippets](#what-i-learnt-code-snippets)


## Live project

![preview](./images/preview.png)

See the project live: [https://insurance-fm-landingpage.netlify.app/#](https://insurance-fm-landingpage.netlify.app/#)


## Workflow
- Mobile-first approach
- Adapt the design for tablets through media queries, changing the hero image and the brand color on my design taste, as an optimized image for tablets wasn't provided by the starter kit.
- Adapt the mobile design for desktops through media queries, and by using the images provided with the starter kit.


## What I learnt (code snippets)

1) I made practice with Flexbox, it helped me to give a proper orientation and order to the body and its sections in the mobile design. Additionally, I have found this layout to be a good starter point to obtain responsiveness.

Here's how I styled the hero-section for smartphones:

```css
#hero-section {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}
```


- 'Position: relative; z-index: 2'. I used the position-relative property to create a multi-layered layout, where certain elements needed to be visually layered on top of others.

example:

```css
.hero-bottom-pattern {
    
    position: relative;
    z-index: 2;
    
    width: 26%;
    height: auto;

    margin-left: 75%;
    margin-top: -90px;

}
```


- I used JavaScript to replace an image in the DOM with another, thanks to the window.innerWidth property.
I made some practice with DOM manipulation: every time I had to change a certain pattern or image used in the mobile design, with others mandatory for desktop design, I used JavaScript.
This is the snippet of the function I used, I learnt a lotabout how to dynamically change DOM elements based on the window size.

``` JavaScript 
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
``````
