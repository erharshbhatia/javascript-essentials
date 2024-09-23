// Throttling is a technique used to limit the rate at which a function is called. 
// Throttling transforms a function such that it can only be called once in a specific interval of time.

// 1. Call the function immediately the first time.

// 2. After each call, prevent the function from being called again for a certain time period.

// 3. Once that time period has passed, the function can be called again.


function throttle(func, delay) {
    let timeout;

    // return throttled function
    return (...args) => {
        if (!timeout) {
            func(...args);
            timeout = setTimeout(() => {
                timeout=null
            }, delay)
        }
    }
}

let counter = 0;

const func = (inputText) => {
  // calls an API and gets Data
  console.log("Fetching Data for .."+'  '+inputText, counter++);
}

let doThrottle = throttle(func, 1000)