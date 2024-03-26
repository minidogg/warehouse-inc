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

// showNotification = (message) => {
//   const notificationElement = document.getElementById("notification");
//   notificationElement.textContent = message;
//   notificationElement.classList.add("notification-show");

//   setTimeout(() => {
//     notificationElement.classList.remove("notification-show");
//   }, 3000); // Adjust the duration here (in milliseconds)
// }


q("#popup").classList.add("popupClose")

showPopup = (title,html,callback)=>{
    q("#popup").classList.remove("popupClose")
    q("#popupHeader").textContent = title
    q("#popupHtml").innerHTML = ""
    q("#popupHtml").appendChild(html)

    let thisCallback = (ev)=>{
        callback(ev)
        q("#popup").classList.add("popupClose")
    }

    q("#popupSubmit").onclick = thisCallback
    q("#popup").onkeydown = (ev)=>{

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
const removeExtraDecimals = (num,decimal)=>{
    return parseFloat(num).toPrecision(Math.round(num).toString().length + decimal);
}
function camelCaseToWords(s) {
    const result = s.replace(/([A-Z])/g, ' $1');
    return result.charAt(0).toUpperCase() + result.slice(1);
}

console.log("Testy commit")
