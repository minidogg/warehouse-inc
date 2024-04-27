//This script should only ever be modified to add initialization related tasks
colorLog("Starting Warehouse Inc.","green","30px");

//This should be using Semantic Versioning from https://semver.org/
//You should use a to show alpha and b to show beta. Any other short terms should be stated after the dash.
var version = "0.2.1-alpha";

colorLog("Version " + version);

document.getElementById('versionNumber').innerHTML = version+(isDev()===true?" <span style='color:yellow;'>(dev)</span>":"");

//Everything you want to save should be in this object.
var game = {version:version}
addProperty(game,"settings",{});
addProperty(game,"settingsMd",{});

//slightly unrelated but its cool.
document.getElementById("coverDiv").classList.add("coverDivAnimate")
