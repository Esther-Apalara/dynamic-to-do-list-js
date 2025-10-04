// Task 1: Dynamic To-Do List with Local Storage

document.addEventListener('DOMContentLoaded', () => {
  const addButton = document.getElementById('add-task-btn');
  const taskInput = document.getElementById('task-input');
  const taskList  = document.getElementById('task-list');

  // 1) Load tasks from Local Storage when page loads
  function loadTasks() {
    const storedTasks = JSON.parse(localStorage.getItem('tasks') || '[]');
    storedTasks.forEach(taskText => addTask(taskText, false)); // false = don't save again
  }

  // 2) Save tasks to Local Storage
  function saveTasks() {
    const tasks = [];
    taskList.querySelectorAll('li').forEach(li => {
      tasks.push(li.firstChild.textContent); // get only the task text
    });
    localStorage.setItem('tasks', JSON.stringify(tasks));
  }

  // 3) Add a task to the DOM and optionally save to Local Storage
  function addTask(taskText = null, save = true) {
    const text = taskText || taskInput.value.trim();

    if (text !== "") {
      // Create li for the task
      const li = document.createElement('li');
      li.textContent = text;

      // Create remove button
      const removeBtn = document.createElement('button');
      removeBtn.textContent = "Remove";
      removeBtn.classList.add('remove-btn');

      // Remove task from DOM and update Local Storage
      removeBtn.onclick = () => {
        taskList.removeChild(li);
        saveTasks();
      };

      li.appendChild(removeBtn);
      taskList.appendChild(li);

      // Clear input field if task came from user input
      if (!taskText) taskInput.value = "";

      // Save new task to Local Storage if required
      if (save) saveTasks();
    } else if (!taskText) {
      alert("Please enter a task.");
    }
  }

  // 4) Event listeners for adding tasks
  addButton.addEventListener('click', () => addTask());
  taskInput.addEventListener('keypress', (event) => {
    if (event.key === 'Enter') addTask();
  });

  // 5) Initial load of tasks from Local Storage
  loadTasks();
});