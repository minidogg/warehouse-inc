let resources = 0;

function updateResourceCount() {
    document.getElementById("resourceCount").textContent = "Resources: " + resources;
}

function handleClick() {
    resources++;
    updateResourceCount();
}

document.getElementById("clickButton").addEventListener("click", handleClick);
