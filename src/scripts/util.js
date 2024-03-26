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


document.querySelector("#popup").classList.add("popupClose")

showPopup = (title,html,callback)=>{
    document.querySelector("#popup").classList.remove("popupClose")
    document.querySelector("#popupHeader").textContent = title
    document.querySelector("#popupHtml").innerHTML = ""
    document.querySelector("#popupHtml").appendChild(html)

    let thisCallback = (ev)=>{
        callback(ev)
        document.querySelector("#popup").classList.add("popupClose")
    }

    document.body.querySelector("#popupSubmit").onclick = thisCallback
    document.querySelector("#popup").onkeydown = (ev)=>{

        if(ev.key=="Enter"){
            thisCallback()
        }

    }
}
showPrompt = async (title,placeholder="",maxLen=-1)=>{
    return await new Promise((resolve, reject) => {
        let input = document.createElement("input")
        input.type = "text"
        input.placeholder = placeholder
        input.maxLength = maxLen
        input.style.width = "93%"

        showPopup(title,input,()=>{
            resolve(input.value)
        })
    })
}
