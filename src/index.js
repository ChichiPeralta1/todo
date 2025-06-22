import './style.css';
import { createProject, handleProjectInput } from './modules/projects';
import { createToDo } from './modules/todos';
import { setUpModal } from './modules/modal';
import { renderProject } from './modules/renderProjects';
import { generateUuid } from './modules/uuid';


let projects = [
{
  projectName: 'Home',
  todos: [],
  id: generateUuid(),
}
];

const modal = document.getElementById("myModal");






setUpModal()
handleProjectInput(projects, modal)
renderProject(projects)




// 







