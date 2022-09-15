import React, { useState } from 'react'
import { useContext } from 'react'
import { CartContext } from '../../Context/CartContext'
import { Item } from '../Item/Item'
import {Link as LinkBoostrap} from "react-router-dom"




export const CartContainer = () => {
    const { productCartList, clearCart,deleteProduct } = useContext(CartContext);
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
        </>
    )
}


export default CartContainer;