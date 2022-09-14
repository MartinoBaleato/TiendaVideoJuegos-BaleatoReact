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

    const addProduct = (product,cantidad )=>{
        debugger;
        const nuevaLista=[...productCartList]
        if(isInCart(product.id)){
            const productIndex = productCartList.findIndex(element=>element.id===product.id);
            nuevaLista[productIndex].cantidad = nuevaLista[productIndex].cantidad + cantidad;
            setProductCartList(nuevaLista)
        }else{
            const nuevoProducto=[...productCartList, product]
            // const nuevaLista = [...productCartList]
            // nuevaLista.push(nuevoProducto);
            setProductCartList(nuevoProducto)
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


    return(
        <CartContext.Provider value={{productCartList,addProduct, deleteProduct,clearCart}}>
            {children}
        </CartContext.Provider>
    )
}