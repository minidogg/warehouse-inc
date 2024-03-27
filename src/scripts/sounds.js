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

var bgMusic = [
    '/music/ConceptualFruit.mp3',
    '/music/ThemeBGheavy.mp3'
];

const randomMusic = bgMusic[Math.floor(Math.random() * bgMusic.length)];

var finalMusic = new Audio(`./sfx/${randomMusic}`);

document.addEventListener("DOMContentLoaded", function() {
    finalMusic.play();
});
