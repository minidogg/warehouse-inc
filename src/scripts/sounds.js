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
    'ConceptualFruit.mp3',
    'IndustryLeader.mp3',
    'DaysAhead.mp3',
    'ForshadowingCookies.mp3',
    'WorkAgain.mp3',
    'Dreams.mp3'
];
music.randomMusic = ()=>music.bgMusic[Math.floor(Math.random() * music.bgMusic.length)]
music.toSound = (music)=>new Audio(`./sfx/music/${music}`);
music.current = "abc"
music.currentAudio = new Audio()

addProperty(game.settings,"musicVolume",25)
addProperty(game.settingsMd,"musicVolume",{type:"slider",min:0,max:100})

addProperty(game.settings,"soundVolume",15)
addProperty(game.settingsMd,"soundVolume",{type:"slider",min:0,max:100})

music.startMusicListener = window.addEventListener("mousedown",()=>{
    window.removeEventListener("mousedown",music.startMusicListener)
    if(music.current=="abc")music.musicLoop()
})
music.musicLoop=()=>{
    music.current = music.randomMusic()
    
    document.getElementById("songName").textContent = camelCaseToWords(music.current).replace(/(\.).+/g,"")

    music.currentAudio = undefined
    music.currentAudio = music.toSound(music.current)

    music.currentAudio.volume = parseFloat(game.settings.musicVolume/100)

    music.currentAudio.play()
    music.currentAudio.addEventListener("ended",()=>{
        console.log("Music ended!")
        music.musicLoop()
    })
}
setInterval(()=>{
    music.currentAudio.volume = parseFloat(game.settings.musicVolume/100)
})

music.soundFiles = [
    '/Collect/SugarAsian.mp3',
    '/Collect/SugerHighPitched.mp3',
    '/Collect/AnoyingSugar.mp3',
    '/Collect/AnoyingSugar.mp3',
    '/Collect/InvertedSugar.mp3',
    '/Collect/Meep.mp3',
    '/Collect/DiabetteiseSuger.mp3',
    '/Collect/AsianBetter.mp3',
    '/Collect/AsianBetter.mp3',
    '/Collect/Moogar.mp3',
    '/Collect/SugarYourCollect.mp3',
    '/Collect/SugarYourCollect.mp3',
  ];

deepBelow.add("collectSound",()=>{
      const randomSound = music.soundFiles[Math.floor(Math.random() * music.soundFiles.length)];
  
      const audio = new Audio(`./sfx/${randomSound}`);
      audio.volume = game.settings.soundVolume/100
  
      audio.play();
})