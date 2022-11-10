"use strict";
const todoValue = document.querySelector('#todo-add');
const btn = document.querySelector('.add-btn');
const ul = document.querySelector('.todo-container');
function todoAction() {
    btn.addEventListener('click', addTodo);
    ul.addEventListener('click', removeTodo);
    ul.addEventListener('click', checkTodo);
    function addTodo() {
        if (todoValue.value === '')
            return;
        //Create todo container
        const div = document.createElement('div');
        div.classList.add('todo-items');
        //Create todo items
        const li = document.createElement('li');
        li.classList.add('todo-item');
        li.innerText = todoValue.value;
        //Check Button
        const checkBtn = document.createElement('i');
        checkBtn.classList.add('fas');
        checkBtn.classList.add('fa-check');
        checkBtn.classList.add('checked');
        //Delete Button
        const delBtn = document.createElement('i');
        delBtn.classList.add('fas');
        delBtn.classList.add('fa-trash');
        delBtn.classList.add('delete');
        //Adding todo items to the container    
        div.appendChild(li);
        div.appendChild(checkBtn);
        div.appendChild(delBtn);
        ul.appendChild(div);
        todoValue.value = "";
    }
}
function removeTodo(e) {
    const item = e.target;
    if (item.classList[2] === 'delete') {
        const todo = item.parentElement;
        todo.remove();
    }
}
function checkTodo(e) {
    const item = e.target;
    if (item.classList[2] === 'checked') {
        const todo = item.parentElement;
        todo.classList.toggle('line');
    }
}
todoAction();
