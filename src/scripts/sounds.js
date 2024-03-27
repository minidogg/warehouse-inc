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

const bgMusic = new Audio('./src/sfx/music/FastMenuLiteHeavy.mp3');

document.addEventListener("DOMContentLoaded", function() {
    bgMusic.loop = true;
    bgMusic.play();
});