const arrows = document.querySelector('.arrows');
const up = document.querySelector('.up');
const down = document.querySelector('.down');
const fstSlide = document.querySelector('.fstSlide');

window.addEventListener("scroll", () => {
    console.log('scroll');
    let vertical_position = 0;
    if (pageYOffset)
        vertical_position = pageYOffset;
    else if (document.documentElement.clientHeight)
        vertical_position = document.documentElement.scrollTop;
    else if (document.body)
        vertical_position = document.body.scrollTop;
    arrows.style = 'margin-top:' + (vertical_position) + 'px';
});

up.addEventListener("click", () =>{ 
    let currPos = pageYOffset;
    window.scrollTo(0,currPos - fstSlide.offsetHeight);
})

down.addEventListener("click", () =>{ 
    let currPos = pageYOffset; 
    window.scrollTo(0,currPos + fstSlide.offsetHeight);
})

