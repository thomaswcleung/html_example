// return : Nodetype (not an Array)
const listItems = document.querySelectorAll(".item");
console.log(listItems[0].innerText);

listItems.forEach((item) => console.log(item.innerText));

listItems[1].style.color = "red";

listItems.forEach((item, index) => {
    console.log(item.innerText);

    switch (index) {
        case 0:
            item.remove();
            break;
        case 1:
            item.remove();
            break;
        case 2:
            item.innerHTML = `Orange
                <button class="remove-item btn-link text-red">
                    <i class="fa-solid fa-xmark"></i>
                </button>`;
            break;
    // if (index === 0) {
    //     item.remove();
    }
});

// return : HTMLCollections (Array)
const listItems2 = document.getElementsByClassName("item");
console.log(listItems2);
console.log(listItems2[1].innerText);

const listItemsArray = Array.from(listItems2);
console.log(listItemsArray);

const listItem3 = document.getElementsByTagName("li");
console.log(listItem3);
console.log(listItem3[1].innerText);
