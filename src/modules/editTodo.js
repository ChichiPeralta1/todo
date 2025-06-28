import { renderTodos } from "./renderTodos";


const editTodo = function(projects){

    const todoDisplay = document.getElementById('todo-display')

    todoDisplay.addEventListener('click', (e) => {


       if(e.target.dataset.action === 'edit'){

        projects.forEach(project => {
            
            const index = project.todos.findIndex(todo => todo.id === e.target.dataset.todoId);

            if(index !== -1){

                
                const modal = document.getElementById("edit-todo-modal");
                const closeBtn = document.getElementById("close-edit-button");
                const form = document.getElementById("edit-todo-data");
                const submitBtn = document.querySelector('#submit-edited-modal-todo')
    
                modal.style.display = "block";
    
                closeBtn.addEventListener("click", (e) => {
                modal.style.display = "none";
                });
    
                window.addEventListener("click", (e) => {
                if (e.target === modal) {
                    modal.style.display = "none";
                }
                });
    

                form.addEventListener("submit", (e) => {
                    e.preventDefault();
                    
                    //trabajar entre esta linea
                  
                    const title = form.title.value;
                    const description = form.description.value;
                    const dueDate = form.dueDate.value;
                    const priority = form.priority.value;

                    project.todos[index].title = title;
                    project.todos[index].description = description;
                    project.todos[index].dueDate = dueDate;
                    project.todos[index].priority = priority;

        

        
                    todoDisplay.innerHTML = '';
                    renderTodos(project.todos);
        

                    
                    modal.style.display = 'none';


                    
                    //y esta linea
                    form.reset()
            
        
                    }, { once: true }) ;
            

            }

        });

       }

    })


}

export { editTodo }