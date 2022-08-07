import React, { useEffect } from 'react';

const AllCycles = () => {

    useEffect(() => {
        console.log("Componente creado")
        const intervalID = setInterval(()=> {
            document.title = `${new Date()}`;
            console.log("actualización")
        },1000)
        return () => {
            console.log("Componente va a desaparecer")
            document.title="Tiempo finito"
            clearInterval(intervalID);
        };
    }, []);

    return (
        <div>
            
        </div>
    );
}

export default AllCycles;
