import { Contacto } from '../models/Contacto'
import React from 'react';
import '../../styles/contacto.scss'

const ContactoComponente = ({contacto}) => {
    return (
        <tr>
            <td>{contacto.nombre}</td>
            <td>{contacto.apellidos}</td>
            <td>{contacto.email}</td>
            <td>{(contacto.conectado) ? 
                <i className='bi-broadcast conectado'></i> :
                <i className='bi-slash-circle no-conectado'></i>}</td>
        </tr>
        
            );
}

export default ContactoComponente;
