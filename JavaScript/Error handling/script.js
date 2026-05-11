try {
  let data = JSON.parse('invalid json');
} catch (error) {
  console.log("Error occurred:", error.message);
} finally {
  console.log("Done");
}
 
// out put methods

console.log("Hello")

// alert("Hello user!")

document.write("welcome back user")

//prompt

//let data=prompt("Enter your name:")
//console.log(data)

let d=document.getElementById("hi")
let d1=document.getElementById("h2")
console.log(d1)
console.log(d)

//browser object model

console.log(screen.width)
console.log(screen.height)

console.log(navigator.userAgent)


//let data=prompt("Enter a value:")
//let m = parseInt(data)

//console.log(typeof(m))

//let k=m.toString()
//console.log(typeof(k))

//parsefloat decimal values

let f=10.132413242
console.log(f)
console.log(f.toFixed(1))