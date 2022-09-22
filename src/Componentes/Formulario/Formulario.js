import React from 'react'

export const Formulario = () => {

    const sendOrder =(e)=>{
        e.preventDefault();
    }

  return (
    <div>
        <form onSubmit={sendOrder}>
            <input type="text" placeholder="nombre"></input>
            <input type="text" placeholder="telefono"></input>
            <input type="email" placeholder="email"></input>
            <button type="submit">enviar orden</button>
        </form>
    </div>
  )
}
