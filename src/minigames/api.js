var api = {}
var game = {}
window.addEventListener("message",e=>{
    if(e.data.type=="game"){
        game=e.data.data.game
        return
    }
})

