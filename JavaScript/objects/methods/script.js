//object methods
let Details = {
  firstName: "Samudrala",
  lastName: "susmitha",
  sayHello: function() 
  {
    console.log("This is susmitha!");
  }
};
Details.sayHello();

//objects Display
let userdetails = { name: "susmitha", age: 25, job: "ASE" };
console.log(Details);
console.table(Details);

// objects constructors
function User(name, age, role) {
  this.name = name;
  this.age = age;
  this.role = role;
  
  // You can even add a method inside
  this.sayHello = function() {
    console.log("Hi, I'm " + this.name);
  };
}