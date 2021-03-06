const hero = document.querySelector('.hero');
const slider = document.querySelector('.slider');
const logo = document.querySelector('#logo');
const headline = document.querySelector('.headline');
const hamburger = document.querySelector('.fas');

const tl = new TimelineMax();

tl.fromTo(
    hero, 
    1, 
    {height: '0%'}, 
    {height: '80%', ease: Power2.easeInOut}
    )
.fromTo(
    hero, 
    1.2, 
    {width: '100%'},
    {width: '80%', ease: Power2.easeInOut}
    )
.fromTo(
    slider,
    1.2,
    {x: '-100%'},
    {x: '0%', ease: Power2.easeInOut},
    '-=1.3'
)
.fromTo(
    logo,
    0.5,
    {opacity: 0, x: 30},
    {opacity: 1, x: 0},
    '-=0.5'
)
.fromTo(
    hamburger,
    0.5,
    {opacity: 0, x: 30},
    {opacity: 1, x: 0},
    '-=0.7'
)
.fromTo(
    headline,
    2.2,
    {opacity: 0, x: '-100%'},
    {opacity: 1, x: '1%'},
    '-=1'
)