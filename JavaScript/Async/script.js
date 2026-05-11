//Async

console.log("one")

setTimeout(()=>{
console.log("Two")
},0)
setTimeout(()=>{
    console.log("Two 1")
},1000)


// milli seconds 1 s = 100 ms
console.log("Three")
let sum=0
for(i=0;i<10000;i++){
    sum+=i
}

console.log(sum)

//setinterval

let a = setInterval(()=>{
    console.log("Four")
},3000)

//clearInterval
clearInterval(a)

//Throtting Event
function throttle(fn, limit) {
  let lastTime = 0;

  return function () {
    const now = Date.now();
    if (now - lastTime >= limit) {
      fn();
      lastTime = now;
    }
  };
}

window.addEventListener("scroll", throttle(() => {
  console.log("Throttled Scroll");
}, 500));


//Debouncing
function debounce(callback, delay) {
  let timeoutId;

  return function (...args) {
    clearTimeout(timeoutId);

    timeoutId = setTimeout(() => {
      callback.apply(this, args);
    }, delay);
  };
}

const input = document.getElementById("search");

input.addEventListener("keyup", debounce(() => {
  console.log("hello");
}, 500));
