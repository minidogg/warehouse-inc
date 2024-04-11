api.onReady.push(async()=>{
    console.log("ready!")
    await api.request.game() // ! Do not ever, ever, modify the game object DIRECTLY without requesting the game object.
    
})