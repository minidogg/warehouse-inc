//saving system code will go here.
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

saving.resetSave = () => {
  // todo: Make this into an actual popup instead of basic alerts
  if (prompt("Are you sure you want to reset you save and lose all progress? Type 'yes' to confirm")) {
    game.autoSave = false
    setTimeout(() => {
      localStorage.removeItem("save")
      window.location.reload(true)
    }, 1000)

  }
}

saving.loadSave()

saving.autoSave = () => {
  console.log("Auto saving")

  if (game.autoSave == true) saving.save()

  setTimeout(() => { saving.autoSave() }, game.autoSaveRate)
}

addProperty(game, "autoSaveRate", 1000)
addProperty(game, "autoSave", true)
saving.autoSave()
