addProperty(game, "resources", 0)

var resources = {}

resources.updateResourceCount = () => {
  document.getElementById("resourceCount").textContent = "Resources: " + FormatNumbers(game.resources);
}

resources.handleClick = () => {
  game.resources++;
  resources.updateResourceCount();
}


document.getElementById("clickButton").addEventListener("mousedown", () => {
  resources.handleClick()
})
render.renderFunctions.push(() => {
  resources.updateResourceCount()
})
