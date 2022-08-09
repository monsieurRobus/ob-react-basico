import React, { Component, useState, useEffect } from 'react'
import PropTypes from 'prop-types';


const Funcion = ({props}) => {

    const [state, setState] = useState({
        fecha: new Date(),
        edad: 0,
        nombre: 'Carlos',
        apellidos: 'San José'
    });


    useEffect(() =>
        {


        const tick = () => {
            let edad = state.edad + 1;

            setState({
                ...state,            
                fecha: new Date(),
                edad

            })
        }

            const timerID = setInterval (
                () => tick(),1000
            );
            return () => clearInterval(timerID)
        }
    , [state,setState]);

    return (
        <div>
            <h2>
                hora Actual:
                {state.fecha.toLocaleDateString()}
            </h2>
            <h3>{state.nombre} {state.apellidos}</h3>
            <h1>Edad: {state.edad}</h1>
            <h2>Testeo</h2>
        </div>
    );

}

Funcion.propType = {
    props: PropTypes.instanceOf(Object)
}
export default Funcion;
