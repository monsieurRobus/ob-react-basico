import React from 'react'
import { LEVELS } from '../models/levels.enum'
import { Task } from '../models/task'
import TaskComponent from '../pure/taskComponent'


function TaskListComponent() {

    const defaultTask = new Task('Hacer la comida','Hoy te toca cocinar a tí, ¡Haz la comida!',false,LEVELS.NORMAL)

    const changestate = (id) => {
        console.log("Cambiar estado")
    }
    return (
        <div>
            <h1>Tus tareas:</h1>
            {/* AQUI HAREMOS UN MAP PARA HACER LA LISTA WAPISMA */}
            <TaskComponent task={defaultTask}></TaskComponent>
        </div>
    )
}

export default TaskListComponent;