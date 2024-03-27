addProperty(game, "sugar", 0);
addProperty(game, "collectableSugar", 0);
addProperty(game, "multiplier", 1); 
addProperty(game, "productionSpeed", 1000);
addProperty(game, "producers",{});

loadShopItems();

var sugar = {};

sugar.updateSugarCount = () => {
    q("#uncollectedCount").textContent = removeExtraDecimals(game.collectableSugar,0);
    q("#totalCount").textContent       = removeExtraDecimals(game.sugar,0);
    q("#spsCount").textContent         = removeExtraDecimals(game.sps, 0);
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
    if (removeExtraDecimals(game.collectableSugar,0) > 0) 
        showNotification(`You collected ${removeExtraDecimals(game.collectableSugar,0)} sugar!`); 

    game.sugar += game.collectableSugar;
    game.collectableSugar = 0;
    sugar.updateSugarCount();
}

sugar.sugarGenerationLoop();
