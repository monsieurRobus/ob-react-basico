import React from 'react';
import { useState,useEffect } from 'react';
import { Contacto } from '../models/Contacto';
import ContactoComponente from '../pure/contactoComponente';


const ListaContactosComponente = () => {


    const contacto1 = new Contacto('Miriam','Alfaro Tebar', 'miriam@correofalso.es', false)
    const contacto2 = new Contacto('Carlos','Díaz Pérez', 'carlos@correofalso.es', true)
    const contacto3 = new Contacto('Nico','Díaz Alfaro', 'nico@correofalso.es', false)
    const contacto4 = new Contacto('Leo','Díaz Alfaro', 'leo@correofalso.es', false)
    
    
    const [contactos, setcontactos] = useState([contacto1,contacto2,contacto3,contacto4]);
    return (
        <div>
            <table className='table'>
            <thead>
            <tr>
                    <th colSpan='4'>Contactos</th>
                </tr>
                <tr>
                    <th scope="col">Nombre</th>
                    <th scope="col">Apellidos</th>
                    <th scope="col">Email</th>
                    <th scope="col">Conectado</th>
                </tr>
            </thead>
            <tbody>
            {
                    contactos.map((contacto,indice)=>{
                        return(
                            <ContactoComponente
                                key={indice}
                                contacto={contacto}>
                            </ContactoComponente>
                        );
                    })
                }
            </tbody>
                
                
            </table>
        </div>
    );
}

export default ListaContactosComponente;
