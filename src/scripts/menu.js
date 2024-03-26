//menu util stuff
var menu = {}

menu.hideMenus = ()=>{
    Array.from(document.getElementById("menuContent").children).forEach((el)=>{
        el.style.display = "none"
    })
}
menu.hideMenus()

//other menu stuff
q("#settings").style.display = "block"