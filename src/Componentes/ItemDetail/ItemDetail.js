import React from 'react'
import { useState } from 'react'
import { useEffect } from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import "./ItemDetail.css"
import { useParams } from 'react-router-dom'
import ItemCount from '../ItemCount/ItemCount'
import { useContext } from 'react'
import { CartContext } from '../../Context/CartContext'
import {Link as LinkBoostrap} from "react-router-dom"
import {doc,getDoc} from "firebase/firestore"
import { db } from '../../Utils/firebase'

function ItemDetail() {
    const{detalleJuegos}=useParams();
    const [data,setData]= useState({});

    
    useEffect(()=>{
        const queryRef = doc(db,"items",detalleJuegos)
        getDoc(queryRef).then(response=>{
            const newDoc = {
                ...response.data(),
                id: response.id
            }
            setData(newDoc)
        }).catch(error=>console.log(error))
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