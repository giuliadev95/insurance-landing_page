# Insurance landing page
This project is a landing page, built with HTML, CSS, and JavaScript.
It's a solution to the [Insure landing page challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/insure-landing-page-uTU68JV8). Frontend Mentor challenges help you improve your coding skills by building realistic projects. 

## live project

![preview](https://github.com/GiuliaDeveloper/Insurance-landing-page-coding-challenge/assets/102733762/8691b87a-8db6-4c82-9ef3-162f0764d6f5)

See the project live: [https://insurance-fm-landingpage.netlify.app/#](https://insurance-fm-landingpage.netlify.app/#)


## Work in progress

As mentioned above, I'm still working with the coding and design: I followed the mobile first approach, so:

- I made the mobile design entirely: but the interactive hamburger menu needs to be added.

- Desktop design is being completed, through media queries applied to mobile design.

- The tablet design still needs to be designed (since it didn't come with the starter kit) and then built. This will be a great opportunity to learn the basics of web design and I can't wait to get started on this task!


## Preciouse CSS I've learnt

- Flexbox layout model. It helped my to give a proper orientation and order to the body and the sections in the mobile design. Additionally, I have found that the responsiveness suits this layout well and will continue to use it.

snippet used to style my hero-section:

```css
#hero-section {
  display: flex;
  flex-direction: row;
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

- I'll keep updating this README.md in future commits, along with the code of the project itself.
