addProperty(game, "sugar", 0);
addProperty(game, "collectableSugar", 0);
addProperty(game, "multiplier", 1); 
addProperty(game, "productionSpeed", 1000)
addProperty(game, "producers",{})
/*Producer schema, expect that once a save is started and gets the producer it won't change.
    "interalId":{
        "name":"Some name",
        "sps":1, //sugar per second
        "owned":0,
        "baseCost":1,
        "costMultiplier":1.5,
        "metadata":{someData:someData}
    }
    
*/


//add producers below this only
// ! DO NOT ADD ANY NEW PRODUCERS UNTIL WE AGREE ON SOME METHOD/FORMULA FOR BALANCING
addProperty(game.producers,"deliveryTruck",{
    "name":"Delivery Truck",
    "sps":1, //sugar per second
    "owned":0,
    "baseCost":1,
    "costMultiplier":1.5,
    "metadata":{}
})

//add producers above this only

var sugar = {};

sugar.updateSugarCount = () => {
  document.getElementById("resourceCount").textContent = "Sugar Ready For Collecting: " + game.collectableSugar
  document.getElementById("realResourceCount").textContent = "Sugar: " + game.sugar
}

sugar.startSugarGeneration = () => {
    sugar.sugarGenerationLoop()
}
sugar.sugarGenerationLoop = ()=>{
    game.collectableSugar += game.multiplier;
    Object.entries(game.producers).forEach((ee)=>{
        let e= ee[1]
        game.collectableSugar += e.sps*e.owned
    })

    setTimeout(sugar.sugarGenerationLoop,game.productionSpeed)
}

render.renderFunctions.push(()=>{
sugar.updateSugarCount();
})



sugar.collectSugar = () => {
  showNotification("You collected " + game.collectableSugar + " sugar!"); 

  game.sugar= game.sugar + game.collectableSugar;
  game.collectableSugar = 0;
  sugar.updateSugarCount();
}

document.getElementById("clickButton").addEventListener("click", () => {
  sugar.collectSugar();
});

sugar.startSugarGeneration();
