addProperty(game, "sugar", 0);
addProperty(game, "collectableSugar", 0);
addProperty(game, "multiplier", 1); 
addProperty(game, "productionspeed", 1000)

var sugar = {};

sugar.updateSugarCount = () => {
  document.getElementById("resourceCount").textContent = "Sugar Ready For Collecting: " + formatNumber(game.collectableSugar)
  document.getElementById("realResourceCount").textContent = "Sugar: " + formatNumber(game.sugar)
}

sugar.startSugarGeneration = () => {
  setInterval(() => {
    game.collectableSugar += game.multiplier;
  }, game.productionspeed);
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
