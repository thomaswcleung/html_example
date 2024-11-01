const form = document.getElementById("item-form");

// Case 1 - simple form submit
function onSubmit(e) {
    e.preventDefaults();
    const item = document.getElementById("item-input").value;
    const priority = document.getElementsById("priority-input").value;

    if (item === "" || priority === 0) {
        alert("Please fill out the form");
        return;
    }
    console.log(item, priority);
}
form.addEventListener("submit", onSubmit);

// Case using formdata object
function onSubmit2(e) {
    e.preventDefaults();
    const formData = new FormData(form);
    const item = formData.get("item");
    const priority = formData.get("priority");
    console.log(item, priority);
    const entries = formData.entries();
    console.log(entries);
    for (let entry of entries) {
        console.log(entry[1]);
    }
}
form.addEventListener("submit", onSubmit2);
