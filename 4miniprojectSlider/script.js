
let flag = 0

function controller(x) {
    flag = flag + x;
    slideshow(flag);
}


function slideshow(num) {
    let slides = document.getElementsByClassName('slide')
    if (num == slides.length) {
        flag = 0;
        num = 0;

    }
    if (num < 0) {
        num = slides.length - 1;
        flag = slides.length - 1;


    }
    console.log(slides);
    for (let y of slides) {
        y.style.display = "none";
    }

    slides[num].style.display = "block";

}




