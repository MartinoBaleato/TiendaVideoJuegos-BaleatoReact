import React, { useState } from 'react'
import { useContext } from 'react'
import { CartContext } from '../../Context/CartContext'
import { Item } from '../Item/Item'
import {Link as LinkBoostrap} from "react-router-dom"
import Button from 'react-bootstrap/Button';
import { Container } from 'react-bootstrap'
import "./CartContainer.css"



export const CartContainer = () => {
    const { productCartList, clearCart,deleteProduct,getTotalPrice } = useContext(CartContext);

    
    if (productCartList.length === 0) {

        return (
            <div>
            <h5 className='text-center py-5 fw-bold'>No tienes productos en el carrito.</h5>
            <LinkBoostrap to="/" className='letra'>
            <Container className='d-flex justify-content-center aling-items-center'>
            <Button variant="info" className='py-3 fw-bold'>Volver a la pagina de inicio</Button>
            </Container>
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
                            <td><Button  onClick={() => deleteProduct(item.id)} variant="outline-danger">Elminar Producto</Button></td>
                        </tr>
                    </tbody>
                </table>
    
                    
                ) : null
            }
            <hr/>
            <Container className='d-flex justify-content-center aling-items-center'>
                <div className='d-flex justify-content-center aling-items-center'>
                    <p>Precio total ${getTotalPrice()}</p> 
                    <p><Button onClick={()=>clearCart()} variant="outline-danger">Vaciar Carrito</Button></p>
                    <LinkBoostrap to="/order"><Button variant='Primary'>Terminar Compra</Button></LinkBoostrap>
                </div>
            </Container>
        </>
    )
}


export default CartContainer;