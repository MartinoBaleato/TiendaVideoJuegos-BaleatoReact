import React, { useState } from 'react'
import { useContext } from 'react'
import { CartContext } from '../../Context/CartContext'
import { db } from "../../Utils/firebase"
import { collection, addDoc } from 'firebase/firestore'

export const Formulario = () => {
    const { productCartList,getTotalPrice } = useContext(CartContext);
    const [idOrder, setIdOrder] = useState ("");
    const sendOrder =(e)=>{
        e.preventDefault();
    const order ={
        buyer:{
            name: e.target[0].value,
            phone: e.target[1].value,
            email: e.target[2].value
        },
        items: productCartList,
        total: getTotalPrice()
    }
    const queryRef = collection(db,"orders")
    addDoc(queryRef,order).then(respuesta=>setIdOrder(respuesta.id))
    }


  return (
    <div>
    <form onSubmit={sendOrder}>
        <input type="text" placeholder="nombre"></input>
        <input type="text" placeholder="telefono"></input>
        <input type="email" placeholder="email"></input>
        <button type="submit">Terminar Compra</button>
    </form>
        <p>Tu codigo para el seguimiento del pedido: {idOrder}</p>
</div>
  )
}
