import React from 'react';
import PropTypes from 'prop-types';
import { Contacto } from '../Models/Contacto';



const ContactoComponent = ({contacto}) => {
    return (
        <div>
            <h1>{contacto.nombre} {contacto.apellidos}</h1>
            <h2>{contacto.email}</h2>
        </div>
    );
};


ContactoComponent.propTypes = {
    contacto: PropTypes.instanceOf(Contacto)
};


export default ContactoComponent;
