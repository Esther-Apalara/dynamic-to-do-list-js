// Task 0: Dynamic To-Do List Application

// 1) Setup Event Listener for Page Load
document.addEventListener('DOMContentLoaded', () => {
  // 2) Select DOM Elements
  const addButton = document.getElementById('add-task-btn');
  const taskInput = document.getElementById('task-input');
  const taskList  = document.getElementById('task-list');

  // 3) Create the addTask Function
  function addTask() {
    const taskText = taskInput.value.trim();

    if (taskText !== "") {
      // Create a new li element for the task
      const li = document.createElement('li');
      li.textContent = taskText;

      // Create a remove button for the task
      const removeBtn = document.createElement('button');
      removeBtn.textContent = "Remove";
      removeBtn.classList.add('remove-btn'); // <-- Corrected

      // Remove the task when remove button is clicked
      removeBtn.onclick = () => {
        taskList.removeChild(li);
      };

      // Append remove button to li, then li to taskList
      li.appendChild(removeBtn);
      taskList.appendChild(li);

      // Clear the input field
      taskInput.value = "";
    } else {
      alert("Please enter a task.");
    }
  }

  // 4) Attach Event Listeners
  addButton.addEventListener('click', addTask);

  taskInput.addEventListener('keypress', (event) => {
    if (event.key === 'Enter') {
      addTask();
    }
  });
});