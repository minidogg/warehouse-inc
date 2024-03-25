// generates a random name for your warehouse :3
function randomName() {
    var nameAdjs = ['Tired', 'High', 'Hungry', 'Agitated', 'Excited', 'Grumpy', 'Sleepy', 'Angry', 'Bored'];
    var nameNouns = ['Cartel Leader', 'Addict', 'Mafia Boss', 'Discord Moderator', 'Internet Troll', 'Slacker', 'Loser', 'Scammer','',''];
    addProperty(game,"name",nameAdjs[Math.floor(Math.random()*nameAdjs.length)] + ' ' + nameNouns[Math.floor(Math.random()*nameNouns.length)])
    document.getElementById('name').value = game.name
    saving.save()
}


window.onload = randomName();