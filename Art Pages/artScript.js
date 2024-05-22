import info from './Art_Info.json' with {type: 'json'};




//Get values data from href
const urlParams = new URLSearchParams(window.location.search);
const artValue = urlParams.get('Art');  


//Loop till you find the project
var artNum = 0;
for(let p = 0;p < info.length; p++)
{
    
    if(artValue == info[p].name)
    {
        artNum = p;
        break;
    }
}


//change title of webpage
document.title = info[artNum].name;
console.log(info[artNum].name);

//change name of box
document.getElementById("change_Name").innerHTML = info[artNum].name;

let slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
    showSlides(slideIndex += n);
}
window.plusSlides = plusSlides;

function currentSlide(n) {
    showSlides(slideIndex = n);
}
window.currentSlide = currentSlide;

function showSlides(n) {
    let i;
    let slides = document.getElementsByClassName("mySlides");
    let dots = document.getElementsByClassName("demo");
    let captionText = document.getElementById("caption");
    if (n > slides.length) {slideIndex = 1}
    if (n < 1) {slideIndex = slides.length}
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }
    slides[slideIndex-1].style.display = "block";
    dots[slideIndex-1].className += " active";
    captionText.innerHTML = dots[slideIndex-1].alt;
}
