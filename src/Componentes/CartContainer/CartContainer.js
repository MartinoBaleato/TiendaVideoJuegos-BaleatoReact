import React, { useState } from 'react'
import { useContext } from 'react'
import { CartContext } from '../../Context/CartContext'
import { Item } from '../Item/Item'



export const CartContainer = () => {
    const { productCartList, clearCart,deleteProduct } = useContext(CartContext);
    debugger;

    return (
        <>
            {productCartList ?
                productCartList.map((item) =>
                    <>
                        <p>{item.titulo}</p>
                        <p>{item.precio}</p>
                        <p>{item.cantidad}</p>
                        <button onClick={()=>deleteProduct(item.id)}>Elminar Producto</button>
                    </>
                    
                ) : null
            }
     
        </>
    )
}


export default CartContainer;