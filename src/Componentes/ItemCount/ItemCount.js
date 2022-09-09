import React from "react";
import { useState, useEffect } from "react";

function ItemCount({initial,stock,onAdd}) {
    const[count,setCount]=useState(initial);

    const decrementar=()=>{
        setCount(count-1)
    }

    const aumentar=()=>{
        setCount(count+1)
    }

    useEffect(()=>{
        setCount(parseInt(initial))
    },[initial])

  return (
    <div>
        <button disabled={count <=1}onClick={decrementar}>-</button>
        <span>{count}</span>
        <button disabled={count >= stock}onClick={aumentar}>+</button>
        <div>
            <button disabled={stock <= 0} onClick={()=> onAdd(count)}>Agregar al carrito</button>
        </div>
    </div>
  )
}

export default ItemCount