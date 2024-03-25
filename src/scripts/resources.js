addProperty(game, "sugar", 0);
addProperty(game, "multiplier", 1); // Add sugar property to the game object
addProperty(game, "productionspeed", 200)

var sugar = {};

sugar.updateSugarCount = () => {
  document.getElementById("resourceCount").textContent = "Sugar Ready For Collecting: " + FormatNumbers(game.sugar.toString());
}

sugar.startSugarGeneration = () => {
  setInterval(() => {
    game.sugar += game.multiplier;
    sugar.updateSugarCount();
  }, 10);
}

sugar.showNotification = (message) => {
  const notificationElement = document.getElementById("notification");
  notificationElement.textContent = message;
  notificationElement.classList.add("notification-show");

  setTimeout(() => {
    notificationElement.classList.remove("notification-show");
  }, 3000); // Adjust the duration here (in milliseconds)
}

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
