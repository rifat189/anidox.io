var slideBtn = document.getElementsByClassName("slideIndicatorButton");
var slide = document.getElementsByClassName("slides");
var activeSlide = document.getElementsByClassName("activeSlide");
var activesSideBtn = document.getElementsByClassName("activeSlideBtn");

function slideChange(n){
    activeSlide[0].classList.remove("activeSlide");
    activesSideBtn[0].classList.remove("activeSlideBtn");
    slide[n].classList.add("activeSlide");
    slideBtn[n].classList.add("activeSlideBtn");
}





// new alt Slide

var slideBtn = document.getElementsByClassName("altSlideIndicatorButton");
var slide = document.getElementsByClassName("altSlide");
var activeSlide = document.getElementsByClassName("altSlideActive");
var activesSideBtn = document.getElementsByClassName("altSlideButtonActive");

function altSlideChange(n){
    activeSlide[0].classList.remove("altSlideActive");
    activesSideBtn[0].classList.remove("altSlideButtonActive");
    slide[n].classList.add("altSlideActive");
    slideBtn[n].classList.add("altSlideButtonActive");
}