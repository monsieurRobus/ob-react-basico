/**
 * Vamos a usar 
 * -useState()
 * -useRef()
 * -useEffect()
 */

import React, {useState,useRef,useEffect} from 'react';

const Ejemplo2 = () => {

    // Creamos dos contadores distintos, cada uno en un estado distinto
    const [contador1, setcontador1] = useState(0);
    const [contador2, setcontador2] = useState(0);

    // Usamos useRef para asociar una variable con un elemento del DOM del componente (HTML)

    const miRef = useRef();

    function incrementar1() {
        setcontador1(contador1+1)
    }

    function incrementar2() {
        setcontador2(contador2+1)
    }

    /**
     * ? Caso1: Ejecutar siempre un snippet der codito
     * Cada vez que haya un cambio de estado del componente
     * se ejecuta aquello que esté dentro del useEffect()
     */

    // useEffect(() => {
    //     console.log('cCAMBIO EN EL ESTADO DEL COMPONENTE')
    //     console.log('Referencia')
    //     console.log(miRef)    
    // });

    /**
     * ? Caso2: Ejecutamos cuando se actualice el contador1
     * Cada vez que haya ubn cambio en el contador 1, se ejecuta useEffect,
     * en caso de contador2, no hay ejecución
     */


    // useEffect(() => {
    //     console.log('cCAMBIO EN EL ESTADO DEL CONTADOR1 / CONTADOR 2')
    //     console.log('Referencia')
    //     console.log(miRef)    
    // },[contador1,contador2]);

    

    return (
        <div>
            <h1>Ejemplo useState, useRef, useEffect</h1>
            <h2>CONTADOR1: {contador1}</h2>
            <h2>CONTADOR2: {contador2}</h2>
            {/* Elemento referenciado*/}
            <h4 ref={miRef}>Elemento referenciado</h4>
            <div>
                <button onClick={incrementar1}>Contador1</button>
                <button onClick={incrementar2}>Contador2</button>
            </div>
        </div>
    );
}

export default Ejemplo2;
