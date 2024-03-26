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

  if (await showPrompt("Are you sure you want to reset your save and lose all progress? Type 'yes' to confirm","Yes",3).toString() == 'yes') {
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
  
  if (game.autoSave == true) {
    saving.save();
  }else{
    return
  }
  setTimeout(() => { 
    document.querySelector('.save-icon').style.display = 'block'; 
  }, 500);
  document.querySelector('.save-icon').style.display = 'none';
  setTimeout(() => { saving.autoSave() }, game.autoSaveRate);
}

addProperty(game, "autoSaveRate", 1000);
addProperty(game, "autoSave", true);
saving.autoSave();
