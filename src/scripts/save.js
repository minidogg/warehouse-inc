//saving system code will go here.
var saving = {}

saving.genSave = (gameData)=>{
    return JSON.stringify(gameData)
}

saving.save = ()=>{
    localStorage.setItem("save",saving.genSave(game))
}


saving.getSave = ()=>{
    return localStorage.getItem("save")
}

saving.loadSave = ()=>{
    if(saving.getSave()==undefined){
        saving.save()
    }
    game = saving.getSave()
}

saving.loadSave()