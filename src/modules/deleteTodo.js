//que recibe como parametro? los proyectos probablemente
// aca tambien lo que hay que haces es actualizar el array de todos y
//llamar para renderizar los todos 

import { renderTodos } from "./renderTodos";


const deleteTodo = function(projects){

    const todoDisplay = document.getElementById('todo-display')

    todoDisplay.addEventListener('click', (e) => {


       if(e.target.dataset.action === 'delete'){

        projects.forEach(project => {
            
            const index = project.todos.findIndex(todo => todo.id === e.target.dataset.todoId);

            if(index !== -1){

                project.todos.splice(index, 1);
                todoDisplay.innerHTML = '';
                renderTodos(project.todos);
            }

        });

       }

    })


}

export { deleteTodo }