import React from 'react'
import ItemList from '../ItemList/ItemList'
import { useParams } from 'react-router-dom'
import { useEffect } from 'react'
import { useState } from 'react'
import { getFetch } from '../helper/helper'


function ItemListContainer() {

const{tipoJuegos}=useParams();
const [data,setData]=useState([])

useEffect(()=>{
    getFetch.then(data=>{
    if(tipoJuegos===undefined){
        setData(data)
    }else{    
        const nuevaLista = data.filter(juegos=>juegos.categoria === tipoJuegos);
        setData(nuevaLista)
    }
    })
},[tipoJuegos])


  return (
    <ItemList data={data}/>
  )
}

export default ItemListContainer