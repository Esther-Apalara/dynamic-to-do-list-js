// Task 0: Dynamic To-Do List Application
document.addEventListener('DOMContentLoaded', () => {
    // 1. Select DOM elements
    const addButton = document.getElementById('add-task-btn');
    const taskInput = document.getElementById('task-input');
    const taskList = document.getElementById('task-list');

    // 2. Function to add a task
    function addTask() {
        const taskText = taskInput.value.trim();

        // Check for empty input
        if (taskText === "") {
            alert("Please enter a task.");
            return;
        }

        // Create li element
        const li = document.createElement('li');
        li.appendChild(document.createTextNode(taskText));

        // Create Remove button
        const removeBtn = document.createElement('button');
        removeBtn.textContent = "Remove";
        removeBtn.className = "remove-btn";

        // Remove task when clicked
        removeBtn.onclick = function () {
            taskList.removeChild(li);
        };

        // Add button to li, then li to list
        li.appendChild(removeBtn);
        taskList.appendChild(li);

        // Clear and refocus input
        taskInput.value = "";
        taskInput.focus();
    }

    // 3. Event listeners
    addButton.addEventListener('click', addTask);

    taskInput.addEventListener('keypress', function (event) {
        if (event.key === 'Enter') {
            addTask();
        }
    });
});