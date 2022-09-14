import React from 'react'
import { useContext } from 'react'
import { CartContext } from '../../../Context/CartContext'


export const CartItem =(item)=>{
    
    const {deleteProduct} = useContext(CartContext)
    return (
        <div>
            CartItem
        {
          <div>
          <img>{item.image}</img>
          <p>{item.titulo}</p>
          <p>{item.precio}</p>
          <p>{item.cantidad}</p>
          <button onClick={()=>deleteProduct(item.id)}>Elminar Producto</button>
          </div>  
        }
    </div>
  )
}

