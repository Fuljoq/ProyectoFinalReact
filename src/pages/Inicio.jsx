import Card from '../components/Card'
import ProductosContext from '../contexts/ProductosContext'
import React, { useContext, useEffect, useState } from 'react'
const Inicio = () => {
  const {productos} = useContext(ProductosContext)
  return (
    <>
    <h1>Productos:</h1>
{ 
   productos && productos.map((producto)=>{
    <Card key={producto.id} producto={producto}/>
   })
}    </>
  )
}