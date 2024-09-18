import React, {createContext, useContext, useEffect, useState } from 'react'
import { helperPeticionesHttp } from "../helpers/helper-peticiones-http";
// Creando el contexto
const ProductosContext = createContext()
// Armamos el provider
const ProductosProvider = ({ children })=>{
    const url = import.meta.env.VITE_BACKEND_PRODUCTOS
    console.log(url)
    const [productos, setProductos] = useState(null)
    useEffect(() => {
        getAllProductos()
    }, [])
    console.log(helperPeticionesHttp)
    const getAllProductos = async ()=>{
        try {
           const prods = await helperPeticionesHttp(url, {})
           console.log(prods)
           setProductos(prods)
        } catch (error) {
            console.log('getAllProductos', error)
        }
    }
    const data = {
        productos
    }
    return <ProductosContext.Provider value={data}>{children}</ProductosContext.Provider>

}
export { ProductosProvider }
export default ProductosContext