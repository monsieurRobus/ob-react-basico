import React, { useState, useEffect } from 'react'
import { LEVELS } from '../models/levels.enum'
import { Task } from '../models/task'
import TaskComponent from '../pure/taskComponent'


function TaskListComponent() {


    // estado del componente
    const defaultTask = new Task('Hacer la comida','Hoy te toca cocinar a tí, ¡Haz la comida!',false,LEVELS.NORMAL)

    const [tasks, setTasks] = useState([defaultTask]);
    const [loading, setLoading] = useState(true);
    // Control del ciclo de vida

    useEffect(() => {
        console.log("Modificacion de tareas")
        setLoading(false)
        return () => {
            console.log("La tarea va a desmontarse")
        };
    }, [tasks]);

    const changeCompleted= (id) => {
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