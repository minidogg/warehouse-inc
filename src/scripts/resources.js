addProperty(game, "sugar", 0);
addProperty(game, "multiplier", 1); 
addProperty(game, "productionspeed", 1000)

var sugar = {};

sugar.updateSugarCount = () => {
  document.getElementById("resourceCount").textContent = "Sugar Ready For Collecting: " + FormatNumbers(game.sugar.toString());
}

sugar.startSugarGeneration = () => {
  setInterval(() => {
    game.sugar += game.multiplier;
  }, game.productionspeed);
}

render.renderFunctions.push(()=>{
sugar.updateSugarCount();
})



sugar.collectSugar = () => {
  game.resourcesCollected = game.sugar;
  game.sugar = 0;
  sugar.updateSugarCount();
  // sugar.showNotification("You collected " + game.resourcesCollected + " sugar!"); this will not be in here melon
}

document.getElementById("clickButton").addEventListener("click", () => {
  sugar.collectSugar();
});

sugar.startSugarGeneration();
