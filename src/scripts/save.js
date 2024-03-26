//saving system code will go here.stringify
var saving = {}

saving.save = () => {
  localStorage.setItem("save", btoa(JSON.stringify(game)))
}

saving.loadSave = () => {
  if (localStorage.getItem("save") == undefined) {
    saving.save()
  }
  try {
    game = JSON.parse(atob(localStorage.getItem("save")))
  } catch (err) {
    saving.resetSave()
    console.warn(err)
  }
}

saving.resetSave = async () => {

  if ((await showPrompt("Are you sure you want to reset your save and lose all progress? Type 'yes' to confirm","Yes",3)).toLowerCase() == 'yes') {
    game.autoSave = false
document.getElementById("coverDiv").classList.remove("coverDivAnimate")
    setTimeout(() => {
      localStorage.removeItem("save")
      window.location.reload(true)
    }, 1000)

  }
}

saving.loadSave()

saving.autoSave = () => {
  console.log("Auto saving")
  
  if (game.settings.autoSave == true) {
    saving.save();
  }else{
    setTimeout(() => { saving.autoSave() }, parseInt(game.settings.autoSaveRate));
    return
  }
  document.querySelector('.save-icon').style.display = 'block'; 
  setTimeout(() => { 
    document.querySelector('.save-icon').style.display = 'none';
  }, 500);
  setTimeout(() => { saving.autoSave() }, parseInt(game.settings.autoSaveRate));
}

addProperty(game.settings, "autoSaveRate", 1000);
addProperty(game.settings, "autoSave", true);
saving.autoSave();

//make funny prompt if try to close
window.onbeforeunload = confirmExit;
    function confirmExit() {
        if(game.settings.autoSave==false)return "Are you sure you want to leave? You have auto-saving disabled.";
        if(game.settings.autoSave==true){
            saving.save()
            return "Are you sure you want to leave? Your game has been saved."
        }
    }