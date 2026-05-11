//promise.race()

//let pa=promise.resolve("P1 done")
//let pb=Promise.reject("P2 done")

let pa = new Promise( (resolve,reject)=>{
setTimeout(()=>{
reject("pa is done")
},1000)
})

let pb = new Promise( (resolve,reject)=>{
setTimeout(()=>{
reject("pb is done")
},5000)
})


Promise.race([pa,pb])
.then((vara)=>{
console.log(vara)
})
.catch((pa)=>{
console.log(pa)
})

//Promise.allsettled()

Promise.allSettled([pa, pb])
.then((a)=>{
console.log(a)
})

//Promise.any()

Promise.any([pa, pb])
.then((a) => {
console.log("a");
})
.catch((err) => {
console.log("Any Failure: No one succeeded.", err.errors);
});

//Async and await

let webpage = () => {
return new Promise((resolve) => {
setTimeout(() => {
resolve("susmitha web page is ready!");
}, 2000); 
});
};

async function hello1() {
let result = await webpage(); 
return result;
}
hello1().then((data) => {
console.log(data);
});