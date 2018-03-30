setInterval(moveSlide, 6000);

var slideIndex = 1;
showSlides(slideIndex);

function prevNextSlides(n) {
    showSlides(slideIndex += n);
}

function currentSlide(n) {
    showSlides(slideIndex = n);
}

function moveSlide() {
    var n;
    var slides = document.getElementsByClassName("slider-image");
    for (i = 0; i < slides.length; i++) {
        if (slides[i].style.display == 'block') {
            n = i + 1;
            break;
        }
    }
    if (n >= slides.length) {
        n = 1;
    } else {
        n = n + 1;
    }
    showSlides(slideIndex = n);
}

function showSlides(n) {
    var i;
    var slides = document.getElementsByClassName("slider-image");
    var dots = document.getElementsByClassName("dot");
    if (n > slides.length) {
        slideIndex = 1
    }
    if (n < 1) {
        slideIndex = slides.length
    }
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }
    slides[slideIndex - 1].style.display = "block";
    dots[slideIndex - 1].className += " active";
}