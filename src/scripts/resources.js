addProperty(game, "sugar", 0);

var sugar = {};

sugar.updateSugarCount = () => {
  document.getElementById("resourceCount").textContent = "Sugar Ready For Collecting: " + FormatNumbers(game.sugar);
}

sugar.startSugarGeneration = () => {
  setInterval(() => {
    game.sugar += game.multiplier;
    sugar.updateSugarCount();
  }, 1000);
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
  sugar.showNotification("You collected " + game.resourcesCollected + " sugar!");
}

document.getElementById("clickButton").addEventListener("click", () => {
  sugar.collectSugar();
});

sugar.startSugarGeneration();
