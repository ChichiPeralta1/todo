import { renderTodos } from "./renderTodos";


const checkTodo = function(projects){

    const todoDisplay = document.getElementById('todo-display');
    

    todoDisplay.addEventListener('click', (e) => {


       if(e.target.dataset.action === 'check'){


        

        projects.forEach(project => {
            
            const index = project.todos.findIndex(todo => todo.id === e.target.dataset.todoId);
        
           

            if(index !== -1){

                if(!project.todos[index].completed){

                 
                    project.todos[index].completed = true;

                    if(project.todos[index].id === e.target.dataset.todoId){

                        const todoContainer = e.target.parentElement;
                        todoContainer.style.background = 'grey';
                        todoContainer.style.textDecoration = 'line-through'

                    }
                    //console.log(project.todos[index].id + ' true' + e.target.dataset.todoId);

                    


                    

                   

                }else{

                    
                    project.todos[index].completed = false;

                    if(project.todos[index].id === e.target.dataset.todoId){

                        const todoContainer = e.target.parentElement;
                        todoContainer.style.background = 'greenyellow';
                        todoContainer.style.textDecoration = 'none';

                    }
                    //console.log(project.todos[index].id + ' false')


                }

               

                //todoDisplay.innerHTML = '';
                //renderTodos(project.todos);
            }

        });

       }

    } )//antes del parentesis iria el once


}

export { checkTodo }