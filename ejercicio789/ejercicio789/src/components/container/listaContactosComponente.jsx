import React from 'react';
import { useState,useEffect } from 'react';
import { Contacto } from '../models/Contacto';


const ListaContactosComponente = () => {


    const contacto1 = new Contacto('Miriam','Alfaro Tebar', 'miriam@correofalso.es', false)
    const contacto2 = new Contacto('Carlos','Díaz Pérez', 'carlos@correofalso.es', true)
    const contacto3 = new Contacto('Nico','Díaz Alfaro', 'miriam@correofalso.es', false)
    const contacto4 = new Contacto('Leo','Díaz Alfaro', 'miriam@correofalso.es', false)
    
    const contactosInit = [contacto1,contacto2,contacto3,contacto4]

    const [contactos, setcontactos] = useState(contactosInit);
    return (
        <div>
            <table className='table'>
                <tr>
                    <th colspan='4'>Contactos</th>
                </tr>
                <tr>
                    <th scope="col">Nombre</th>
                    <th scope="col">Apellidos</th>
                    <th scope="col">Email</th>
                    <th scope="col">Conectado</th>
                </tr>
                <tr>
                    <th scope="row"></th>
                </tr>

            </table>
        </div>
    );
}

export default ListaContactosComponente;
