import React from "react";
import {Link as LinkBoostrap} from "react-router-dom"
import "./Item.css"


export const Item =({titulo,image,precio,id})=>{
    
    return(
        <LinkBoostrap className="letra" to={`/Item/${id}`}>
        <div className="card text-center bg-dark mt-5">
            <img src={image} alt=""></img>
            <div className="card-body text-light ">
                <h4 className="card-title">{titulo}</h4>
                <p className="card-text">${precio}</p>
                <button className="btn btn-outline-secondary">Comprar Ahora</button>
            </div>
        </div>
        </LinkBoostrap>
      
    )
}