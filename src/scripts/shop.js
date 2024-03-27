// ! DO NOT ADD ANY NEW PRODUCERS UNTIL WE AGREE ON SOME METHOD/FORMULA FOR BALANCING

var shop = {}
shop.compileNum = genRanHex(16)
shop.findCost=(baseCost,costMultiplier,numOwned)=>
    Math.floor(
        baseCost*Math.pow(1+costMultiplier,numOwned)
    );

Object.entries(game.producers).forEach((producerNameData)=>{
    let id = producerNameData[0]
    let data = producerNameData[1]

    let shopItemElement = document.createElement("div")
    shopItemElement.innerHTML = `
        <h1 class="buyOptionName">Loading your mother... this will only take 69.420 nanoseconds...</h1>
        <span class="buyOptionPrice">$69420 - 42069 SPS - 69 Owned</span>
    `
    shopItemElement.classList.add("buyOption");
    shopItemElement.q(".buyOptionName").textContent = data.name;
    shopItemElement.q(".buyOptionPrice").textContent = `${shop.findCost(data.baseCost,data.costMultiplier,data.owned)} sugar - ${data.sps} SPS - ${data.owned} Owned`;

    shopItemElement.id = shop.compileNum+"_buyOption_"+id;
    

    q("#buyMenu").appendChild(shopItemElement);

    shopItemElement.onclick = ()=>{
        let producerData = game.producers[id]
        let cost = shop.findCost(producerData.baseCost,producerData.costMultiplier,producerData.owned)
        if(game.sugar <= cost)
            showNotification("Not enough money for: '"+producerData.name+"'");

        game.sugar -= cost
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
    
    