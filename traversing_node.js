let output;

const parent = document.querySelector(".items");
console.log(parent);

output = parent.childNodes;
output.forEach(element => {
    console.log(element)
});

output = parent.childNodes[0].textContent;
output = parent.childNodes[3].outerHTML;
output = parent.childNodes[3].outerHTML = "<!-- comment -->";
output = parent.childNodes[3].innerText = "Hello";
// output = parent.childNodes[3].style.color = "red";

output=parent.childNodes[3].nextSibling.nextSibling;
output=parent.childNodes[3].nextSibling.parentNode;

console.log(output);

