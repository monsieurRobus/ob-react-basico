/**
 * Ejemplo Hooks parA:
 * -useState()
 * -useContext()
 */

import React, {useState, useContext} from 'react';
    /**
     * 
     * @returns Component1
     * Dispone de un contexto que va a tener un valor
     * que recibe de su padre
     */

const miContexto = React.createContext(null)

const Componente1 = () => {

    // Inicializamos un estado vacio que va a rellenarse con los datos del padre
    const state = useContext(miContexto);

    return (
        <div>
            <h1>El token es {state.token}</h1>
            <Componente2></Componente2>
        </div>
    );
}


const Componente2 = () => {

    const state = useContext(miContexto);

    return (
        <div>
            <h1>La sesion es {state.sesion}</h1>
        </div>
    );
}



export default function ComponenteConContexto() {

const estadoInicial = {
    token: '12345',
    sesion: 1
}

// Creamos el estado del compoinente
    const [sessioNData, setsessioNData] = useState(estadoInicial);

    function actualizarSesion(){
        setsessioNData (
        {  
            token: 'CDP55407086Z',
            sesion: sessioNData.sesion + 1

        }


        )
    }

    return (
        <miContexto.Provider value={sessioNData}>
            {/**
            * Todo esto puede leer los datos de sessionDataç
            */}
            <Componente1></Componente1>
            <button onClick={actualizarSesion}>Actualiuza</button>
        </miContexto.Provider>

    )
}


