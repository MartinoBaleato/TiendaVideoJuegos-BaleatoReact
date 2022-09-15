import React from "react";
import Fifa23 from "../Imgs/Fifa23.jpg"
import CallOfDuty from "../Imgs/callofduty.jpg"
import GranTurismo from "../Imgs/granTurismo.jpg"
import Outlast from "../Imgs/outlas.jpg"
import GtaV from "../Imgs/gtav.jpg"
import FarCry6 from "../Imgs/farcry.jpg"
import ForzaHorizon from "../Imgs/forzahorizon.jpg"

 export const juegos = [
    {id: 1, titulo:"Fifa 23",detalle:"Juego mas popular de futbol en el mundo" , precio:10000,image: Fifa23, categoria:"Deporte"},
    {id: 2, titulo:"Call of Duty Vanguard" ,detalle:"Juego de accion ultra realista", precio:8000, image: CallOfDuty, categoria:"Accion"},
    {id: 3, titulo:"OutLast 2" ,detalle:"Juego de Terror primera persona", precio:6000, image: Outlast, categoria:"Terror"},
    {id: 4, titulo:"Grand Theft Auto V" ,detalle:"Uno de los juegos mas populares de la ultima epoca", precio:4000, image: GtaV, categoria:"Accion"},
    {id: 5, titulo:"FarCry 6" ,detalle:"Juego de Accion", precio:7500, image: FarCry6, categoria:"Accion"},
    {id: 6, titulo:"Gran Turismo 7" ,detalle:"Juego de carreras", precio:8000, image: GranTurismo, categoria:"Carreras"}
];


export const getFetch = new Promise((resolve, reject) => {
    setTimeout(()=>{
        resolve(juegos)
        reject(err=>console.log(err))
    },2000)
})

