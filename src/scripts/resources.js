addProperty(game, "sugar", 0);
addProperty(game, "collectableSugar", 0);
addProperty(game, "multiplier", 1); 
addProperty(game, "maxPickup", 1); 
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

sugar.sugarPickupCalc = () => {
    var maxPickup = game.maxPickup;
    Object.entries(game.producers).forEach((producerNameValue)=>{
        let producer = producerNameValue[1];
        maxPickup += producer.pickup*producer.owned;
    });

    return maxPickup
}

render.renderFunctions.push(sugar.updateSugarCount);


sugar.collectSugar = () => {
    if (removeExtraDecimals(game.collectableSugar,0) > 0) 
        showNotification(`You collected ${removeExtraDecimals(game.collectableSugar,0)} sugar!`); 

    let collectedSugar = Math.min(game.collectableSugar, sugar.sugarPickupCalc());
    game.sugar += collectedSugar;
    game.collectableSugar -= collectedSugar;
    sugar.updateSugarCount();

    const soundFiles = [
      'SugarAsian.mp3',
      'SugerHighPitched.mp3',
      'AnoyingSugar.mp3',
      'AnoyingSugar.mp3',
      'InvertedSugar.mp3',
      'Meep.mp3',
      'DiabetteiseSuger.mp3',
      'AsianBetter.mp3',
      'AsianBetter.mp3',
      'Moogar.mp3',
      'SugarYourCollect.mp3',
      'SugarYourCollect.mp3',
    ];
    const randomSound = soundFiles[Math.floor(Math.random() * soundFiles.length)];

    const audio = new Audio(`./sfx/${randomSound}`);

    audio.play();
}

sugar.sugarGenerationLoop();
