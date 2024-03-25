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
    const cookies = document.cookie.split(';');
    for (const cookie of cookies) {
        const [cookieKey, cookieValue] = cookie.split('=');
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
    return function(...args) {
        clearTimeout(timeoutId);
        timeoutId = setTimeout(() => {
            func.apply(this, args);
        }, delay);
    };
}

// Throttle go brrrrr
function throttle(func, limit) {
    let inThrottle;
    return function(...args) {
        const context = this;
        if (!inThrottle) {
            func.apply(context, args);
            inThrottle = true;
            setTimeout(() => inThrottle = false, limit);
        }
    };
}
