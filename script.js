document.addEventListener('DOMContentLoaded', function() {
    const taskInput = document.getElementById('taskInput');
    const addTaskBtn = document.getElementById('addTaskBtn');
    const taskList = document.getElementById('taskList');

    addTaskBtn.addEventListener('click', function() {
        const taskText = taskInput.value.trim();
        if (taskText !== '') {
            addTask(taskText);
            taskInput.value = '';
        }
    });

    function addTask(taskText) {
        const li = document.createElement('li');
        li.textContent = taskText;
        taskList.appendChild(li);

        // Add event listener to mark task as completed on click
        li.addEventListener('click', function() {
            li.classList.toggle('completed');
        });

        // Add delete button
        const deleteBtn = document.createElement('button');
        deleteBtn.textContent = '❌';
        deleteBtn.classList.add('delete-btn');
        li.appendChild(deleteBtn);

        // Add event listener to delete task
        deleteBtn.addEventListener('click', function() {
            li.remove();
        });
    }
});
