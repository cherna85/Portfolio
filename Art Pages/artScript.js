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

//change imaes 1
document.getElementById("change_img").src = info[artNum].img1;
document.getElementById("change_img1.1").src = info[artNum].img1;

//change imaes 2
document.getElementById("change_img2").src = info[artNum].img2;
document.getElementById("change_img2.1").src = info[artNum].img2;

//change imaes 2
document.getElementById("change_img3").src = info[artNum].img2;
document.getElementById("change_img3.1").src = info[artNum].img2;

//
document.getElementById("change_Background").innerHTML = info[artNum].Background;
document.getElementById("change_Challenges").innerHTML = info[artNum].Challenges;
document.getElementById("change_Steps").innerHTML = info[artNum].Steps;
document.getElementById("change_Applied").innerHTML = info[artNum].Applied;


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
