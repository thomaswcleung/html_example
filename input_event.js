const itemInput = document.getElementById("item-input");
const priorityInput = document.getElementById("priority-input");
const checkboxInput = document.getElementById("checkbox");
const heading = document.querySelector("h1");

function onInput(e) {
    heading.textContent = e.target.value;
}
itemInput.addEventListener("input", onInput);

function onChecked(e) {
    const isChecked = e.target.checked;
    heading.textContent = isChecked ? "Checked" : "Unchecked";
}
checkboxInput.addEventListener("input", onChecked);

function onFocus(e) {
    console.log("Input is focused");
    itemInput.style.outlineStyle = "Solid";
    itemInput.style.outlineColor = "red";
    itemInput.style.outlineWidth = "3px";
}
itemInput.addEventListener("focus", onFocus);

function onBlur(e) {
    console.log("Input is NOT focused");
    itemInput.style.outlineStyle = "none";
}
itemInput.addEventListener("blur", onBlur);

priorityInput.addEventListener("change", onInput);