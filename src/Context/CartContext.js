import { createContext } from "react";
import { juegos } from "../Componentes/helper/helper"
import { useState } from "react";

export const CartContext = createContext();


export const CartProvider =({children})=>{
    const [productCartList, setProductCartList] = useState([])


    const isInCart= (id)=> {
        const elementExists = productCartList.some((element)=>element.id===id)
        return elementExists;
    }

    const addProduct = (product,cantidad,)=>{
        debugger;
        const nuevaLista=[...productCartList]
        if(isInCart(product.id)){
            const productIndex = productCartList.findIndex(element=>element.id===product.id);
            nuevaLista[productIndex].cantidad = nuevaLista[productIndex].cantidad + cantidad;
            nuevaLista[productIndex].total = nuevaLista[productIndex].cantidad *nuevaLista[productIndex].precio
            setProductCartList(nuevaLista)
        }else{
            const nuevoProducto={...product, cantidad, total: cantidad*product.precio}
            const nuevaLista = [...productCartList]
            nuevaLista.push(nuevoProducto);
            setProductCartList(nuevaLista)
        }
    }
    const deleteProduct = (idProduct)=>{
        const copiaArray = [...productCartList]
        const nuevoArreglo = copiaArray.filter(elm=>elm.id !== idProduct)
        setProductCartList(nuevoArreglo);
    }

    const clearCart =()=>{
        setProductCartList([])
    }

    const getTotalProducts =()=>{
        const totalProducts = productCartList.reduce((acc,item)=>acc + item.cantidad,0);
        return totalProducts
    }


    return(
        <CartContext.Provider value={{productCartList,addProduct, deleteProduct,clearCart, getTotalProducts}}>
            {children}
        </CartContext.Provider>
    )
}