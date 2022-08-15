import React, { useState, useEffect } from 'react'
import { LEVELS } from '../models/levels.enum'
import { Task } from '../models/task'
import TaskForm from '../pure/forms/taskForm'
import TaskComponent from '../pure/taskComponent'



function TaskListComponent() {

    // estilos tarjeta
    const estiloCuerpoTarjeta = {
        position: 'relative',
        heigth: '400px'
    }
    // estado del componente
    const defaultTask = new Task('Hacer la comida','Hoy te toca cocinar a tí, ¡Haz la comida!',false,LEVELS.NORMAL)
    const defaultTask1 = new Task('Ejemploi','Hoy te toca cocinar a tí, ¡Haz la comida!',false,LEVELS.URGENT)
    const defaultTask2 = new Task('Esto no es un ejemplo','Hoy te toca cocinar a tí, ¡Haz la comida!',false,LEVELS.URGENT)
    const defaultTask3 = new Task('Hacer la comida','Hoy te toca cocinar a tí, ¡Haz la comida!',false,LEVELS.BLOCKING)
    
    const [tasks, setTasks] = useState([defaultTask,defaultTask1,defaultTask2,defaultTask3]);
    const [loading, setLoading] = useState(true);
    // Control del ciclo de vida

    useEffect(() => {
        console.log("Modificacion de tareas")
        setLoading(false)
        return () => {
            console.log("La tarea va a desmontarse")
        };
    }, [tasks]);

    const completeTask = (task) => {
        const index = tasks.indexOf(task);
        const tempTasks = [...tasks]; // Usamos una variable temporal para trabajar sobre las tareas
        tempTasks[index].completed = !tempTasks[index].completed; // Cambiamos el estado de la tarea
        // Actualizamos el estado de la lista, al usar el setState actualiza el estado de la propiedad y además
        // vuelve a dibujar las listas
        setTasks(tempTasks)
    }


    const deleteTask = (task) => {
        const index = tasks.indexOf(task);
        const tempTasks = [...tasks]; // Usamos una variable temporal para trabajar sobre las tareas
        tempTasks.splice(index,1) // Borramos tarea
        // Actualizamos el estado de la lista, al usar el setState actualiza el estado de la propiedad y además
        // vuelve a dibujar las listas
        setTasks(tempTasks)
    }

    const addTask = (task) => {
        const tempTasks = [...tasks]; // Usamos una variable temporal para trabajar sobre las tareas
        tempTasks.push(task) // Borramos tarea
        // Actualizamos el estado de la lista, al usar el setState actualiza el estado de la propiedad y además
        // vuelve a dibujar las listas
        setTasks(tempTasks)
    }
    return (
        <div >
            <div className='col-12'>
                <div className='card'>
                {/**Card header (titulo) */}
                    <div className='card-header p-3'>
                        <h5>Tus tareas:</h5>
                    </div>
                {/**Card body (cuerpo) */}
                    <div className='card-body' data-mbd-perfect-scrollbar="true" style={estiloCuerpoTarjeta}>
                        <table>
                            <thead>
                                <tr>
                                    <th scope="col" style={{color:"gray"}}>Title</th>
                                    <th scope="col" style={{color:"gray"}}>Description</th>
                                    <th scope="col" style={{color:"gray"}}>Priority</th>
                                    <th scope="col" style={{color:"gray"}}>Actions</th>
                                </tr>
                            </thead>
                            <tbody>
                                {/**Iteramos sobre una lista de tareas */}
                                {tasks.map((task,index) => {
                                    return(
                                        <TaskComponent 
                                            key={index} 
                                            task={task} 
                                            complete={completeTask} 
                                            deleteTask={deleteTask}>
                                        </TaskComponent>)
                                })}
                                
                            </tbody>                            
                        </table>
                    </div>
                <TaskForm add={addTask}></TaskForm>
                </div>
                
            </div>
            {/* AQUI HAREMOS UN MAP PARA HACER LA LISTA WAPISMA */}
            
        </div>
    )
}

export default TaskListComponent;