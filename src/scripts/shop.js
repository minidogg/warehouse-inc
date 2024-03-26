var shop = {}
shop.compileNum = genRanHex(16)
shop.findCost = (baseCost,costMultiplier,owned)=>(baseCost*costMultiplier*owned)+baseCost
Object.entries(game.producers).forEach((ee)=>{
    let id = ee[0]
    let data = ee[1]

    let el = document.createElement("div")
    el.innerHTML = `
        <h1 class="buyOptionName">Loading...</h1>
        <span class="buyOptionPrice">$1000 - 1 SPS - 0 Owned</span>
    `
    el.classList.add("buyOption")
    el.q(".buyOptionName").textContent = data.name
    el.q(".buyOptionPrice").textContent = `${shop.findCost(data.baseCost,data.costMultiplier,data.owned)} sugar - ${data.sps} SPS - ${data.owned} Owned`

    el.id = shop.compileNum+"_buyOption_"+id
    

    q("#buyMenu").appendChild(el)

    el.onclick = ()=>{
        let dataa = game.producers[id]
        let cost = shop.findCost(dataa.baseCost,dataa.costMultiplier,dataa.owned)
        if(game.sugar<=cost)showNotification("Not enough money for: '"+dataa.name+"'")

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
    
    