import React, { useState, useEffect } from 'react'
import { LEVELS } from '../models/levels.enum'
import { Task } from '../models/task'
import TaskComponent from '../pure/taskComponent'


function TaskListComponent() {

    // estilos tarjeta
    const estiloCuerpoTarjeta = {
        position: 'relative',
        heigth: '400px'
    }
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
                                    <th scope="col">Title</th>
                                    <th scope="col">Description</th>
                                    <th scope="col">Priority</th>
                                    <th scope="col">Actions</th>
                                </tr>
                            </thead>
                            <tbody>
                                {/**Iteramos sobre una lista de tareas */}
                                <tr><TaskComponent task={defaultTask}></TaskComponent></tr>
                            </tbody>                            
                        </table>
                    </div>

                </div>
                
            </div>
            {/* AQUI HAREMOS UN MAP PARA HACER LA LISTA WAPISMA */}
            
        </div>
    )
}

export default TaskListComponent;