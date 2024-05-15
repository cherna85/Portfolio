




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
