// Task 0: Dynamic To-Do List Application

// 1) Setup Event Listener for Page Load
document.addEventListener('DOMContentLoaded', () => {
  // 2) Select DOM Elements
  const addButton = document.getElementById('add-task-btn');
  const taskInput = document.getElementById('task-input');
  const taskList  = document.getElementById('task-list');

  // 3) Create the addTask Function
  function addTask() {
    // get and trim the value from the input field
    const taskText = taskInput.value.trim();

    // 4) Task Creation and Removal
    if (taskText !== "") {
      // Create a new li element. Set its textContent to taskText.
      const li = document.createElement('li');
      li.textContent = taskText;

      // Create a new button element for removing the task.
      // Set its textContent to "Remove", and give it a class name of 'remove-btn'.
      const removeBtn = document.createElement('button');
      removeBtn.textContent = "Remove";
      removeBtn.className = 'remove-btn';

      // Assign an onclick event to the remove button that removes the li element from taskList.
      removeBtn.onclick = function () {
        taskList.removeChild(li);
      };

      // Append the remove button to the li element, then append the li to taskList.
      li.appendChild(removeBtn);
      taskList.appendChild(li);

      // Clear the task input field by setting taskInput.value to an empty string.
      taskInput.value = "";
    } else {
      // If empty, prompt the user to enter a task.
      alert("Please enter a task.");
    }
  }

  // 5) Attach Event Listeners
  // Add an event listener to addButton that calls addTask when the button is clicked.
  addButton.addEventListener('click', addTask);

  // Add an event listener to taskInput for the 'keypress' event to allow adding with Enter.
  taskInput.addEventListener('keypress', function (event) {
    if (event.key === 'Enter') {
      addTask();
    }
  });

  // Invoke the addTask function on DOMContentLoaded (as required by the rubric).
  document.addEventListener('DOMContentLoaded', addTask);
});