

addProperty(game, "sugar", 0); // Add sugar property to the game object

var sugar = {};

sugar.updateSugarCount = () => {
  document.getElementById("resourceCount").textContent = "Sugar Ready For Collecting: " + FormatNumbers(game.sugar);
}

sugar.startSugarGeneration = () => {
  setInterval(() => {
    game.sugar += game.multiplier; // Increment sugar by multiplier every second
    sugar.updateSugarCount();
  }, 1000); // 1000 milliseconds = 1 second
}

sugar.collectSugar = () => {
  game.resourcesCollected = game.sugar; // Store the sugar waiting to be collected
  game.sugar = 0; // Reset the sugar to 0
  sugar.updateSugarCount();
  alert("You collected " + game.resourcesCollected + " sugar!"); // Inform the user about collected sugar
}

document.getElementById("clickButton").addEventListener("mousedown", () => {
  sugar.collectSugar(); // Change to collectSugar function
});

sugar.startSugarGeneration(); // Start sugar generation
