/*  window.onload = setInterval(GameLoop, 1000 / 10); //10fps

    let BGAudio = new Audio();

    BGAudio.src = '../sfx/music/FastMenuLiteHeavy.mp3';

    function Gameloop() {
        BGAudio.play();
        if (BGAudio.paused == true) {
            BGAudio.play();
        }
    }
*/

var sounds = {
    click1:new Audio("./sfx/Click/Click-1.mp3")
}

var music = {}

music.bgMusic = [
    '/music/ConceptualFruit.mp3',
    '/music/ThemeBGheavy.mp3'
];
music.randomMusic = ()=>music.bgMusic[Math.floor(Math.random() * music.bgMusic.length)]
music.toSound = (music)=>new Audio(`./sfx/${music}`);
music.current = "abc"
music.currentAudio = new Audio()

addProperty(game.settings,"musicVolume",100)
addProperty(game.settingsMd,"musicVolume",{type:"slider",min:0,max:100})

music.startMusicListener = window.addEventListener("mousedown",()=>{
    window.removeEventListener("mousedown",music.startMusicListener)
    if(music.current=="abc")music.musicLoop()
})
music.musicLoop=()=>{
    music.current = music.randomMusic()
    music.currentAudio = undefined
    music.currentAudio = music.toSound(music.current)
    music.currentAudio.play()
    music.currentAudio.addEventListener("ended",()=>{
        console.log("Music ended!")
        music.musicLoop()
    })
}
setInterval(()=>{
    music.currentAudio.volume = parseFloat(game.settings.musicVolume/100)
})