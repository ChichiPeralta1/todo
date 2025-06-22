//funcion que recibe como parametro los proyectos, una vez que los podes manipular haces un forEach

const projectDisplayDiv = document.querySelector('#project-display');

const renderProject = function(projects){

    projectDisplayDiv.innerHTML = ''

    projects.forEach((project) => {
  
        
          const projectDisplayItem = document.createElement('button');
          projectDisplayItem.innerText =  project.projectName;
          projectDisplayItem.id = project.id; 
          

          projectDisplayDiv.appendChild(projectDisplayItem);
          
        
          
            
          })

}




export { renderProject }