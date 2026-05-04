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