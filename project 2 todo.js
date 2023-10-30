const taskForm = document.getElementById('task-form');
const newTaskInput = document.getElementById('new-task');
const taskList = document.getElementById('task-list');

taskForm.addEventListener('submit', function (e) {
    e.preventDefault();
    const taskText = newTaskInput.value.trim();
    if (taskText !== '') {
        createTask(taskText);
        newTaskInput.value = '';
    }
});

function createTask(taskText) {
    const li = document.createElement('li');
    li.innerHTML = `
        <input type="checkbox">
        <span>${taskText}</span>
        <button class="delete">Delete</button>
    `;

    const deleteButton = li.querySelector('.delete');
    deleteButton.addEventListener('click', function () {
        taskList.removeChild(li);
    });

    taskList.appendChild(li);
}