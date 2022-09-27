let slidePosition = 0;
const slides = document.getElementsByClassName('carousel_item');
const totalSlides = slides.length;

document.querySelector('.carousel_button-next').addEventListener('click', function(){
    moveToNextSlide();
})

document.querySelector('.carousel_button-prev').addEventListener('click', function(){
    moveToPrevSlide();
})

function updateSlidePosition(){
    for (let slide of slides){
        slide.classList.remove('carousel_item-visible');
        slide.classList.add('carousel_item-hidden');
    }
    slides[slidePosition].classList.add('carousel_item-visible');
}

function moveToNextSlide(){

    if (slidePosition == totalSlides-1){
        slidePosition = 0
    }
    else {
        slidePosition++;
    }    
    updateSlidePosition();

}

function moveToPrevSlide(){
    updateSlidePosition();

    if (slidePosition == 0){
        slidePosition = totalSlides - 1
    }
    else {
        slidePosition--;
    }}



// var slideIndex,slides,dots,captionText;

// function initGallery(){
//     slideIndex = 0;
//     slides = document.getElementsByClassName('imageHolder');
//     slides[slideIndex].style.opacity = 1;

//     captionText = document.querySelector('.captionHolder .captionText');
//     captionText.innerText = slides[slideIndex].querySelector('.captionText').innerText; 


// dots = [];
// var dotContainer = document.getElementById('dotContainer');

// for (var i= 0; i < slides.length; i++) {
//     var dot = document.createElement('span');
//     dot.classList.add('dots');
//     dotContainer.append(dot)
//     dots.push(dot)
// }

// dots[slideIndex].classList.add('active');
// }
// initGallery();

// function plusSlides(n){
//     moveSlide(slideIndex + n)
// }

// function moveSlide(n){
//     var i, current, next;
//     var moveSlideAnimClass = {
//         forCurrent : '',
//         forNext : ''
// }

// if(n > slideIndex){ 
//     if (n = slides.length) {n=0}
//     moveSlideAnimClass.forCurrent = 'moveLeftCurrentSlide';
//     moveSlideAnimClass.forNext = 'moveLeftNextSlide';

// }
// else if(n != slideIndex){
//     next = slides[n];
//     current= slides[slideIndex];
//     for(i =0; i<slides.length; i++){
//         slides[i].className = 'imaeholder';
//         slides[i].style.opacity = 0;
//         dots[i].classList.remove('active');
//     }
//     current.classList.add(moveSlideAnimClass.forCurrent);
//     next.classList.add(moveSlideAnimClass.forNext);
//     dots[n].classList.add('active');
//     slideIndex=n;

// }

// }


