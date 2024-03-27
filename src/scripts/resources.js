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
    "sps":1.1, //sugar per second
    "owned":0,
    "baseCost":2,
    "costMultiplier":.7,
    "metadata":{}
})

//add producers above this only

var sugar = {};

sugar.updateSugarCount = () => {
  q("#uncollectedCount").textContent = removeExtraDecimals(game.collectableSugar,0);
  q("#totalCount").textContent       = removeExtraDecimals(game.sugar,0);
  q("#spsCount").textContent         = removeExtraDecimals(game.sps, 0);
}

sugar.startSugarGeneration = () => {
  sugar.sugarGenerationLoop()
}

sugar.sugarGenerationLoop = () => {
  var newSugar = game.multiplier;
  Object.entries(game.producers).forEach((producerNameValue)=>{
    let producer = producerNameValue[1];
    newSugar += producer.sps*producer.owned;
  });
  game.collectableSugar += newSugar;
  game.sps = newSugar;

  setTimeout(sugar.sugarGenerationLoop,game.productionSpeed)
}

render.renderFunctions.push(sugar.updateSugarCount);


sugar.collectSugar = () => {
  if (removeExtraDecimals(game.collectableSugar,0) > 0) showNotification("You collected " + removeExtraDecimals(game.collectableSugar,0) + " sugar!", 1000); 

  game.sugar += game.collectableSugar;
  game.collectableSugar = 0;
  sugar.updateSugarCount();
}

sugar.startSugarGeneration();
