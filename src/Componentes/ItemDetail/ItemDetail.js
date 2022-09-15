import React from 'react'
import { useState } from 'react'
import { useEffect } from 'react'
import { getFetch } from '../helper/helper'
import { Container, Row, Col } from 'react-bootstrap'
import "./ItemDetail.css"
import { useParams } from 'react-router-dom'
import ItemCount from '../ItemCount/ItemCount'
import { useContext } from 'react'
import { CartContext } from '../../Context/CartContext'
import {Link as LinkBoostrap} from "react-router-dom"

function ItemDetail() {
    const{detalleJuegos}=useParams();
    const [data,setData]= useState({});

    
    useEffect(()=>{
        getFetch.then(data=>{
            if(detalleJuegos===undefined){
                setData(data)
            }else{    
                const nuevaLista = data.find(juegos=>juegos.id === parseInt((detalleJuegos)));
                setData(nuevaLista)
            }
            })
        },[detalleJuegos])
    
        const{addProduct} = useContext(CartContext);
        const [cantidad, setCantidad] = useState(0)

        const onAdd=(count)=>{
            const nuevoProducto={...data,cantidad:count}
            addProduct(nuevoProducto, count)
            setCantidad(count);
        }

  return (
    <Container>  
    <Row className="detalle mt-5">
        <Col className="col-md-6">
        <div className="card text-center bg-dark">
            <img src={data.image} alt=""></img>
            <div className="card-body text-light ">
                <h4 className="card-title">{data.titulo}</h4>
                <p className="card-text">${data.precio}</p>
                <p className="card-text">{data.detalle}</p>
                <p className="card-text">Id: {data.id}</p>
                <ItemCount initial={1} stock={5} onAdd={onAdd}/>
            </div>
            {
                cantidad>0 &&
                <LinkBoostrap to="/carrito">
                <button>Terminar mi compra</button>
                </LinkBoostrap>
            }
        </div>
        </Col>
    </Row>
</Container>
  )
}

export default ItemDetail