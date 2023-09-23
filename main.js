function NewTodo() {
    //Get DOM elements
    const todoContainer = document.getElementsByClassName("todo_container")[0];
    const newTodo = document.getElementsByClassName("todo_new")[0];
    
    if(newTodo.value != ""){
        //Add Todo Object into the container
        const todoDiv = document.createElement("div");
            todoDiv.classList.add("todo");

        const checkbox = document.createElement("input");
            checkbox.type = "checkbox";
            checkbox.classList.add("todo_checkbox");

        const todoValue = document.createElement("input");
            todoValue.type = "text";
            todoValue.classList.add("todo_value");
            todoValue.placeholder = "(empty)";
            todoValue.value = newTodo.value;
            newTodo.value = "";

        const removeButton = document.createElement("button");
            removeButton.classList.add("todo_remove");
            removeButton.textContent = "❌";
            removeButton.onclick = function() {RemoveTodo(this)};

        //Apply the new elements to the container
        todoDiv.appendChild(checkbox);
        todoDiv.appendChild(todoValue);
        todoDiv.appendChild(removeButton);

        todoContainer.appendChild(todoDiv);
    }
    else alert("Can't add empty TODO");
}

function RemoveTodo(button) {
    button.parentElement.remove();
}