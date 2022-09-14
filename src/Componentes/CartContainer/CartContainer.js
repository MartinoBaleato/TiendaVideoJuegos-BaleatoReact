import React, { useState } from 'react'
import { useContext } from 'react'
import { CartContext } from '../../Context/CartContext'
import { CartItem }  from "./CartItem/CartItem.js"




function CartContainer() {
  const {productCartList, clearCart} = useContext(CartContext);

  return (

    <div>
      {
        productCartList.map(item=>(
          <CartItem key={item.id} item={item}/>
        ))
      }
      <hr/>
      <button onClick={clearCart()}>Vaciar Carrito</button>
    </div>
  )
}

export default CartContainer