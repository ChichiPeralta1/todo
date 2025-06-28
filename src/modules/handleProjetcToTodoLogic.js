import { renderTodos } from "./renderTodos";
import { createButtons } from "./renderCreateDeleteButtons";


const handleProjectToTodoLogic= function(projects){

    //podria ver si puedo agarrar solo el contendor de los proyectos, en este caso #project-display

    const projectDisplay = document.querySelector('#project-display');
    
    projectDisplay.addEventListener('click', function(e){
    

        //ojo con esta const de aca abajo, en renderTodos esta la misma, con el mismo nombre, pero cumple otra funcion. 
        const todoDisplayDiv = document.querySelector("#todo-display");

        todoDisplayDiv.innerHTML = '';

        const cleanCreateTodoButton = document.querySelector('#button-nav-container')


        if(e.target.id === 'project-display'){

            cleanCreateTodoButton.innerHTML = ''
        }


        projects.forEach(project => {
            
            if(project.id == e.target.id){


                renderTodos(project.todos)
                createButtons(project.id)

            }

        });
    
    })

    

    

};



export { handleProjectToTodoLogic };
