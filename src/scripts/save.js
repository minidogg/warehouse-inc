//saving system code will go here.
var saving = {}

saving.save = ()=>{
    localStorage.setItem("save",btoa(JSON.stringify(game)))
}

saving.loadSave = ()=>{
    if(localStorage.getItem("save")==undefined){
        saving.save()
    }
    try{
    game = JSON.parse(atob(localStorage.getItem("save")))
    }catch(err){
        localStorage.removeItem("save")
        window.location.reload(true)
        console.warn(err)
    }
}

saving.resetSave = ()=>{
    // todo: Make this into an actual popup instead of basic alerts
    if(prompt("Are you sure you want to reset you save and lose all progress? Type 'yes' to confirm")){
        localStorage.removeItem("save")
        window.location.reload(true)
    }
}

saving.loadSave()
