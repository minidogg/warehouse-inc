//menu util stuff
var menu = {}
menu.menus = {}

menu.hideMenus = ()=>{
    Array.from(document.getElementById("menuContent").children).forEach((el)=>{
        el.style.display = "none"
    })
}
menu.hideMenus()

menu.updateMenus = ()=>{
    Array.from(q('.menuContainer').children).forEach((e)=>{
        // console.log(e)
        if(typeof(menu.menus[e.ariaLabel])!=="undefined"){
            menu.hideMenus()
            e.onclick = menu.menus[e.ariaLabel]
        }else{
            e.onclick=()=>{
                menu.hideMenus()
            }
        }

    })
}
menu.menus.credits = ()=>{
    window.location.href = '../credits.html'
}

menu.updateMenus()
