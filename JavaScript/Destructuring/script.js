let a=["susmitha" ,2,3,4,5,[20,2001,201]]
let [A,B,C]=a
console.log(a[0])
console.log(a[1])
console.log(a[2])
console.log(A,B,C)

let obj={name:"susmitha",location:"Tripu",details:{}}
console.log(obj.name)
console.log(obj.name)

let M= obj.name
console.log(M)
console.log(M)

//itterators and generators

for(i in a){
console.log(i)
}

//current value and done state

let num=[1,2,3]

let k = num[Symbol.iterator]();

console.log(k.next())
console.log(k.next())
console.log(k.next())
console.log(k.next())

//generators

function* hai(){
yield "hello"
yield "bye"
yield "done"
}

let n=hai()
console.log(n.next())
console.log(n.next())
console.log(n.next())
console.log(n.next())

