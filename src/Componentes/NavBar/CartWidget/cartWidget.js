import React from "react"
import { useContext } from 'react'
import { CartContext } from "../../../Context/CartContext";
export const CartWidget =()=>{
    const {getTotalProducts,productCartList} = useContext(CartContext)

    return(
        <div>
            {
                productCartList.length>0 &&
            <span className="bi bi-cart4">
                {getTotalProducts()}
            </span>
            }
           
        </div>    
    );
}

export default CartWidget;