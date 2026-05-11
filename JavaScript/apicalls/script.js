// API methods

//get --> fetching the data
//post --> to send the data
//put --> It changes the enitre record
//patch --> updates only partial data
//delete --> to delete the data

//https://jsonplaceholder.typicode.com/users
//https://jsonplaceholder.typicode.com/albums
//Fe --> API (get) --> BE (Routes ,middleware, controllers)

let data=[]
fetch("https://jsonplaceholder.typicode.com/users")
.then((data)=>{
    return data.json()
    //console.log(data)
})
.then((d) =>{ 
    data= d;
    console.log(d)})
.catch((e)=>{
    console.log(e)
})

//console.log(data)
