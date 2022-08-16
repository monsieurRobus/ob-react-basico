import React from 'react';
import { useState,useEffect } from 'react';
import { Contacto } from '../models/Contacto';
import ContactoComponente from '../pure/contactoComponente';
import FormContacto from '../pure/formContacto';

const ListaContactosComponente = () => {


    const contacto1 = new Contacto('Miriam','Alfaro Tebar', 'miriam@correofalso.es', false)
    const contacto2 = new Contacto('Carlos','Díaz Pérez', 'carlos@correofalso.es', true)
    const contacto3 = new Contacto('Nico','Díaz Alfaro', 'nico@correofalso.es', false)
    const contacto4 = new Contacto('Leo','Díaz Alfaro', 'leo@correofalso.es', false)
    
    
    const [contactos, setcontactos] = useState([contacto1,contacto2,contacto3,contacto4]);
    
    useEffect(()=>{
        console.log("Contacto creado")
        return() => {
            console.log("Contacto va a desmontarse")
        }
    },[contactos]);


    const crearContacto = (contactoNuevo) => {
        
        const listaContactos = [...contactos]
        listaContactos.push(contactoNuevo)
        setcontactos(listaContactos)

    }

    const borrarContacto = (contactoBorrar) => {
        const index = contactos.indexOf(contactoBorrar)
        const listaContactos = [...contactos]
        listaContactos.splice(index,1)
        setcontactos(listaContactos)
    }

    const conectaContacto = (contactoConectar) => {
        const index = contactos.indexOf(contactoConectar)
        const listaContactos = [...contactos]
        listaContactos[index].conectado = !listaContactos[index].conectado
        setcontactos(listaContactos)
    }
    
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
                                contacto={contacto}
                                crear={crearContacto}
                                borrar={borrarContacto}
                                conectar={conectaContacto}
                                >
                            </ContactoComponente>
                        );
                    })
                }
            </tbody>
                
                
            </table>
            <FormContacto crear={crearContacto}></FormContacto>
        </div>
    );
}

export default ListaContactosComponente;
