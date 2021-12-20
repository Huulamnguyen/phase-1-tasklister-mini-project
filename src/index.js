document.addEventListener("DOMContentLoaded", () => {
  // your code here
  const newTaskForm = document.querySelector('#create-task-form')

  newTaskForm.addEventListener('submit', createNewTask);

  function createNewTask(e) {
    e.preventDefault();

    const newTaskDescription = document.getElementById('new-task-description');

    const newTask = document.createElement('li');
    const removeBtn = document.createElement('button')
    removeBtn.addEventListener('click', removeTask);
    removeBtn.textContent = "x";
    newTask.textContent = `${newTaskDescription.value} `;

    newTask.appendChild(removeBtn)

    appendNewTask(newTask);
    e.target.reset();
  }

  function removeTask(e) {
    e.target.parentNode.remove()
  }

  function appendNewTask(newTask) {
    document.getElementById('tasks').appendChild(newTask);
  }

});
