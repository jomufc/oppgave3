// Oppgave 1
let removeBtn = document.getElementById("remove-btn");
let remove = document.getElementById("remove");

removeBtn.addEventListener("click", function () {
    remove.innerHTML = "";
});

// Oppgave 2
let changeBtn = document.getElementById("change-btn");
let change = document.getElementById("change");

changeBtn.addEventListener("click", function () {
    change.innerHTML = "Nå har jeg trykket på knappen, og jaggu ble teksten endret!";
});

// Oppgave 3
let inputText = document.getElementById("input-text");
let input = document.getElementById("input");

input.addEventListener("change", function () {
    inputText.innerHTML = input.value;
});

// Oppgave 4
let writeBtn = document.getElementById("write-list");
let ul = document.getElementById("ul");

const myList = ["item one", "item two", "item three"];

writeBtn.addEventListener("click", function () {
    for (let index = 0; index < myList.length; index++) {
        let li = document.createElement("li");
        li.innerText = myList[index];
        ul.appendChild(li);
    }
});

// Oppgave 5
let placeholder = document.getElementById("placeholder");
let select = document.getElementById("select");
let text = document.getElementById("text");
let create = document.getElementById("create");

create.addEventListener("click", function () {
    let elementToCreate = document.createElement(select.value);
    elementToCreate.innerText = text.value;
    placeholder.appendChild(elementToCreate);
});

// Oppgave 6
let list = document.getElementById("list");
let removeLi = document.getElementById("remove-li");

removeLi.addEventListener("click", function () {
    list.firstChild.remove();
});

// Oppgave 7
let name = document.getElementById("name");

name.addEventListener("change", function () {
    if (name.value.length > 4) {
        name.style.borderColor = "red";
    } else {
        name.style.borderColor = "green";
    }
});

// Oppgave 8 
const liElement = document.querySelectorAll(".children li");
const btn = document.getElementById("color");

function giveColor() {

    for (let i = 0; i < liElement.length; i++) {
        if (i % 2 === 0) {
            liElement[i].style = "border: 10px solid pink";
        }
        else {
            liElement[i].style = "border: 10px solid green";
        }

    };
};

btn.addEventListener("click", giveColor);