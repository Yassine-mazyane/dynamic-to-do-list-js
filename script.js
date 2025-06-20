// Wait until the HTML document is fully loaded
document.addEventListener('DOMContentLoaded', function () {

  // Select DOM elements
  const addButton = document.getElementById('add-task-btn');
  const taskInput = document.getElementById('task-input');
  const taskList = document.getElementById('task-list');

  // Function to add a task
  function addTask(taskText, save = true) {
    if (taskText === undefined) {
      taskText = taskInput.value.trim();
    }

    if (taskText === '') {
      alert('Please enter a task.');
      return;
    }

    // Create list item and set text
    const listItem = document.createElement('li');
    listItem.textContent = taskText;

    // Create remove button
    const removeButton = document.createElement('button');
    removeButton.textContent = 'Remove';
    removeButton.classList.add('remove-btn');

    // Add functionality to remove the task
    removeButton.onclick = function () {
      taskList.removeChild(listItem);
      removeFromStorage(taskText);
    };

    // Add button to list item, then add item to list
    listItem.appendChild(removeButton);
    taskList.appendChild(listItem);

    // Save task to local storage
    if (save) {
      const storedTasks = JSON.parse(localStorage.getItem('tasks') || '[]');
      storedTasks.push(taskText);
      localStorage.setItem('tasks', JSON.stringify(storedTasks));
    }

    // Clear the input field
    taskInput.value = '';
  }

  // Load tasks from Local Storage and display them
  function loadTasks() {
    const storedTasks = JSON.parse(localStorage.getItem('tasks') || '[]');
    storedTasks.forEach(taskText => addTask(taskText, false));
  }

  // Remove a specific task from Local Storage
  function removeFromStorage(taskText) {
    const storedTasks = JSON.parse(localStorage.getItem('tasks') || '[]');
    const updatedTasks = storedTasks.filter(task => task !== taskText);
    localStorage.setItem('tasks', JSON.stringify(updatedTasks));
  }

  // Add task on button click
  addButton.addEventListener('click', addTask);

  // Add task on pressing Enter
  taskInput.addEventListener('keypress', function (event) {
    if (event.key === 'Enter') {
      addTask();
    }
  });

  // Load tasks on page load
  loadTasks();
});
