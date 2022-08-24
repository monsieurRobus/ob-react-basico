import React, { useState } from 'react'

export const OptionalRenderer = () => {

  const [acceso, setAcceso] = useState(true);
  const [nMessage, setnMessage] = useState(0);

  const actualizAcesso = () => {
    setAcceso(!acceso)
  }

  let addMessage = () => {
    setnMessage(nMessage+1)
  }

  let loginAction = () => {
    setAcceso(true)
  }

  let logoutAction = () => {
    setnMessage(0)
    setAcceso(false)
  }

  let LoginBoton = ({loginAction}) => {
    return(
      <button onClick={loginAction}>Login</button>
    )
  }

  let LogoutBoton = ({logoutAction}) => {
    return(
      <button onClick={logoutAction}>Logout</button>
    )
  }
  // let botonsito = <button onClick={actualizAcesso}>{acceso ? "Logout" : "Login"}</button>

  // if(acceso){
  //   botonsito= <button onClick={actualizAcesso}>Logout</button>
  // }
  // else {
  //   botonsito = <button onClick={actualizAcesso}>Login </button>
  // }

  let botonsito = acceso ? ( <LogoutBoton logoutAction={logoutAction}>Logout</LogoutBoton>) 
              : ( <LoginBoton loginAction={loginAction}>Login</LoginBoton>)

  return (
    <div>
       {botonsito}
       {nMessage > 0 && <p>Tienes {nMessage} sin leer</p> }
       {nMessage === 0 && <p>No tienes mensajes</p>}
       {acceso && <button onClick={addMessage}>Añade mensaje</button>}
    </div>
  )
}

export default OptionalRenderer;