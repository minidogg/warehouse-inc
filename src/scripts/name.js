// generates a random name for your warehouse :3
var goldenNames = ["Sugar Smuggling Minor"]
function randomName(overwrite=false) {
  var nameAdjs = ['Tired', 'High', 'Hungry', 'Agitated', 'Excited', 'Grumpy', 'Sleepy', 'Angry', 'Bored', 'Thirsty', 'Extremely High', 'Illegal', 'Scamming', 'Scammed', 'Screaming', 'Drug Promoting', 'Your Friendly',"Sugar Smuggling"];
  var nameNouns = ['Cartel Leader', 'Addict', 'Mafia Boss', 'Discord Moderator', 'Internet Troll', 'Slacker', 'Loser', 'Scammer', 'Karen', 'Drug Lord', 'Mother', 'Minor', 'Crack Addict',"Mafia"];

  if (overwrite) removeProperty(game, "name");
  addProperty(game, "name", nameAdjs[Math.floor(Math.random() * nameAdjs.length)] + ' ' + nameNouns[Math.floor(Math.random() * nameNouns.length)]);
  addProperty(game, "goldenName",goldenNames.includes(game.name) );


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
