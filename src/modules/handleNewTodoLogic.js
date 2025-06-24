import { createToDo } from "./todos";
import { renderTodos } from "./renderTodos";

const handleNewTodoLogic = function(projects){

const navButtonDiv = document.querySelector('#button-nav-container');
const todoDisplay = document.querySelector('#todo-display')

navButtonDiv.addEventListener('click', function(e){

    projects.forEach(project => {
        

        if(project.id === e.target.id){


            const newTodo = createToDo('todo creado dinamicante', 'descripcion', '2/11/2025','high',)

            project.todos.push(newTodo);

            todoDisplay.innerHTML = ''
            renderTodos(project.todos)


        }


    });

})

}

export { handleNewTodoLogic}