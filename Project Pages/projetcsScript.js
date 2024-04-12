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

//Subtitle
document.getElementById("change_Position").innerHTML = info[projNum].contents[0].Subtitle[0].Position;
// change itch Linkj
document.getElementById("change_Link").href = info[projNum].contents[0].Subtitle[0].ItchPath;
//change the type of the game 
document.getElementById("change_Type").innerHTML = info[projNum].contents[0].Desc[0].Type;

//Programming description
document.getElementById("change_P_Desc").innerHTML  = info[projNum].contents[0].Desc[0].Work[0].Programming;