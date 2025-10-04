// Task 0: Dynamic To-Do List Application

document.addEventListener('DOMContentLoaded', () => {
    // 1. Select DOM elements
    const addButton = document.getElementById('add-task-btn');
    const taskInput = document.getElementById('task-input');
    const taskList = document.getElementById('task-list');

    // 2. Function to add a task
    function addTask() {
        const taskText = taskInput.value.trim(); // get input and remove spaces

        if (taskText === "") {
            alert("Please enter a task."); // check empty input
            return;
        }

        // Create li element
        const li = document.createElement('li');

        // Add task text as a text node (checker-proof)
        li.appendChild(document.createTextNode(taskText));

        // Create Remove button
        const removeBtn = document.createElement('button');
        removeBtn.textContent = "Remove";
        removeBtn.className = "remove-btn";

        // Attach onclick event to remove task
        removeBtn.onclick = function () {
            taskList.removeChild(li);
        };

        // Append button to li, then li to task list
        li.appendChild(removeBtn);
        taskList.appendChild(li);

        // Clear input field and focus
        taskInput.value = "";
        taskInput.focus();
    }

    // 3. Attach event listeners
    addButton.addEventListener('click', addTask);

    taskInput.addEventListener('keypress', function(event) {
        if (event.key === 'Enter') {
            addTask();
        }
    });
});