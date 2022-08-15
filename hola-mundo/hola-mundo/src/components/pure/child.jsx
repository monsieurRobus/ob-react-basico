import React, { useRef } from 'react';


const Child = ({ name,send,update }) => {

    const mensajeRef = useRef('')
    const nameRef = useRef('')

    function pressButton(){
        const text = mensajeRef.current.value;
        alert(`Texto hola${text}`)
    }

    function enviaForm(e){
        e.preventDefault();
        update(nameRef.current.value)

    }

    function pressButtonsParams(text="hola")
    {
        alert(`Texto ${text}`)
    }

    return (
        <div style={{background:'cadetblue',padding:'5px'}}>
            <p onMouseOver={()=>{console.log("Mouse over")}}>Componente hijo</p>
            <button onClick={()=>{
                console.log("boton 1 pulsado")
            }}>
                Botón 1
            </button>
            <button onClick={pressButton}>
                Botón 2
            </button>
            <button onClick={()=>pressButtonsParams('hello')}>
                Botón 3
            </button>
            <input placeholder="Dile algo a tu padre" 
            onFocus={()=>console.log('Entrada enfocada')}
            onChange={(e)=> console.log('Entrada cambiada',e.target.value)}
            onCopy={(e)=>console.log('Algo se ha copiado en la entrada')}
            
            ref={mensajeRef}
            />
            <button onClick={()=> send(mensajeRef.current.value)}>
                Send Message 
            </button>
            <div style={{marginTop:'20px'}}>
                <form onSubmit={enviaForm}>
                    <input ref={nameRef} placeholder='Nuevo nombre'/>
                    <button type='submit'>Actualiza Nombre</button>
                </form>
            </div>
        </div>
    );
}

export default Child;