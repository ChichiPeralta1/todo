import './style.css';
import { createProject, handleProjectInput } from './modules/projects';
import { createToDo } from './modules/todos';
import { setUpModal } from './modules/modal';
import { renderProject } from './modules/renderProjects';
import { generateUuid } from './modules/uuid';
import { handleProjectToTodoLogic } from './modules/handleProjetcToTodoLogic';
import { handleNewTodoLogic } from './modules/handleNewTodoLogic';
import { deleteTodo } from './modules/deleteTodo';
import { editTodo } from './modules/editTodo';
import { checkTodo } from './modules/checkTodo';

let projects = [
  {
    projectName: 'Home',
    todos: [
      {
        title:'Test todo',
        description: 'Feel free to delete or edit this todo. Top right button is for creating new todos',
        dueDate: '01/07/2025', // esto se puede implementar con uno de los plugins de webpack o algo asi me parece
        priority:'High', // esto podria usar un form que despliegue las 3 opciones: high, medium, low. 
        completed: false,
        id: generateUuid(),
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
deleteTodo(projects)
editTodo(projects)
checkTodo(projects)


// 







