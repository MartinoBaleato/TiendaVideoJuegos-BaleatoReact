import React, { useState } from 'react'
import { useContext } from 'react'
import { CartContext } from '../../Context/CartContext'
import { Item } from '../Item/Item'
import { CartItem } from "./CartItem/CartItem.js"


export const CartContainer = () => {
    const { productCartList, clearCart } = useContext(CartContext);
    debugger;

    return (
        <>
            {productCartList ?
                productCartList.map((item) =>
                    <>
                        <p>{item.id}</p>
                        <p>{item.titulo}</p>
                        <p>{item.precio}</p>
                        <p>{item.cantidad}</p>
                    </>

                ) : null
            }
        </>
    )
}


export default CartContainer;