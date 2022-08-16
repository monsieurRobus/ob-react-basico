import { Contacto } from '../models/Contacto'
import { React,useEffect } from 'react';
import '../../styles/contacto.scss'
import PropTypes from 'prop-types';

const ContactoComponente = ({contacto,conectar,borrar}) => {

    useEffect(() => {
        console.log("montando contacto")
        return () => {
            console.log(`desmontando contacto ${contacto.nombre}`)
        };
    }, [contacto]);

    return (
        <tr>
            <td>{contacto.nombre}</td>
            <td>{contacto.apellidos}</td>
            <td>{contacto.email}</td>
            <td>{(contacto.conectado) ? 
                <i onClick={()=>conectar(contacto)} className='bi-broadcast conectado'></i> :
                <i onClick={()=>conectar(contacto)} className='bi-slash-circle no-conectado'></i>}   
                <i onClick={()=>borrar(contacto)} className='bi-trash px-2 borrar'></i>
                </td>            
        </tr>
        
        );
}

ContactoComponente.propTypes = {
    contacto: PropTypes.instanceOf(Contacto),
    conectar: PropTypes.func.isRequired,
    borrar: PropTypes.func.isRequired,
    crear: PropTypes.func.isRequired
}

export default ContactoComponente;
