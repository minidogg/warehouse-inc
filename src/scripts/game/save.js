//saving system code will go here
var saving = {};

// Initialize current version as empty
var currentversion = "";

// Function to fetch the current version from the URL
async function fetchCurrentVersion() {
  try {
    const response = await fetch(
      "https://raw.githubusercontent.com/minidogg/warehouse-inc/main/src/database/data/version",
    );
    const data = await response.text();
    currentversion = data;
    console.log(currentversion);
    return data.trim();
  } catch (error) {
    console.error("Error fetching current version:", error);
    return "";
  }
}

saving.save = () => {
  localStorage.setItem("save", btoa(JSON.stringify(game)));
};

async function migrateSave() {
  const newVersion = await fetchCurrentVersion();

  // Check if the new version is different from the current version
  if (newVersion !== currentversion) {
    const userName = game.name;
    const userSugar = game.sugar;
    const userGoldenName = game.goldenName;

    // Update the current version
    currentversion = newVersion;

    // Save the migrated data with the new version
    saving.save();

    console.log("Saved data migrated to version " + newVersion);

    // Restore name and sugar
    game.name = userName;
    game.sugar = userSugar;
    game.goldenName = userGoldenName;

    // Save again with the restored user data
    saving.save();
  }
}

saving.loadSave = () => {
  if (localStorage.getItem("save") == undefined) {
    saving.save();
  }
  try {
    game = JSON.parse(atob(localStorage.getItem("save")));
  } catch (err) {
    saving.resetSave();
    console.warn(err);
  }
};

saving.resetSave = async () => {
  if (
    (
      await showPrompt(
        "Are you sure you want to reset your save and lose all progress? Type 'yes' to confirm",
        "Yes",
        3,
      )
    ).toLowerCase() == "yes"
  ) {
    game.autoSave = false;
    document.getElementById("coverDiv").classList.remove("coverDivAnimate");
    setTimeout(() => {
      localStorage.removeItem("save");
      window.onbeforeunload = () => {};
      window.location.reload(true);
    }, 1000);
  }
};

saving.loadSave();

saving.autoSave = () => {
  console.log("Auto saving");

  if (game.settings.autoSave == true) {
    saving.save();
  } else {
    setTimeout(() => {
      saving.autoSave();
    }, parseInt(game.settings.autoSaveRate));
    return;
  }
  document.querySelector(".save-icon").style.display = "block";
  setTimeout(
    () => (document.querySelector(".save-icon").style.display = "none"),
    500,
  );
  setTimeout(saving.autoSave, parseInt(game.settings.autoSaveRate));
};

addProperty(game.settings, "autoSaveRate", 25000);
addProperty(game.settings, "autoSave", true);
saving.autoSave();

//make funny prompt if try to close
window.onbeforeunload = confirmExit;

function confirmExit() {
  if (isDev()) {
    console.log("On dev; not going to prompt leave.");
  } else {
    if (game.settings.autoSave == false)
      return "Are you sure you want to leave? You have auto-saving disabled.";
    if (game.settings.autoSave == true) {
      saving.save();
      return "Are you sure you want to leave? Your game has been saved.";
    }
  }
}
migrateSave();
