// generates a random name for your warehouse :3
var goldenNames = ["Sugar Smuggling Minor", "Unlucky Crafter", "Code Mob", "Shadow Dev", "Really Bad Dev", "Abstract Melon", "Really Bad Drug Lord", "Macky Water", "Warehouse Owning Warehouse Owner", "Enslaved Minor"];
async function randomName(overwrite=false) {
    const nameAdjs = ['Tired', 'High', 'Hungry', 'Agitated', 'Excited', 'Grumpy', 'Sleepy', 'Angry', 'Bored', 'Thirsty', 'Extremely High', 'Illegal', 'Scamming', 'Scammed', 'Screaming', 'Drug Promoting', 'Your Friendly',"Sugar Smuggling", "Enslaved", "Warehouse Owning"];
    const nameNouns = ['Cartel Leader', 'Addict', 'Mafia Boss', 'Discord Moderator', 'Internet Troll', 'Slacker', 'Loser', 'Scammer', 'Karen', 'Drug Lord', 'Mother', 'Minor', 'Crack Addict',"Mafia", "Warehouse Owner"];
    const creatorNameAdjs = ['Unlucky', 'Code', 'Shadow', 'Really Bad', 'Abstract', 'Macky'];
    const creatorNameNouns = ['Crafter', 'Mob', 'Dev', 'Melon', 'Water'];


    var name = "this shouldn't be your name and if it does then something probably went wrong";
    if (Math.random() > 0.125) {
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
    
    addProperty(game, "name", name, overwrite);
    addProperty(game, "goldenName", goldenNames.includes(name), overwrite);


    saving.save()
}
render.renderFunctions.push(() => {
    document.getElementById('companyName').textContent = game.name + "'s Warehouse"

    document.getElementById('companyName').style.color = game.goldenName==true?"gold":""
})

document.getElementById('companyName').onclick = async () => {
    const name = await showPrompt("Warehouse Name","Warehouse name here...",100);
    if (!name) {
        randomName(true);
    } else {
        game.name = name;
        game.goldenName = false;
    }

    render.render();
}


randomName();
