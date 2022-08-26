import { Task } from "../models/task";
import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { LEVELS } from "../models/levels.enum"; 

//Importamos la hoja de estilos en el archivo
import '../../styles/task.scss'


const TaskComponent = ({task, complete, deleteTask}) => {

    /**
     * PRUEBA DE ESTILOS EN EL PROPIO JSX
     * 
     */

    const completedStyle={
        color: 'blue'
    }
    const incompleteStyle= {
        color: 'tomato',
        fontWeight: 'bold'
    }

    const [logged, setlogged] = useState(false);

    useEffect(() => {
        console.log("Tarea creada")
        return () => {
            console.log(`Tarea ${task.name} va a desaparecer`)
        };
    }, [task]);

    /**Funcion que devuelve una medalla en funcion del nivel de la tarea */
    const taskLevelBadge = () => {
        switch(task.level)
        {
            case LEVELS.NORMAL: 
                    return(<h6 className='mb-0'>
                            <span className="badge bg-primary">{task.level}</span>
                    </h6>)
                

            case LEVELS.URGENT:
                return(<h6 className='mb-0'>
                <span className="badge bg-warning">{task.level}</span>
        </h6>)
            
            case LEVELS.BLOCKING:
                return(<h6 className='mb-0'>
                <span className="badge bg-danger">{task.level}</span>
        </h6>)
            default: 
            break;

        }
    }

    const iconComplete  = () => {
        if(task.completed) 
            return (<i onClick={()=>complete(task)} className='bi-toggle-on task-action' style={{color:"green"}}></i>)
        else
            return (<i onClick={()=>complete(task)} className="bi-toggle-off task-action" style={{color:"tomato"}}></i>) 
    }

    const taskCompleted = {
        color:'greenyellow',
        textDecoration: 'line-through'
    }

    const taskIncompleted = {
        fontWeight: 'bold',
        color: 'tomato'
    

    }

    return (

        <tr className="fw-normal" style={task.completed ? taskCompleted:taskIncompleted}>
            <th>
                <span className="ms-2" >{task.name}</span>
            </th>
            <td>
                <span className="align-middle task-action" >{task.description}</span>
            </td>
            <td>
                {/**Ejecutamos la funcion que nos devolverá la medalla */}
                {taskLevelBadge()}
            </td>
            <td>
                {/**USAR ICONOS!! */}      
                {iconComplete()}         
                <i onClick={()=>deleteTask(task)}className='bi-trash task-action' style={{color:"tomato", fontWeight:"bold"}}></i>
            </td>
        </tr>
    );
};


TaskComponent.propTypes = {
    task: PropTypes.instanceOf(Task),
    complete: PropTypes.func.isRequired,
    deleteTask: PropTypes.func.isRequired
};


export default TaskComponent;
