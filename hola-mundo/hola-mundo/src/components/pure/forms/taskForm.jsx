import React from 'react';
import { useRef } from 'react';
import { PropTypes } from 'prop-types';
import { LEVELS } from '../../models/levels.enum';
import { Task } from '../../models/task';
import '../../../styles/form.scss'


const TaskForm = ({add}) => {

    
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

    return (
        <div>
            <form onSubmit={addTask} className='d-flex justify-content-center align-items-center mb-4'>
                <div className='form-outline flex-fill'>
                        <label>Nombre:</label> <input className='form-control form-control-lg' required autoFocus type="Text" ref={nameRef} id='inputName' placeholder='Nombre'/>
                        <label>Descripcion:</label> <input className='form-control form-control-lg' required autoFocus type="Text" ref={descriptionRef} id='inputDesc' placeholder='Descripción' />
                        <label htmlFor='selectPriority' className='sr-only'>Priority:</label> 
                            <select ref={priorityRef} defaultValue={LEVELS.NORMAL} id='selectPriority'>
                                <option value={LEVELS.NORMAL}>
                                    Normal
                                </option>
                                <option value={LEVELS.URGENT}>
                                    Urgent
                                </option>
                                <option value={LEVELS.BLOCKING}>
                                    Blocking
                                </option>

                        </select>

                    <button type="submit" className='btn btn-primary btn-lg ms-2'>Añadir Tarea</button>
                </div>
                
            </form>
        </div>
    );
}

TaskForm.protoTypes = {
    add: PropTypes.func.isRequired
}

export default TaskForm;
