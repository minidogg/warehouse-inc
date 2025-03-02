export let minigames = {};
minigames.api = {};
minigames.api.types = {};
minigames.api.iframe = document.createElement("iframe");

export let render = {};
render.renderFunctions = [];
render.render = () => {
  render.renderFunctions.forEach((e) => {
    e();
  });
};

await import("./main.js")

render.render();
setInterval(() => {
  game.lastRenderDate = Date.now() // Intended for use in functions related to giving daily rewards.
  render.render();
}, 20);
console.log("Scripts Loaded!");