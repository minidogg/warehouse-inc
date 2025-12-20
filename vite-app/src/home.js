import '../src/stylesheets/index.css'
import { crapMessages } from './database/data/crapmessages';
const firstCrapDate = new Date(2024, 2, 28);
let daysSinceCrapCreation = Math.floor(
    (new Date() - firstCrapDate) / (1000 * 60),
); // et daysSinceCrapCreation = Math.floor((new Date() - firstCrapDate) / (1000 * 3600 * 24));
const crapContents = document.getElementById("crapContents");

crapContents.innerHTML =
crapMessages[daysSinceCrapCreation % crapMessages.length];

function switchTo(site) {
    const bgscroll = document.getElementById("bgscroll");
    const container = document.getElementById("container");

    container.style.transform = "translateY(100vh)";
    bgscroll.style.backgroundPositionX =
        getComputedStyle(bgscroll).backgroundPositionX;
    bgscroll.style.animation = "fadeout 1s";

    container.style.transform = "translateY(100vh)";
    setTimeout(() => {
        window.location.href = site;
    }, 1100);
    }

    const bgMusic = new Audio("/sfx/music/FastMenuLiteHeavy.mp3");

    document.addEventListener("DOMContentLoaded", async function () {
    try {
        bgMusic.loop = true;
        await bgMusic.play();
    } catch {
        document.getElementById("autoplayPopup").style.display = "unset";
    }
});

for(let item_raw of document.querySelectorAll("[data-switch-to]")){
    let item = item_raw
    item.addEventListener("click", ()=>{
        switchTo(item_raw.getAttribute("data-switch-to"))
    })
}