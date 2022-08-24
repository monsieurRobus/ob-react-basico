import React, { useState } from 'react';
import '../../style/cuadro.scss'


const Cuadrado = () => {

    
    const [ratonOver, setRatonOver] = useState(false);
    const [ratonDblClick, setRatonDblClick] = useState(false);


    const ratonEncima = () => {
        setRatonOver(true)       

    }

    const ratonFuera = () => {
        setRatonOver(false)
        setRatonDblClick(false)        
    }

    const ratonDoble = () => {
        setRatonDblClick(true)
    }

    

    let cuadradoColor;
   
    ratonDblClick ? 
        (cuadradoColor=<div  className='interior negro'></div>) 
        :
        (
            ratonOver ? 
                (cuadradoColor= <div className='interior' style={{backgroundColor:`rgb(${Math.floor(Math.random()*255)},${Math.floor(Math.random()*255)},${Math.floor(Math.random()*255)}`}}></div>)
            :
                (cuadradoColor=<div  className='interior negro'></div>)
        )

   

    return (
        <div  onMouseEnter={ratonEncima} onDoubleClick={ratonDoble} onMouseLeave={ratonFuera} className='cuadro'>
            {cuadradoColor}
        </div>
    );
}

export default Cuadrado;
