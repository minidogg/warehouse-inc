//saving system code will go here.
var saving = {}

saving.genSave = (gameData)=>{
    return atob(JSON.stringify(gameData))
}

saving.save = ()=>{
    localStorage.setItem("save",saving.genSave(game))
}


saving.getSave = ()=>{
    return btoa(localStorage.getItem("save"))
}

saving.loadSave = ()=>{
    if(saving.getSave()==undefined){
        saving.save()
    }
    game = saving.getSave()
}

saving.resetSave = ()=>{
    // todo: Make this into an actual popup instead of basic alerts
    if(alert("Are you sure you want to reset you save and lose all progress?")){
        localStorage.removeItem("save")
        loadSave()
    }
}

saving.save()
