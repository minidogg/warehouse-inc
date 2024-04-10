var minigames = {}
minigames.open = ()=>{
    q("#minigames").style.display = "block"
}
minigames.main = async()=>{
    colorLog("Hello from the minigames.js!","lime")

    minigames.minigames = await fetch("./minigames/data.json")
    minigames.minigames = await minigames.minigames.json()

    minigames.minigames.forEach(e=> {
        let button = document.createElement("button")
        button.textContent = e.name

        button.onclick = ()=>{

        }

        q("#minigameList").appendChild(button)
    });

    menu.menus.minigames = minigames.open
    menu.updateMenus()
    
    minigames.open()   
}
minigames.main()