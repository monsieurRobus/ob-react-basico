import React from 'react';
import { Contacto } from '../Models/Contacto';
import ContactoComponent from './contactoComponent';

const ContactoWrapComponent = () => {
    
    const contacto1 = new Contacto("Carlos", "Díaz Pérez", "carlos@academiaready.es", true)
    
    return (
        <div>
            <ContactoComponent contacto= {contacto1}></ContactoComponent>
        </div>
    );
}

export default ContactoWrapComponent;
