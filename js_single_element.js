// Locate an element
console.log(document.getElementById("app-title"));

// get element's attribute
console.log(document.getElementById("app-title").id);
console.log(document.getElementById("app-title").className);
console.log(document.getElementById("app-title").getAttribute("id"));

// Update element's attribute
document.getElementById("app-title").title = "Shopping List";
// (attribute name, value)
// document.getElementById("app-title").setAttribute("class", "shopping");
appClass = document.getElementById("app-title").getAttribute("class");
appClass += " shopping";
document.getElementById("app-title").setAttribute("class", appClass);

const h1=document.getElementById("app-title");
console.log(h1.textContent);
h1.textContent = "Hello";
h1.innerText = "Hello again";
h1.innerHTML = "<strong>Ski shop</strong>";
h1.style.color = "blue";
h1.style.backgroundColor = "green";
h1.style.padding = "10px";
h1.style.borderRadius = "5px";

// Use CSS selector
console.log(document.querySelector("h1")); // querySelector return only the 1st h1 element.
console.log(document.querySelector("#app-title")); // # is id
console.log(document.querySelector(".container")); // . is the class name
console.log(document.querySelector("input[type='text']")); // attribute
console.log(document.querySelector("li:nth-child(2)").innerText); // pseudo class
console.log(document.querySelector("li:nth-child(2)").textContent); // pseudo class
const secondItem = document.querySelector("li:nth-child(2)");
secondItem.innerText = "Apple Juice";
secondItem.style.color = "red";

const list = document.querySelector("ul");
console.log(list);
const firstItem = list.querySelector("li");
firstItem.style.color = "blue";
