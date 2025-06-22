// factory function to create projects 

import { renderProject } from "./renderProjects";
import { generateUuid } from "./uuid";

const createProject = function(projectName){

    return{
        projectName:projectName,
        todos: [],
        id: generateUuid(),
    }
};


// function to grab input from the user, and push it in to the array

const handleProjectInput = function(projectsArr, modal){

    const projectForm = document.querySelector('#project-name-creation-form');
    const projectFormInput = document.querySelector('#project_name_input')

    projectForm.addEventListener('submit', function(e){

        e.preventDefault();


        //create new project using factory function, adding it to the array and redering it.
        const newProject = createProject(projectFormInput.value);
        projectsArr.push(newProject);
        renderProject(projectsArr);


        

        //clean and close modal
        projectFormInput.value = '';
        modal.style.display = "none"; // 👈 cerrás el modal
        console.log(projectsArr)

    })


}


export { createProject, handleProjectInput }


// el flow es el siguiente: toco el boton create project, ese boton lo que tiene que hacer es:
// llamar a createProject y que le pase como parametro el nombre del proyecto, que es basicamente lo que el usuario ingresa 