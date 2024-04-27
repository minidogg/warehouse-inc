// ? Note: This is for displaying the settings MENU
var settings = {}


let settingEls = []

settings.reset = ()=>{
    q("#settingList").innerHTML = ""
    Object.keys(game.settings).forEach((name)=>{
        let li = document.createElement("li")
        li.innerHTML = `<span>Auto Save</span>: <input>`
        li.q("span").textContent = camelCaseToWords(name)

        li.q("input").value = game.settings[name]
        if(typeof(game.settingsMd[name])!="undefined"){
            console.log(game.settingsMd[name])
            switch (game.settingsMd[name].type) {
                case "slider":
                    li.q("input").type="range"
                    li.q("input").min = game.settingsMd[name].min
                    li.q("input").max = game.settingsMd[name].max
                    break;
                default:
                    li.q("input").type="text"
                    break;
            }
        
        }else{
            switch (typeof(game.settings[name])) {
                case "boolean":
                    li.q("input").type="checkbox"
                    li.q("input").checked = game.settings[name]
                    break;
                case "number":
                    li.q("input").type="number"
                    li.q("input").pattern="\d*"
                    li.q("input").required=true
                    break;
                case "bigint":
                    li.q("input").type="number"
                    break;
                default:
                    li.q("input").type="text"
                    break;
            }
        }

        li.ariaLabel = name
        settingEls.push(li)

        q("#settingList").append(li)
    })
}
settings.reset()

settings.update = ()=>{
    for(e of settingEls){
        game.settings[e.ariaLabel] = e.q("input").type=="checkbox"?e.q("input").checked:e.q("input").value
        // console.log(game.settings[e.ariaLabel])
    }
}
render.renderFunctions.push(settings.update)
menu.menus.settings = ()=>{
    q("#settings").style.display = "block"
    console.log("e")
}
menu.updateMenus()