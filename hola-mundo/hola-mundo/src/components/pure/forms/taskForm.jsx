import React from 'react';
import { useRef } from 'react';
import { PropTypes } from 'prop-types';
import { LEVELS } from '../../models/levels.enum';
import { Task } from '../../models/task';
import '../../../styles/form.scss'
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';


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

    const addTask2 = () => {
        const newTask = new Task(
            nameRef.current.value,
            descriptionRef.current.value,
            false,
            priorityRef.current.value
        )
        add(newTask)
    }
    {/**Valores iniciales de la tarea */}
    const taskInitialValues = {
        nombre :'',
        descripcion:'',
        level:''

    }

      {/**¿Que pasara al darle al boton? Aqui abajo aparece */}
      const submit = (values) => {
        console.log('Add task ',values)
    }
    
    {/** Esquema de validación */}
    const taskSchema = Yup.object().shape (
        {
            nombre : Yup.string().required('Username es requerido'),
            descripcion: Yup.string().required('Password requerida'),
            level: Yup.mixed().oneOf(Object.values(LEVELS),'debe seleccionar un valor valido')
        }
    )

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
            <h4>Añade tarea:</h4>
            <Formik
                initialValues={taskInitialValues}
                validationSchema={taskSchema}
                onSubmit={
                    async(values) => {                        
                        const newTask = new Task(
                            nameRef.current.value,
                            descriptionRef.current.value,
                            false,
                            priorityRef.current.value
                        )
                        add(newTask)
                    }

                }
            >
                {({
                        values,
                        touched,
                        errors,
                        isSubmitting,
                        handleChange,
                        handleBlur }) => (
                            <Form>
                                <label htmlFor="nombre">Username</label>
                                <Field id="nombre" type="text" name="nombre" placeholder="Nombre de la tarea" />

                                {/** Username Errors */}
                                {
                                    errors.nombre && touched.nombre &&
                                        (
                                            <ErrorMessage name="nombre" component="div" className='task-incompleted'></ErrorMessage>
                                        )

                                }

                                <label htmlFor='descripcion'>Password</label>
                                <Field id="descripcion" type="text" name="descripcion" placeholder="descripción de la tarea" />

                                 {/** Password Errors */}
                                 {
                                    errors.descripcion && touched.descripcion &&
                                        (
                                            <ErrorMessage name="descripcion" component="div" className='task-incompleted'></ErrorMessage>
                                        )
                                }

                                <label htmlFor='level'>Password</label>
                                <Field id="level" as="select" name="level" >
                                    <option ref={nameRef} value={LEVELS.NORMAL}>Normal</option>
                                    <option ref={descriptionRef} value={LEVELS.URGENT}>Urgent</option>
                                    <option ref={priorityRef} value={LEVELS.BLOCKING}>Blocking</option>

                                </Field>

                               
                                <button type="submit">Login</button>
                                {isSubmitting ? <p>Enviando tarea</p>:null }
                            </Form>
                        )
                    }

            </Formik>
            {/* {<form onSubmit={addTask} className='d-flex justify-content-center align-items-center mb-4'>
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
                
            </form>} */}

        </div>
    );
}

TaskForm.protoTypes = {
    add: PropTypes.func.isRequired,
    length: PropTypes.number.isRequired
}

export default TaskForm;
