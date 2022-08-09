/**
 * Ejemplo de método componentDidUpdate en clase y en función
 */

import React, { Component,useEffect }from 'react'

export  class DIdUpdate extends Component {

    componentDidUpdate() {
        console.log("Cambios en el componente cuando ya ha sido construido y renderizado inicialmente")

    }
    render() {
        return (
        <div>DIdUpdate</div>
        )
    }
}



const DIdUpdateHook = () => {
    useEffect(() => {
        console.log("Cambios en el componente funcional cuando ya ha sido construido ")
    }); // Al no ponerle corchetes, se ejecutará cada vez que haya un cambio en el componentre

    return (
        <div>DIdUpdate Hook</div>
        );

}

export default DIdUpdate;
