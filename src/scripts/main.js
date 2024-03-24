//This script should only ever be modified to add initialization related tasks
colorLog("Starting Warehouse Inc.","green","30px")

//This should be using Semantic Versioning from https://semver.org/
//You should use a to show alpha and b to show beta. Any other short terms should be stated after the dash.
var version = "0.1.0a-"

colorLog("E","Version "+version,"15px")


//Everything you want to save should be in this object.
var game = {}
//use this function to add new properties to something in the game object. (Make sure to specify the game object)
function addProperty(obj,property,value){
    if(!obj.hasOwnProperty(property))obj[property]=value
}

// generates a random name for your warehouse :3
function randomName() {
    var nameAdjs = ['Tired', 'High', 'Hungry', 'Agitated', 'Excited', 'Addicted'];
    var nameNouns = ['Cartel Leader', 'Addict', 'Mafia Boss', 'Discord Moderator', 'Karen'];
    document.getElementById('name').value = nameAdjs[Math.floor(Math.random()*nameAdjs.length)] + ' ' + nameNouns[Math.floor(Math.random()*nameNouns.length)];
}

window.onload = randomName();