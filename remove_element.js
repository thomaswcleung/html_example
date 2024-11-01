// Remove Item
function removeClearButton() {
    const clearBtn = document.querySelector("#clear");
    clearBtn.remove();
}

removeClearButton();

// Remove child from parent
function removeFirstItem() {
    const ul = document.querySelector("ul");
    const li = document.querySelector("li:first-child");
    ul.removeChild(li);
}

removeFirstItem();

// Delete item from parent bny index
function removeItem(itemNumber) {
    const ul = document.querySelector("ul");
    const li = document.querySelector(`li:nth-child(${itemNumber})`);
    ul.removeChild(li);
}

removeItem(3);

// Case 2 - Delete item from parent by index
function removeItem2(itemNumber) {
    const ul = document.querySelector("ul");
    const li = document.querySelectorAll("li")[itemNumber - 1];
    ul.removeChild(li);
}

// removeItem2(3);

// Case 3 - Delete item direct by index
function removeItem3(itemNumber) {
    const li = document.querySelectorAll("li");
    li[itemNumber - 1].remove();
}

// removeItem3(3);

// Case 4 - Delete item direct by element
function removeItem4(itemNumber) {
    document.querySelectorAll("li")[itemNumber - 1].remove();
}

removeItem4(3);
