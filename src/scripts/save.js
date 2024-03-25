//saving system code will go here.
var saving = {}

saving.save = ()=>{
    localStorage.setItem("save",btoa(JSON.stringify(game)))
}

saving.loadSave = ()=>{
    if(localStorage.getItem("save")==undefined){
        saving.save()
    }
    game = JSON.parse(atob(localStorage.getItem("save")))
}

saving.resetSave = ()=>{
    // todo: Make this into an actual popup instead of basic alerts
    if(alert("Are you sure you want to reset you save and lose all progress?")){
        localStorage.removeItem("save")
        loadSave()
    }
}

saving.loadSave()
