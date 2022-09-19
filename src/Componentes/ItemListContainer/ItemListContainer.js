import React from 'react'
import ItemList from '../ItemList/ItemList'
import { useParams } from 'react-router-dom'
import { useEffect } from 'react'
import { useState } from 'react'
import {collection,getDoc,getDocs,query,where} from "firebase/firestore"
import {db} from "../../Utils/firebase"
import { getFetch } from '../helper/helper'

function ItemListContainer() {

const{categoria}=useParams();
const [data,setData]=useState([])

useEffect(()=>{
  const getData= async()=>{
    try{
      let queryRef = !categoria ? collection(db,"items") : query(collection(db,"items"),where("categoria", "==",categoria));
      const response = await getDocs(queryRef)
      const datos = response.docs.map(doc=>{
        const newDoc = {
          ...doc.data(),
          id: doc.id
        }
        return newDoc;
      });
      setData(datos)
    } catch(error){
      console.log(error);
    }
  }
  getData();
},[categoria])



  return (
    <ItemList data={data}/>
  )
}

export default ItemListContainer