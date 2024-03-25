// generates a random name for your warehouse :3
function randomName() {
  var nameAdjs = ['Tired', 'High', 'Hungry', 'Agitated', 'Excited', 'Grumpy', 'Sleepy', 'Angry', 'Bored', 'Thirsty', 'Extremely High', 'Illegal', 'Scamming', 'Scammed', 'Screaming', 'Drug Promoting'];
  var nameNouns = ['Cartel Leader', 'Addict', 'Mafia Boss', 'Discord Moderator', 'Internet Troll', 'Slacker', 'Loser', 'Scammer', 'Karen', 'Drug Lord', 'Mother', 'Minor', 'Crack Addict'];
  addProperty(game, "name", nameAdjs[Math.floor(Math.random() * nameAdjs.length)] + ' ' + nameNouns[Math.floor(Math.random() * nameNouns.length)])

  saving.save()
}
render.renderFunctions.push(() => {
  document.getElementById('companyName').textContent = game.name + "'s Warehouse"
})

// todo: update this to an actual prompt
document.getElementById('companyName').onclick = () => {
  game.name = prompt("Name?")
  render.render()
}


window.addEventListener("load", randomName)
