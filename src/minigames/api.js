var api = {}
api.onReady = []
var game = {}
window.addEventListener("message",e=>{
    if(e.data.type=="game"){
        game=e.data.data.game
        return
    }
    if(e.data.type=="ready"){
        api.onReady.forEach((e)=>{
            e()
        })
        return
    }
})

