import React from 'react';
import { useRef } from 'react';
import { PropTypes } from 'prop-types';
import { LEVELS } from '../../models/levels.enum';
import { Task } from '../../models/task';
import '../../../styles/form.scss'


const TaskForm = ({add,length}) => {

    
    const nameRef = useRef('')
    const descriptionRef = useRef('')
    const priorityRef = useRef(LEVELS.NORMAL)
    
    const addTask = (e) => {
        e.preventDefault();
        const newTask = new Task(
            nameRef.current.value,
            descriptionRef.current.value,
            false,
            priorityRef.current.value
        )
        add(newTask)
    }

    const normalStyle = {
        color: 'blue',
        fontWeight: 'bold'
    }

    const urgentStyle = {
        color: 'yellow',
        fontWeight: 'bold'
    }

    const blockingStyle = {
        color: 'tomato',
        fontWeight: 'bold'
    }

    return (
        <div>
            <form onSubmit={addTask} className='d-flex justify-content-center align-items-center mb-4'>
                <div className='form-outline flex-fill'>
                        <label>Nombre:</label> <input className='form-control form-control-lg' required autoFocus type="Text" ref={nameRef} id='inputName' placeholder='Nombre'/>
                        <label>Descripcion:</label> <input className='form-control form-control-lg' required autoFocus type="Text" ref={descriptionRef} id='inputDesc' placeholder='Descripción' />
                        <label htmlFor='selectPriority' className='sr-only'>Priority:</label> 
                            <select ref={priorityRef} defaultValue={LEVELS.NORMAL} id='selectPriority'>
                                <option style={normalStyle} value={LEVELS.NORMAL}>
                                    Normal
                                </option>
                                <option style={urgentStyle} value={LEVELS.URGENT}>
                                    Urgent
                                </option>
                                <option style={blockingStyle} value={LEVELS.BLOCKING}>
                                    Blocking
                                </option>

                        </select>

                    <button type="submit" className='btn btn-primary btn-lg ms-2'>

                        {length >0 ? 'Añada una nueva tarea':'Cree su primera tarea'}
                    </button>
                </div>
                
            </form>
        </div>
    );
}

TaskForm.protoTypes = {
    add: PropTypes.func.isRequired,
    length: PropTypes.number.isRequired
}

export default TaskForm;
