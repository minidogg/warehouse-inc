//This script should only ever be modified to add initialization related tasks
colorLog("Starting Warehouse Inc.","green","30px");

//This should be using Semantic Versioning from https://semver.org/
//You should use a to show alpha and b to show beta. Any other short terms should be stated after the dash.
var version = "0.1.1a-";

colorLog("Version " + version);

colorLog("E", "blue", "690px");


//Everything you want to save should be in this object.
var game = {version:version}

//use this function to add new properties to something in the game object. (Make sure to specify the game object)
function addProperty(obj,property,value){
    if(!obj.hasOwnProperty(property))obj[property]=value
}
function removeProperty(obj, property){
    if(obj.hasOwnProperty(property))delete obj[property]
}
addProperty(game,"settings",{})

//slightly unrelated but its cool.
document.getElementById("coverDiv").classList.add("coverDivAnimate")