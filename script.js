
document.querySelector("#addTask").addEventListener("click", () => {
    const todoInput = document.querySelector("#todoInput").value;
    if (todoInput !== "") {
        const todoArea = document.querySelector("#todoArea");
        const taskDiv = document.createElement('div');


        const markButton = document.createElement('button');
        markButton.className = "btn btn-light markButton";
        markButton.textContent = "✔";
        taskDiv.appendChild(markButton);


        const taskText = document.createElement('span');
        taskText.textContent = todoInput;
        taskDiv.appendChild(taskText);


        const deleteButton = document.createElement('button');
        deleteButton.className = "btn btn-danger deleteTask";
        deleteButton.textContent = "❌";
        taskDiv.appendChild(deleteButton);


        const hr = document.createElement('hr');
        taskDiv.appendChild(hr);


        todoArea.appendChild(taskDiv);


        document.querySelector("#todoInput").value = "";
    } else {
        alert("Field cannot be empty!");
    }


    const markButtons = document.querySelectorAll(".markButton");
    markButtons.forEach((markButton) => {
        markButton.addEventListener("click", (e) => {
            e.target.nextElementSibling.style.textDecoration = "line-through";
            e.target.remove();
        });
    });

    const deleteTasks = document.querySelectorAll(".deleteTask");
    deleteTasks.forEach((deleteTask) => {
        deleteTask.addEventListener("click", (e) => {
            e.target.parentElement.remove();
        });
    });
});


