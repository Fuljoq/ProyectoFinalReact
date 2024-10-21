import ProductosContext from '../contexts/ProductosContext'
const Card = ({producto}) => {
  console.log(producto)
  console.log('hola')
  return (
<div>
  <h1>{producto.nombre}</h1>
          </div>
  )
}

export default Card