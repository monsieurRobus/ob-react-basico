/**
 * Ejemplo para entender props.children
 */

import React from 'react';

const Ejemplo4 = (props) => {
    return (
        <div>
            <h1>Ejemplo de Children props</h1>
            <h2>
                Nombre: {props.nombre} 
            </h2>
            {/**
            * PROPS.CHILDREN pintará por defecto aquello que se encuentre entre las etiquetas de apertura y cierre de este componente
            * Desde el componente de orden superior!
            */}
            {props.children}
        </div>
    );
}

export default Ejemplo4;
