let containerList = document.getElementById("container-list");
let input = document.getElementById("input");
let button = document.getElementById("add-btn");

button.addEventListener("click", add);

function add() {

    if (!input.value) {
        return;
    }

    let li = document.createElement("li");
    li.textContent = input.value;
    let removeBtn = document.createElement("button");
    removeBtn.textContent = "Remove";
    removeBtn.classList.add("remove-btn");
    removeBtn.addEventListener("click", deleteBtn);
    li.appendChild(removeBtn);
    containerList.appendChild(li);
}


function deleteBtn(e) {
    let element = e.target.parentElement;
    element.remove();
}