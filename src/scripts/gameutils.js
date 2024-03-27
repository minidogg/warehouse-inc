function showNotification(message, duration=1000) {
    console.log('Showing notification:', message);

    var notificationContainer = document.querySelector('.notification-container');
    var notification = document.createElement('div');
    notification.className = 'notification';
    notification.textContent = message;
    notificationContainer.appendChild(notification);

    setTimeout(function() {
        notification.style.opacity = 1;
        setTimeout(function() {
        notification.style.opacity = 0;
        setTimeout(function() {
            notificationContainer.removeChild(notification);
            console.log('Notification removed:', message);
        }, 500);
        }, duration);
    }, 100);
}

//use this function to add new properties to something in the game object. (Make sure to specify the game object)
function addProperty(obj,property,value,overwrite=false){
    if(!obj.hasOwnProperty(property)||overwrite)obj[property]=value
}
function removeProperty(obj, property){
    if(obj.hasOwnProperty(property))delete obj[property]
}