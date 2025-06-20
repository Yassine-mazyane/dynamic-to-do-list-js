// Wait until the HTML document is fully loaded
document.addEventListener('DOMContentLoaded', function () {

  // Select DOM elements
  const addButton = document.getElementById('add-task-btn');
  const taskInput = document.getElementById('task-input');
  const taskList = document.getElementById('task-list');

  // Function to add a new task
  function addTask() {
    // Get and trim input value
    const taskText = taskInput.value.trim();

    // Check if input is empty
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
    };

    // Add button to list item, then add item to list
    listItem.appendChild(removeButton);
    taskList.appendChild(listItem);

    // Clear the input field
    taskInput.value = '';
  }

  // Add task on button click
  addButton.addEventListener('click', addTask);

  // Add task on pressing Enter
  taskInput.addEventListener('keypress', function (event) {
    if (event.key === 'Enter') {
      addTask();
    }
  });

  // Call addTask when DOM content is loaded
  addTask();
});
