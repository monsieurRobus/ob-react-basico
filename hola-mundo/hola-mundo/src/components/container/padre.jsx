import React, { useState } from 'react';
import Child from '../pure/child';


const Padre = () => {

    const [name, setname] = useState('Roberto');
    
    function showMessage(text) {
        alert(`Message recieved ${text}`)
    }

    function updateName(text){
        setname(text)
    }
    return (
        <div style={{background:'tomato', padding:'10px'}}>
        <h1 style={{color:'white'}}>Padre {name}</h1>
            <Child name="Carlos" send={showMessage} update={updateName}></Child>
        </div>
    );
}

export default Padre;
