// This script should NEVER include any utils related to the game itself.
// Instead this should be used for general utils like the one below.
function colorLog(text,color="lime",fontSize="15px"){
    console.log("%c "+text, `
        color:${color};
        font-size:${fontSize};
    `);
}

document.body.scrollTop = document.body.scrollHeight;


sugar.showNotification = (message) => {
  const notificationElement = document.getElementById("notification");
  notificationElement.textContent = message;
  notificationElement.classList.add("notification-show");

  setTimeout(() => {
    notificationElement.classList.remove("notification-show");
  }, 3000); // Adjust the duration here (in milliseconds)
}
