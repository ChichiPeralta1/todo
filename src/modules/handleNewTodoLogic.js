import { createToDo } from "./todos";
import { renderTodos } from "./renderTodos";
import { generateUuid } from "./uuid";



const handleNewTodoLogic = function(projects){

const navButtonDiv = document.querySelector('#button-nav-container');
const todoDisplay = document.querySelector('#todo-display')

navButtonDiv.addEventListener('click', function(e){

    projects.forEach(project => {
        
        

        if(project.id === e.target.id){


            const modal = document.getElementById("add-todo-modal");
            //const openBtn = document.getElementById("openModalBtn"); - esto seria con el boton de de create todo
            const closeBtn = document.getElementById("closeModalBtn");
            const form = document.getElementById("addTodoData");
            const submitBtn = document.querySelector('#submit-modal-todo')

            modal.style.display = "block";

            closeBtn.addEventListener("click", () => {
            modal.style.display = "none";
            });

            window.addEventListener("click", (e) => {
            if (e.target === modal) {
                modal.style.display = "none";
            }
            });

            form.addEventListener("submit", (e) => {
            e.preventDefault();
            
            const title = form.title.value;
            const description = form.description.value;
            const dueDate = form.dueDate.value;
            const priority = form.priority.value;
            const id = generateUuid();

            const newTodo = createToDo(title, description, dueDate, priority, id)
            project.todos.push(newTodo);

            todoDisplay.innerHTML = '';
            renderTodos(project.todos);

            console.log(project)
            
            modal.style.display = 'none';
            form.reset()
    

            }, { once: true }) ;
            // ojo aca que tenia dos eventlistener

        }


    });

})

}

export { handleNewTodoLogic}