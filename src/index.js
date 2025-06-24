import './style.css';
import { createProject, handleProjectInput } from './modules/projects';
import { createToDo } from './modules/todos';
import { setUpModal } from './modules/modal';
import { renderProject } from './modules/renderProjects';
import { generateUuid } from './modules/uuid';
import { handleProjectToTodoLogic } from './modules/handleProjetcToTodoLogic';
import { handleNewTodoLogic } from './modules/handleNewTodoLogic';

let projects = [
  {
    projectName: 'Home',
    todos: [
      {
        title:'Todo N 1',
        description: 'Continuar con este proyecto',
        dueDate: '01/07/2025', // esto se puede implementar con uno de los plugins de webpack o algo asi me parece
        priority:'High', // esto podria usar un form que despliegue las 3 opciones: high, medium, low. 
    },{
      title:'Todo N 2',
      description: 'Dale maquina a no aflojar',
      dueDate: '10/07/2025', // esto se puede implementar con uno de los plugins de webpack o algo asi me parece
      priority:'Low', // esto podria usar un form que despliegue las 3 opciones: high, medium, low. 
  },
    ],
    id: generateUuid(),
  }
  ];

const modal = document.getElementById("myModal");




handleProjectToTodoLogic(projects)
setUpModal()
handleProjectInput(projects, modal)
renderProject(projects)
handleNewTodoLogic(projects)



// 







