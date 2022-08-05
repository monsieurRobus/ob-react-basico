import React, {useState} from 'react';
import PropTypes from 'prop-types';
import { Contacto } from '../Models/Contacto';



const ContactoComponent = ({contacto}) => {

    const [conectado,cambiaConexion] = useState(contacto.conectado)

    const switchConexion = () => {
        cambiaConexion(!conectado)
        contacto.conectado = !conectado;
    }

    return (
        <div>
            <h1>{contacto.nombre} {contacto.apellidos}</h1>
            <h2>{contacto.email}</h2>
            <h3>{conectado ? "Conectado" : "No Conectado"}</h3>
            <button onClick={switchConexion}>Cambia el estado</button>
        </div>
    );
};

ContactoComponent.propTypes = {
    contactO: PropTypes.instanceOf(Contacto)
};



export default ContactoComponent;
