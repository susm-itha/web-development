// function Declaration : functionname() {}
// function expression : const x = function() {}
// annomous : function (){}
// arrow function : const x = () => {}
// var or let or const

function sayHi() 
{
  return "Hi";
}
let greeting = sayHi();
console.log(greeting);
 
 
//multiply two numbers
function multiply(a, b) 
{
  return a * b;
}
 console.log("The result is " + multiply(20, 20));

//function can be used many times
function add(s, u) 
{
  return s + u;
}
 let sum1 = add(20, 20);
let sum2 = add(60, 70);
console.log("The results are " + sum1 + " and " + sum2);
 
//Using Return Value
function Hello() 
{
  return "Susmitha";
}
 console.log(Hello());




