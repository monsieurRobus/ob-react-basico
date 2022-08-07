//  Ejeplo1:    Trabajar con useState
//
//  Creamos comp. de tipo función y accedemos a su estado privado a travñes de un hook y poder modificarlo:
// Hay que importar el hook:

import React, {useState} from 'react';

const Ejemplo1 = () => {

    // Valor inicial para un contador
    const valorInicial = 0;

    // Valor inicial para una persona
    const personaInicial = {
        nombre: 'Carlos',
        email: 'cdperez.85@gmail.com'
    };

    // Valorinicial y Personainicial serán parte del estado del componente para poder gestionar su 
    // cambio y que se vea reflejado en la vista del componente.

    const [contador, setContador ] = useState(valorInicial);

    const [persona, setPersona] = useState(personaInicial);
    
    /**
    * Función para actualizar el estado privado que contiene el contador
    */

    function aumentaContador(){
        // ? FunciónParaCambiar(nuevoValor)
        
        setContador(contador+1)
    }

    /**
     * Función para actualizar el estado de persona en el componente
     */

    function actualizarPersona(){
        setPersona({
            nombre: "Miguelito",
            email: "lala@lolo.com"
        })
    }
    
    return (
        <div>
            <h1>Probando useState() uwu</h1>
            <h2>Contador: {contador}</h2>
            <h2>Persono!</h2>
            <h3>Nombre: {persona.nombre} </h3>
            <h3>Email: {persona.email}</h3>
            
            {/**
            * Bloque de botones para actualizar el componente
            */
            }
            <div>
                <button onClick={aumentaContador}>Aumenta contador</button>
                <button onClick={actualizarPersona}>Actualiza!</button>
            </div>
        </div>
    );
}

export default Ejemplo1;
