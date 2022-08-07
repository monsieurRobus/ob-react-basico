/**
 * Ejemplo del uso de métodos de lifecycle en componentes funcionales
 */

import React, { Component,useEffect } from 'react'

export  class DidMount extends Component {

    componentDidMount(){
        console.log("Comportamiento antes de ser Renderizado el componente")
    }

    render() {
        return (
        <div><h1>Didmount</h1></div>
        )
    }
}



const DidMountHook = () => {

    useEffect(() => {
        console.log("Comportamiento antes de ser renderizado por el componente funcional ")


    }, []);  // Dejar los corchjetes vacíos hará que se ejecute solo una vez

    return (
        <div>
            <h1>Didmount</h1>
        </div>
    );
}


