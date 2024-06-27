document.addEventListener('DOMContentLoaded', () => {
    const input = document.querySelector("#input");
    const button = document.querySelector("button");
    const taskList = document.querySelector("ul.list");

    const inputHandler = function() {
        const newTask = input.value.trim();
        if (newTask.length === 0) return;

        const taskElem = document.createElement("li");
        taskElem.innerText = newTask;
        taskList.appendChild(taskElem);
        input.value = "";
    }

    button.addEventListener("click", inputHandler);
});
