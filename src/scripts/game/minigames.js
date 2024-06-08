minigames.open = () => {
  q("#minigames").style.display = "block";
};

minigames.api.listener = window.addEventListener("message", function (e) {
  // console.log(e.data)
  if (typeof minigames.api.types[e.data.type] == "undefined") {
    /*
    console.warn(
      "Invalid message type for minigame API: '" + e.data.type + "'",
    );
    */
    return;
  }
  minigames.api.types[e.data.type](e, e.data.data);
});

// ? Message type functions
minigames.api.types.addSugar = (e, data) => {
  game.sugar += data.amount;
};
minigames.api.types.setGame = (e, data) => {
  game = data.game;
};
minigames.api.types.requestGame = (e, data) => {
  minigames.api.iframe.contentWindow.postMessage(
    { type: "game", data: { game: game } },
    "*",
  );
};

minigames.main = async () => {
  //code for handling the minigame API

  //the rest of the stuff
  colorLog("Hello from the minigames.js!", "lime");

  minigames.minigames = await fetch("./minigames/data.json");
  minigames.minigames = await minigames.minigames.json();

  minigames.minigames.forEach((ee) => {
    let e = ee;
    if (e.dev === true && !isDev()) {
      return;
    }
    let button = document.createElement("button");
    button.textContent = e.name;
    button.style.cssText = "margin:1vmin;";

    button.onclick = async () => {
      let iframe = document.createElement("iframe");
      iframe.style.cssText = `
                width:70vw;
                height:50vh;
                display:block;
                margin:auto;
                background-color:white;

                border:black solid 3vmin;
                border-radius:3vmin;
            `;
      iframe.src = e.file;
      showPopup(e.name, iframe, () => {
        q("#popupHtml").innerHTML = "";
        closePopup();
        return true;
      });
      minigames.api.iframe = iframe;
      iframe.contentWindow.addEventListener("load", () => {
        iframe.contentWindow.postMessage({ type: "ready" }, "*");
        // console.log("sent ready to minigame")
      });
    };

    q("#minigameList").appendChild(button);
  });

  menu.menus.minigames = minigames.open;
  menu.updateMenus();

  minigames.open();
};
minigames.main();
