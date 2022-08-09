import { Task } from "../models/task";
import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
// Añadimos bootstrap
import 'bootstrap/dist/css/bootstrap.css'
//Importamos la hoja de estilos en el archivo
import '../../styles/task.scss'


const TaskComponent = ({task}) => {

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

    return (
        <div>
            <h2 className="task-name">{ task.name }</h2>
            <h3>{ task.description } </h3>
            <h4>{ task.level }</h4>
            <h5 style={logged? completedStyle:incompleteStyle }>{ task.completed ? "COMPLETED" : "PENDING" }</h5>
        </div>
    );
};


TaskComponent.propTypes = {
    task: PropTypes.instanceOf(Task)
};


export default TaskComponent;
