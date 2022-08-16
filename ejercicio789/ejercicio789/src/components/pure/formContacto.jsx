import React, { useRef } from 'react';
import {Contacto} from '../models/Contacto.js';


const FormContacto = ({crear}) => {

    const nombreRef = useRef('')
    const apellidosRef = useRef('')
    const emailRef = useRef('')
    
    const creaContacto = (e) => {
        e.preventDefault();
        const contactoNuevo = new Contacto(
            nombreRef.current.value,
            apellidosRef.current.value,
            emailRef.current.value,
            false
        )
        crear(contactoNuevo)
    }



    return (
        <div className='p-4'>
        <h1>Añade contacto</h1>
            <form onSubmit={creaContacto} className='d-flex justify-content-center align-items-center mb-4'>
                <div className='form-outline flex-fill'>
                        <label>Nombre:</label> <input className='form-control form-control-lg' required autoFocus type="Text" ref={nombreRef} id='inputName' placeholder='Nombre'/>
                        <label>Apellidos:</label> <input className='form-control form-control-lg' required autoFocus type="Text" ref={apellidosRef} id='inputDesc' placeholder='Apellidos' />
                        <label>email:</label> <input className='form-control form-control-lg' required autoFocus type="Text" ref={emailRef} id='inputDesc' placeholder='eMail' />
                    <button type="submit" className='btn btn-primary btn-lg ms-2'>Añadir Tarea</button>
                </div>
                
            </form>
        </div>
    );
}

export default FormContacto;
