const itemInput = document.getElementById("item-input");

// a. simple key press
const onKeyPress = (e) => {
    console.log("key press");
}
itemInput.addEventListener("keypress", onKeyPress);

// b. on key down
const onKeyDown = (e) => {
    console.log("key down");
    console.log(e.key);
    console.log(e.keyCode);
    // check key code
    // if (e.key === "Enter") {
    //     alert("you pressed enter");
    // }
    if (e.keyCode === 13) {
        alert("pressed enter");
    }
    if (e.code === "Digit1") {
        console.log("pressed 1");
    }
    if (e.repeat) {
        console.log("you are holding down " + e.key);
    }

    console.log("Shift " + e.shiftKey);
    console.log("Alt " + e.altKey);
    console.log("Control " + e.ctrlKey);
    if (e.shiftKey && e.key === "K") {
        console.log("You pressed shift and k");
    }
}
itemInput.addEventListener("keydown", onKeyDown);

// c. on key up
const onKeyUp = (e) => {
    console.log("key up");
}
itemInput.addEventListener("keyup", onKeyUp);
