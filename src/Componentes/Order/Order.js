import React, { useState } from 'react'
import { useContext } from 'react'
import { CartContext } from '../../Context/CartContext'
import { db } from "../../Utils/firebase"
import { collection, addDoc } from 'firebase/firestore'
import { Container,Row, Col } from 'react-bootstrap'

export const Order = () => {
    const { productCartList,getTotalPrice } = useContext(CartContext);
    const [idOrder, setIdOrder] = useState ("");
    const sendOrder =(e)=>{
        e.preventDefault();
    const order ={
        buyer:{
            name: e.target[0].value,
            lastName: e.target[1].value,
            direction: e.target[2].value,
            phone: e.target[3].value,
            email: e.target[4].value
        },
        items: productCartList,
        total: getTotalPrice()
    }
    const queryRef = collection(db,"orders")
    addDoc(queryRef,order).then(respuesta=>setIdOrder(respuesta.id))
    }


  return (
    <Container className='d-flex justify-content-center aling-items-center'>
    <div className='w-25 border m-3 p-3'>
        <form onSubmit={sendOrder}>
            <div className='form-group'>
                <label className='d-flex'>Nombre:</label>
                <input type="text"className='w-100' ></input>
            </div>
            <div className='form-group'>
                <label className='d-flex'>Apellido:</label>
                <input type="text" className='w-100'></input>
            </div>
            <div className='form-group'>
                <label className='d-flex'>Direccion:</label>
                <input type="text" className='w-100'></input>
            </div>
            <div className='form-group'>
                <label className='d-flex'>Telefono:</label>
                <input type="text" className='w-100'></input>    
            </div>
            <div className='form-group'>
                <label className='d-flex'>Email:</label>
                <input type="email" className='w-100'></input>        
            </div>
            <div className='form-group'>
                <button className=' mt-3 w-100 text-center' type="submit">Terminar Compra</button>   
            </div>
    </form>
        <p className='mt-2 btn-btn-primary'>Tu codigo para el seguimiento del pedido: {idOrder}</p>
    </div>
    </Container>
  )
}