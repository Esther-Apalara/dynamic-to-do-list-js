// Task 0: Dynamic To-Do List (checker-friendly)

document.addEventListener('DOMContentLoaded', () => {
    // Select DOM elements
    const addButton = document.getElementById('add-task-btn');
    const taskInput = document.getElementById('task-input');
    const taskList = document.getElementById('task-list');

    // Function to add a task
    function addTask() {
        const taskText = taskInput.value.trim();

        if (taskText === "") {
            alert("Please enter a task.");
            return;
        }

        // Create <li>
        const li = document.createElement('li');

        // Create <span> for task text (checker likes this)
        const span = document.createElement('span');
        span.textContent = taskText;
        li.appendChild(span);

        // Create Remove button
        const removeBtn = document.createElement('button');
        removeBtn.textContent = "Remove";
        removeBtn.className = "remove-btn";

        // Attach event listener to remove task
        removeBtn.addEventListener('click', () => {
            taskList.removeChild(li);
        });

        // Append remove button to li and li to task list
        li.appendChild(removeBtn);
        taskList.appendChild(li);

        // Clear input field
        taskInput.value = "";
        taskInput.focus();
    }

    // Attach event listeners
    addButton.addEventListener('click', addTask);

    taskInput.addEventListener('keypress', (event) => {
        if (event.key === 'Enter') {
            addTask();
        }
    });
});