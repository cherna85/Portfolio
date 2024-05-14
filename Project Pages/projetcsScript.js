import info from './Projects_Info.json' with {type: 'json'};


console.log("Hello worldssssssss");
console.log(info);


//Get values data from href
const urlParams = new URLSearchParams(window.location.search);
const projValue = urlParams.get('Proj');
console.log(projValue);  


//Loop till you find the project
var projNum = 0;
for(let p = 0;p < info.length; p++)
{
    
    if(projValue == info[p].name)
    {
        projNum = p;
        break;
    }
}


//change title of webpage
document.title = info[projNum].name;

//change name of box
document.getElementById("change_Name").innerHTML = info[projNum].name;

//change image
document.getElementById("change_Poster").src = info[projNum].contents[0].ImgPath;
//change size
document.getElementById("change_Poster").style = info[projNum].contents[0].ImgStyle;

//Subtitle
document.getElementById("change_Position").innerHTML = info[projNum].contents[0].Subtitle[0].Position;
// change itch Linkj
document.getElementById("change_Link").href = info[projNum].contents[0].Subtitle[0].ItchPath;
//change the type of the game 
document.getElementById("change_Type").innerHTML = info[projNum].contents[0].Desc[0].Type;
//change type
document.getElementById("change_Play").innerHTML = info[projNum].contents[0].Desc[0].PlayType;

//change synopsis 
document.getElementById("change_Synopsis").innerHTML = info[projNum].contents[0].Desc[0].Synopsis;
document.getElementById("change_Synopsis2").innerHTML = info[projNum].contents[0].Desc[0].Synopsis2;

//Programming description
document.getElementById("change_P_Desc").innerHTML  = info[projNum].contents[0].Desc[0].Work[0].Programming;

//UI/X Desctiption
document.getElementById("change_UI_Desc").innerHTML  = info[projNum].contents[0].Desc[0].Work[0].UI;
//design Desctiption
document.getElementById("change_Design_Desc").innerHTML  = info[projNum].contents[0].Desc[0].Work[0].Design;

//steps and thinking 
document.getElementById("change_Steps").innerHTML = info[projNum].contents[0].Steps;
document.getElementById("change_Design_think").innerHTML = info[projNum].contents[0].Des_Think;
