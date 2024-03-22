addProperty(game,"resources",0)

function updateResourceCount() {
    document.getElementById("resourceCount").textContent = "Resources: " + game.resources;
}

function handleClick() {
    game.resources++;
    updateResourceCount();
}

document.getElementById("clickButton").addEventListener("click", handleClick);
