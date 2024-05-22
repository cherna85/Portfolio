

function changeTop(type)
{
    var current = document.getElementsByClassName("active");
    if(current.length)
    {
        current[0].className = current[0].className.replace("active", "");
    }
    
    switch(type)
    {
        case "about":
            document.getElementById("topNav").children[6].className = "active"
            break;

        case "contact":
            document.getElementById("topNav").children[5].className = "active"
            break;

        case "projects":
            document.getElementById("topNav").children[4].className = "active"
            break;

        case "art":
            document.getElementById("topNav").children[3].className = "active"
            break;

        case "work_experience":
            document.getElementById("topNav").children[2].className = "active"
            break

        case "current":
            document.getElementById("topNav").children[1].className = "active"
            break;
    }
}

function isElementIntoView(el) { 
    var e = document.querySelector(el);
    var rect = e.getBoundingClientRect();
    if( window.innerHeight/2-rect.top >= 0 && window.innerHeight/2-rect.top <=500 ){
        return true;
    }

    return false;     
}

//checks if anchor onscreen

window.addEventListener("scroll", function(){
    if(isElementIntoView("#current")){
        changeTop("current");
    } 
    if(isElementIntoView("#work_experience")){
        changeTop("work_experience");
    }
    if(isElementIntoView("#projects")){
        changeTop("projects");
    }  
    if(isElementIntoView("#contact")){
        changeTop("contact");
    } 
    if(isElementIntoView("#about")){
        changeTop("about");
    } 
    if(isElementIntoView("#art")){
        changeTop("art");
    } 
});
    