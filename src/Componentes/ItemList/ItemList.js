import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import { Item } from '../Item/Item'
import {Link as LinkBoostrap} from "react-router-dom"
import "./ItemList.css"




function ItemList({data}) {

  return (
    <Container className='body'>
        <Row>
            {
                data.map(data=>(
                    <LinkBoostrap className='col-md-4 letra' key={data.id} to={`/Item/${data.id}`}>
                        <Col>
                            <Item  titulo={data.titulo} image={data.image} precio={data.precio} id={data.id}/>
                        </Col>
                    </LinkBoostrap> 
                ))
            }
        </Row>
    </Container>
  )
}

export default ItemList