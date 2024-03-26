// ! DO NOT ADD ANY NEW PRODUCERS UNTIL WE AGREE ON SOME METHOD/FORMULA FOR BALANCING

var shop = {}
shop.compileNum = genRanHex(16)
shop.findCost = (baseCost,costMultiplier,owned)=>(baseCost^costMultiplier*owned)+baseCost
Object.entries(game.producers).forEach((ee)=>{
    let id = ee[0]
    let data = ee[1]

    let el = document.createElement("div")
    el.innerHTML = `
        <h1 class="buyOptionName">Loading your mother... this will only take 69.420 nanoseconds...</h1>
        <span class="buyOptionPrice">$69420 - 42069 SPS - 69 Owned</span>
    `
    el.classList.add("buyOption")
    el.q(".buyOptionName").textContent = data.name
    el.q(".buyOptionPrice").textContent = `${shop.findCost(data.baseCost,data.costMultiplier,data.owned)} sugar - ${data.sps} SPS - ${data.owned} Owned`

    el.id = shop.compileNum+"_buyOption_"+id
    

    q("#buyMenu").appendChild(el)

    el.onclick = ()=>{
        let fun_variable_with_the_dataa_of_the_game_producers_id_thing_idk = game.producers[id]
        let cost = shop.findCost(fun_variable_with_the_dataa_of_the_game_producers_id_thing_idk.baseCost,fun_variable_with_the_dataa_of_the_game_producers_id_thing_idk.costMultiplier,fun_variable_with_the_dataa_of_the_game_producers_id_thing_idk.owned)
        if(game.sugar<=cost)showNotification("Not enough money for: '"+fun_variable_with_the_dataa_of_the_game_producers_id_thing_idk.name+"'")

        game.sugar-=cost
        game.producers[id].owned += 1

        shop.update()
    }

})

shop.update = ()=>{

    Object.entries(game.producers).forEach((ee)=>{
        let id = ee[0]
        let data = ee[1]
        let cost = shop.findCost(data.baseCost,data.costMultiplier,data.owned)
    
        let el = document.getElementById(shop.compileNum+"_buyOption_"+id)

        el.classList.add("buyOptionDisabled")
        if(game.sugar>=cost)el.classList.remove("buyOptionDisabled")

        el.q(".buyOptionName").textContent = data.name
        el.q(".buyOptionPrice").textContent = `${cost} sugar - ${data.sps} SPS - ${data.owned} Owned`
    
    })
    
}

render.renderFunctions.push(()=>{
    shop.update()
})
    
    