import React, { useState } from 'react'
import { useContext } from 'react'
import { CartContext } from '../../Context/CartContext'
import { Item } from '../Item/Item'
import {Link as LinkBoostrap} from "react-router-dom"
import { db } from "../../Utils/firebase"
import { collection, addDoc } from 'firebase/firestore'



export const CartContainer = () => {
    const { productCartList, clearCart,deleteProduct,getTotalPrice } = useContext(CartContext);
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

    
    if (productCartList.length === 0) {

        return (
            <div>
            <h5 className='text-center py-5 fw-bold'>No tienes productos en el carrito.</h5>
            <LinkBoostrap to="/" className='text-center'>
            <button>Volver a la pagina de inicio</button>
            </LinkBoostrap>
            </div>
        )

    }

    return (
        <>
            {productCartList ?
                productCartList.map((item) =>
                <table className='table table-light table-hover m-0'>
                    <tbody>
                        <tr>
                            <td><img height="150px" width="300px" src={item.image} alt={item.titulo}></img></td>
                            <td>{item.titulo}</td>
                            <td>${item.precio}</td>
                            <td>Cantidad:{item.cantidad}</td>
                            <td>Total:{item.total}</td>
                            <td><button onClick={() => deleteProduct(item.id)}>Elminar Producto</button></td>
                        </tr>
                    </tbody>
                </table>
    
                    
                ) : null
            }
            <hr/>

      <button onClick={()=>clearCart()}>Vaciar Carrito</button> 
      <p>Precio total ${getTotalPrice()}</p> 
            <form onSubmit={sendOrder}>
                <input type="text" placeholder="nombre"></input>
                <input type="text" placeholder="telefono"></input>
                <input type="email" placeholder="email"></input>
                <button type="submit">Terminar Compra</button>
            </form>
            <p>Tu codigo para el seguimiento del pedido: {idOrder}</p>
        </>
    )
}


export default CartContainer;