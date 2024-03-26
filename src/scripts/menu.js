//menu util stuff
var menu = {}

menu.hideMenus = ()=>{
    Array.from(document.getElementById("menuContent").children).forEach((el)=>{
        el.style.display = "none"
    })
}
menu.hideMenus()

//settings
var settings = {}
q("#settings").style.display = "block"

let settingEls = []

settings.reset = ()=>{
    q("#settingList").innerHTML = ""
    Object.keys(game.settings).forEach((name)=>{
        let li = document.createElement("li")
        li.innerHTML = `<span>Auto Save</span>: <input>`
        li.q("span").textContent = camelCaseToWords(name)

        li.q("input").value = game.settings[name]

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
                break;
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