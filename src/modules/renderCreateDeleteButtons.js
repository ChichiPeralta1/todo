
const createButtons = function(projectId){
    
    const buttonNavContainer = document.querySelector('#button-nav-container');
    buttonNavContainer.innerHTML = ''

    const createTodoButton = document.createElement('button');

    createTodoButton.textContent = 'CREATE TODO';
    
    createTodoButton.id = projectId

    buttonNavContainer.appendChild(createTodoButton);
    


}

export { createButtons }