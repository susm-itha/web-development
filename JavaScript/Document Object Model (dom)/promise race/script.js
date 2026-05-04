//promise.race()

//let pa=promise.resolve("P1 done")
//let pb=Promise.reject("P2 done")

let pa = new Promise( (resolve,reject)=>{
setTimerout(()=>{
reject("pa is done")
},1000)
})

let Pb = new Promise( (resolve,reject)=>{
setTimerout(()=>{
reject("pb is done")
},2000)
})


Promise.race([pa,pb])
.then((pa)=>{
console.log(pa)
})
.catch((pa)=>{
console.log(pa)
})