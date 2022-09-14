import React from 'react'
import { useContext } from 'react'
import { CartContext } from '../../../Context/CartContext'


export const CartItem = (item) => {

    debugger
    // const { deleteProduct } = useContext(CartContext)
    return (
        <>
            <p>
                {item.id}
                {item.titulo}
            </p>

        </>
    )
}

