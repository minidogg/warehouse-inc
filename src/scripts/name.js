// generates a random name for your warehouse :3
function randomName(overwrite=false) {
  const nameAdjs = ['Tired', 'High', 'Hungry', 'Agitated', 'Excited', 'Grumpy', 'Sleepy', 'Angry', 'Bored', 'Thirsty', 'Extremely High', 'Illegal', 'Scamming', 'Scammed', 'Screaming', 'Drug Promoting', 'Your Friendly',"Sugar Smuggling"];
  const nameNouns = ['Cartel Leader', 'Addict', 'Mafia Boss', 'Discord Moderator', 'Internet Troll', 'Slacker', 'Loser', 'Scammer', 'Karen', 'Drug Lord', 'Mother', 'Minor', 'Crack Addict',"Mafia"];
  const creatorNameAdjs = ['Unlucky', 'Code', 'Shadow', 'Really Bad'];
  const creatorNameNouns = ['Crafter', 'Mob', 'Dev'];


  var name = 'this shouldn\'t be your name and if it does then something probably went wrong';
  if (Math.random() > 0.075) {
    name = nameAdjs[Math.floor(Math.random() * nameAdjs.length)] + ' ' + nameNouns[Math.floor(Math.random() * nameNouns.length)]
  } else {
    let mode = Math.floor(Math.random() * 3);
    if (mode == 0) {
      name = creatorNameAdjs[Math.floor(Math.random() * creatorNameAdjs.length)] + ' ' + nameNouns[Math.floor(Math.random() * nameNouns.length)]
    } else if (mode == 1) {
      name = nameAdjs[Math.floor(Math.random() * nameAdjs.length)] + ' ' + creatorNameNouns[Math.floor(Math.random() * creatorNameNouns.length)]
    } else if (mode == 2) {
      name = creatorNameAdjs[Math.floor(Math.random() * creatorNameAdjs.length)] + ' ' + creatorNameNouns[Math.floor(Math.random() * creatorNameNouns.length)]
    }
  }

  if (overwrite) removeProperty(game, "name");
  addProperty(game, "name", name);
  addProperty(game, "goldenName", goldenNames.includes(name));


  saving.save()
}
render.renderFunctions.push(() => {
  document.getElementById('companyName').textContent = game.name + "'s Warehouse"

  if(game.goldenName==true)document.getElementById('companyName').style.color = "gold"
})

// todo: update this to an actual prompt
document.getElementById('companyName').onclick = () => {
  const name = prompt("Name? (leave blank to generate a new random name)");
  if (!name) {
    randomName(true);
  } else {
    game.name = name;
  }
  render.render();
}


randomName()
