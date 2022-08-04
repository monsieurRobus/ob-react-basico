import React from 'react';
import PropTypes from 'prop-types';
import { Contacto } from '../Models/Contacto';



const ContactoComponent = ({contacto}) => {
    return (
        <div>
            <h1></h1>
        </div>
    );
};


ContactoComponent.propTypes = {
    contacto: PropTypes.instanceOf(Contacto)
};


export default ContactoComponent;
