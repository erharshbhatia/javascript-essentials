// What is Debouncing ? when we are not making api calls for each and every event but delaying by some interval

// 1. Delay the function execution by a certain time, delay.
// 2. Reset the timer if the function is called again.


// Debouncing in Javascript
let counter = 0;
const getData = (inputText) => {
  // calls an API and gets Data
  console.log("Fetching Data for .."+'  '+inputText, counter++);
}

const debounce = (fn, delay, ...initialArgs) => {
  let timeout;
  // remember debounce is called once and then it just returns the function
  // that returned function always invokes the setTimeout and clearTimeout
  
  console.log('called')

  return (...args) => {
    // console.log(args)

    if (timeout)  {
      clearTimeout(timeout);
    }


    // The setTimeout method returns a unique identifier to the timeout, which is held by timeout variable.
    timeout = setTimeout(() => {
      fn(...args)
    }, delay)
  }
}

const betterFunction = debounce(getData, 1000);

// What's a closure in JavaScript?
// In JavaScript, an inner function always has access to the local variables of the outer function. 
// In our case, the inner function has access to timeout that has function level scope in the debounce() method.

// But when the outer function returns this inner function, 
// the inner function still holds a reference to the local variables of the outer function 
// long after the outer function has finished execution. This is the concept of a closure.