// This script should NEVER include any utils related to the game itself.
// Instead this should be used for general utils like the one below.
function colorLog(text, color = "lime", fontSize = "15px", style = "") {
  console.log(
    "%c " + text,
    `
        color:${color};
        font-size:${fontSize};
        ${style}
    `,
  );
}

document.body.scrollTop = document.body.scrollHeight;

const genRanHex = (size) =>
  [...Array(size)]
    .map(() => Math.floor(Math.random() * 16).toString(16))
    .join("");

// showNotification = (message) => {
//   const notificationElement = document.getElementById("notification");
//   notificationElement.textContent = message;
//   notificationElement.classList.add("notification-show");

//   setTimeout(() => {
//     notificationElement.classList.remove("notification-show");
//   }, 3000); // Adjust the duration here (in milliseconds)
// }

document.addEventListener("keypress", (event) => {
  if (event.key === "Enter") document.getElementById("popupSubmit").click();
});

closePopup = () => {
  q("#popup").classList.add("popupClose");
  q("#popupCover").classList.add("popupCoverClose");
};
showPopup = (title, html, callback) => {
  q("#popup").classList.remove("popupClose");
  q("#popupCover").classList.remove("popupCoverClose");
  q("#popupHeader").textContent = title;
  q("#popupHtml").innerHTML = "";
  q("#popupHtml").appendChild(html);

  let thisCallback = (ev) => {
    if (callback(ev) !== true) {
      closePopup();
    }
  };

  q("#popupSubmit").onclick = thisCallback;
  q("#popup").onkeydown = (ev) => {
    if (ev.key == "Enter") {
      thisCallback();
    }
  };
};
showPopupAsync = async (title, html, autoClose = true) => {
  return await new Promise((resolve, reject) => {
    showPopup(title, html, () => {
      resolve(true);

      if (autoClose == true) {
        closePopup();
      }

      return false;
    });
  });
};

showPrompt = async (title, placeholder = "", maxLen = -1) => {
  return await new Promise((resolve, reject) => {
    let input = document.createElement("input");
    input.type = "text";
    input.placeholder = placeholder;
    input.maxLength = maxLen;
    input.style.width = "93%";

    showPopup(title, input, () => {
      resolve(input.value);
    });
  });
};
const removeExtraDecimals = (num, decimal) => {
  return parseFloat(num).toPrecision(
    Math.round(num).toString().length + decimal,
  );
};
function camelCaseToWords(s) {
  const result = s.replace(/([A-Z])/g, " $1");
  return result.charAt(0).toUpperCase() + result.slice(1);
}

function formatDate(date) {
  return new Date(date).toLocaleDateString();
}

// FormatNumbers
function FormatNumbers(number) {
  return number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}

// Get Random
function getRandomInt(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

// Save Cookies
function saveToCookie(key, value) {
  document.cookie = `${key}=${JSON.stringify(value)}; expires=Fri, 31 Dec 9999 23:59:59 GMT; path=/`;
}

// Get da cookies
function getFromCookie(key) {
  const cookies = document.cookie.split(";");
  for (const cookie of cookies) {
    const [cookieKey, cookieValue] = cookie.split("=");
    if (cookieKey.trim() === key) {
      return JSON.parse(cookieValue);
    }
  }
  return null;
}

// Delete za cookies
function deleteCookie(key) {
  document.cookie = `${key}=; expires=Thu, 01 Jan 1970 00:00:00 GMT; path=/`;
}

// is numbery
function isNumeric(value) {
  return !isNaN(parseFloat(value)) && isFinite(value);
}

// idk some stack overflow thing said this is useful sometimes
function debounce(func, delay) {
  let timeoutId;
  return function (...args) {
    clearTimeout(timeoutId);
    timeoutId = setTimeout(() => {
      func.apply(this, args);
    }, delay);
  };
}

// Throttle go brrrrr
function throttle(func, limit) {
  let inThrottle;
  return function (...args) {
    const context = this;
    if (!inThrottle) {
      func.apply(context, args);
      inThrottle = true;
      setTimeout(() => (inThrottle = false), limit);
    }
  };
}

function getCookieCount() {}

function getStoreName() {}

//is dev
function isDev() {
  return (
    /.+:\d+/.test(window.location.host) ||
    /.+\.github\.dev/.test(window.location.host)
  );
}

/*
The deep below util's purpose is to allow the ability to call functions that are deeper down in the script chain.
*/
var deepBelow = { refs: {} };
deepBelow.add = (funcName, func) => {
  deepBelow.refs[funcName] = func;
};
deepBelow.runSync = (funcName, ...args) => {
  try {
    return deepBelow.refs[funcName](...args);
  } catch (err) {
    console.warn(`When attempting to run func: ${funcName}` + err);
  }
};
deepBelow.run = async (funcName, ...args) => {
  try {
    return await deepBelow.refs[funcName](...args);
  } catch (err) {
    console.warn(
      `When attempting to run func: '${funcName}', with args: [${args}], using Deep Below Util, got error: ` +
        err,
    );
  }
};
