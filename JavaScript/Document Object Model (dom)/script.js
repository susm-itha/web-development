// DOM

// it will attach the document in the form of a tree structure

// Html
// Head (Meta Tag's) , Body header(nav) section(h, ...) footer(....) (content)
// reading dom properties
// selecting dom element
// getElementById()
// getElementBYClassName
// getElementByTagName
// querySelector
// querySelectorAll

console.log(document)
let h1 = document.getElementById("heading")
let h4 = document.getElementById("text")
console.log(h4)
console.log(h1)
let c = document.getElementsByClassName("h1")
console.log(c)

let E = document.getElementsByTagName("h1")
console.log(E)



//Dom traversting
//parentsElement
//children
//firstElementChild
//lastElementChild

let q=document.querySelector(".h1")
console.log(q)

let name=document.getElementById("name")
console.log(name)
let parentElement=name.parentElement
console.log(parentElement)
console.log(parentElement.children)
console.log(parentElement.firstElementChild)
console.log(parentElement.lastElementchild)

//creating a DOM element

let newElement=document.createElement('h1')
newElement.innerText = "8888888888"
console.log(newElement)
parentElement.appendChild(newElement)

//prepend

parentElement.prepend(newElement)

//before
//after

let hello=document.getElementById('name')
console.log(hello)

//btn.onclick = function (){
//alert("Button Clicked")    
//console.log("Button clicked")
//}

//addEvenetlistener

function hi(){
//alert("Button Clicked")
hello.innerText = "Button Clicked"

}
hello.addEventListener("click", hi);