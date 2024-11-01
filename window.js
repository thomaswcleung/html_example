// on page load
// window.onload = function () {
//     document.querySelector("h1").textContent = "Hello World";
//     console.log("window loaded");
// };

window.addEventListener("load", function () {
    console.log("page loaded");
});

window.addEventListener("DOMContentLoaded", function () {
    console.log("DOM loaded");
});

console.log("Hello World");

// resize
window.addEventListener("resize", function () {
    document.querySelector("h1").textContent = `Resized to ${window.innerWidth} x ${window.innerHeight}`;
});

// scroll
window.addEventListener("scroll", function () {
    console.log(`Scrolled to ${window.scrollX} * ${window.scrollY}`);
    if (this.window.scrollY > 50) {
        this.document.querySelector("h1").style.backgroundColor = "red";
    }
});

// focus & blur
window.addEventListener("focus", function () {
    document.querySelectorAll("p").forEach((p) => (p.style.color = "red"));
});
window.addEventListener("blur", function () {
    document.querySelectorAll("p").forEach((p) => (p.style.color = "black"));
});
