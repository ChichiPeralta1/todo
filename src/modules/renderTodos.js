//function to render Todos

const renderTodos = function(todosArr){

    const todoDisplayDiv = document.querySelector("#todo-display");
    
    todosArr.forEach(todo => {

        const divCard = document.createElement('div');
        divCard.className = 'div-card';

        //
        const titleAndDescriptionDiv = document.createElement('div');

        titleAndDescriptionDiv.className = 'title-description-div'
        const titleDOM = document.createElement('h2');
        titleDOM.innerText = todo.title;

        const descriptionDom = document.createElement('p');
        descriptionDom.innerText = todo.description;

        titleAndDescriptionDiv.appendChild(titleDOM);
        titleAndDescriptionDiv.appendChild(descriptionDom);
        divCard.appendChild(titleAndDescriptionDiv);

        //
        const dueDateAndPriorityDiv = document.createElement('div');
        dueDateAndPriorityDiv.className = 'dueDate-and-priority-div';


        const dueDateDOM = document.createElement('p');
        dueDateDOM.innerText = 'Due date: ' + todo.dueDate;

        const priorityDom = document.createElement('p');
        priorityDom.innerText = 'Priority: ' + todo.priority;

        dueDateAndPriorityDiv.appendChild(dueDateDOM);
        dueDateAndPriorityDiv.appendChild(priorityDom);
        divCard.appendChild(dueDateAndPriorityDiv)

        // 
        
        const editAndDeleteBtns = document.createElement('div')
        editAndDeleteBtns.className = 'edit-delete-todo-btns-div'
        
        const editBtn = document.createElement('button');
        const deleteBtn = document.createElement('button');
        
        editBtn.innerText = 'Edit todo';
        deleteBtn.innerText = 'Delete todo';

        editAndDeleteBtns.appendChild(editBtn);
        editAndDeleteBtns.appendChild(deleteBtn);

        divCard.appendChild(editAndDeleteBtns)








        todoDisplayDiv.appendChild(divCard)

       
        
    });
}

export { renderTodos }