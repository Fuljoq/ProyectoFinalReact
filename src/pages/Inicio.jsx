import Card from '../components/Card'
import ProductosContext from '../contexts/ProductosContext'
import React, { useContext, useEffect, useState } from 'react'
import '../index.css'
const Inicio = () => {
  const {productos} = useContext(ProductosContext)
  console.log({productos})
  return (
    <>
    <h1>Productos:</h1>
    <h2>Inicio</h2>
    <h3>Soporte</h3>

{ 
   productos ? productos.map((producto)=>{
    <Card key={producto.id} producto={producto}/>
   }):
   <h1>AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA</h1>
}    </>
  )
}
export default Inicio