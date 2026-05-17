

const btn = document.querySelector("button"); 
const ul = document.querySelector("ul");
const input = document.querySelector("#taskInput");


function createTask(taskText) {
    const li = document.createElement("li");
    li.textContent = taskText;

    const delBtn = document.createElement("button");
    delBtn.textContent = "Delete";
    delBtn.classList.add("delete");

    li.appendChild(delBtn);
    return li;
}


btn.addEventListener("click", () => {
    const task = input.value.trim();

    if (task !== "") {
        const taskItem = createTask(task);
        ul.appendChild(taskItem);
        input.value = ""; 
    } else {
        alert("Please enter a task!");
    }
});


ul.addEventListener("click", (event) => {
    if (event.target.classList.contains("delete")) {
        const listItem = event.target.closest("li");
        listItem?.remove(); 
        console.log("Deleted");
    } else {
        console.log("List item clicked");
    }
});
