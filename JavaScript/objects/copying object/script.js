//copying of arrays
//normal copy
//deep copy
//shallow copy

//copying of arrays
 let arr=[543,345,20,29,[10,345,2020]]

//normal copy
//let copy =(arr[4][0])
console.log("arr",arr)
arr[0]=10
console.log("copy",arr)

//shallow copy
copy1=[...arr]
copy1[0]=88888
copy1[4][0]=2000
console.log("original",arr)
console.log("copy",copy1)

//deep copy
var copy2=JSON.parse(JSON.stringify(arr))

console.log(copy2)

copy2[4][0]="hello"
console.log(copy2)
console.log(arr)

//for in 

//object.keys
//objects.values
//objects.entities

//objects.keys
let phone = {
  brand: "Iphone",
  model: "13",
  year: 2024
};
let keys = Object.keys(phone);
console.log(keys);

//object.values
let Details = {
  name: "Susmitha",
  age: 25,
  city: "Thripuranthakam"
};
let data = Object.values(Details);
console.log(data); 

//objects.entities
let bikes = {
  Jawa: 300,
  speed: 180,
  model: 42.2
};
let pairs = Object.entries(bikes);
console.log(pairs);

