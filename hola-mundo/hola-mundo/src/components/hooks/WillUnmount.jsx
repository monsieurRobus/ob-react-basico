/**
 * Ejemplo de uso del método componentWillUnmount para componente clase y funcioinal 
 */

import React, { Component,useEffect } from 'react'

export default class WillUnmount extends Component {

    componentWillUnmount() {
        console.log('Comportamiento antes de que el componente desaparewzca');
    }

    render() {
        return (
        <div><h1>WillUnmount Clase</h1></div>
        )
    }
}



export const WillUnmountHook  = () => {

    useEffect(() => {
            return () => {
            console.log("Comportamiento antes de que desaparezca")
        };
    }, []);

    return (
        <div><h1>WillUnmount Hook</h1></div>
    );
}


