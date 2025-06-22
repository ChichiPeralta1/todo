// factory function to create toDos

const createToDo = function(title, description, dueDate, priority){

    //this function returns an object with all the fields necessary to create a todo
    return{
        title:title,
        description: description,
        dueDate: dueDate, // esto se puede implementar con uno de los plugins de webpack o algo asi me parece
        priority:priority, // esto podria usar un form que despliegue las 3 opciones: high, medium, low. 
    }

}

export { createToDo }


