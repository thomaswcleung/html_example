const clearBtn = document.querySelector("#clear");
// Case 1 : Old style to add event to a button
// clearBtn.onClick = () => {
//     alert("Clear All");
// };


// Case 2 : add event listener to a button
clearBtn.addEventListener("click", () => {
    alert("clear all");
});

clearBtn.addEventListener("click", () => {
    console.log("clear all");
});

// Case 3 : Use callback function name
function onClear() {
    const itemList = document.querySelector("ul");
    while (itemList.firstChild) {
        itemList.removeChild(itemList.firstChild);
    }
}
clearBtn.addEventListener("click", onClear);

// Case 4 : event listener with web API
// setTimeout(() => clearBtn.addEventListener("click", onClear), 5000);
// setTimeout(() => clearBtn.removeEventListener("click", onClear), 5000);
