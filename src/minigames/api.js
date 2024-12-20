// ! Do not ever, ever, modify the game object DIRECTLY without requesting the game object.

let api = {};
api.onReady = [];
let game = {};

//listener stuff
window.addEventListener("message", (e) => {
  // if(e.data.type=="game"){
  //     game=e.data.data.game
  //     return
  // }
  if (e.data.type == "ready") {
    api.onReady.forEach((e) => {
      e();
    });
    return;
  }
});

api.post = (type, data) => {
  window.top.postMessage({ type: type, data: data }, "*");
};

api.request = {};
api.request.game = async () => {
  return await new Promise(async (resolve, reject) => {
    window.top.postMessage({ type: "requestGame", data: {} }, "*");
    let tempListener = window.addEventListener("message", (e) => {
      game = e.data.data.game;
      resolve(game);
    });
    window.removeEventListener("message", tempListener);
  });
};
api.do = {};
api.do.addSugar = (sugar) => {
  api.post("addSugar", { amount: sugar });
};
