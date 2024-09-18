import ProductosContext from '../contexts/ProductosContext';

const Card = ({producto}) => {
  return (
    <div className="card" style="width: 18rem;">
  <div className="card-body">
    <h5 className="card-title">{producto.nombre}</h5>
    <h6 className="card-subtitle mb-2 text-body-secondary">{producto.precio}</h6>
    <p className="card-text">La edad mínima para consumir este producto es de : {producto.edadMinima}</p>
  </div>
</div>
  )
}

export default Card