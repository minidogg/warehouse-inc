// This script should NEVER include any utils related to the game itself.
// Instead this should be used for general utils like the one below.
function colorLog(text,color="lime",fontSize="15px"){
    console.log("%c "+text, `
        color:${color};
        font-size:${fontSize};
    `);
}

document.body.scrollTop = document.body.scrollHeight;

const genRanHex = size => [...Array(size)].map(() => Math.floor(Math.random() * 16).toString(16)).join('');

showNotification = (message) => {
  const notificationElement = document.getElementById("notification");
  notificationElement.textContent = message;
  notificationElement.classList.add("notification-show");

  setTimeout(() => {
    notificationElement.classList.remove("notification-show");
  }, 3000); // Adjust the duration here (in milliseconds)
}


document.querySelector("#popup").style.display = "none"

showPopup = (title,html,callback)=>{
    document.querySelector("#popup").style.display = "block"
    document.querySelector("#popupHeader").textContent = title
    document.querySelector("#popupHtml").innerHTML = ""
    document.querySelector("#popupHtml").appendChild(html)

    var listener = document.body.querySelector("#popupSubmit").onclick = (ev)=>{
        callback(ev)
        document.querySelector("#popup").style.display = "none"
    }

}
let testEl = document.createElement("h1")
testEl.innerHTML = "Hello!"
showPopup("This is a title",testEl,()=>{
    console.log("Popup submitted :D")
})