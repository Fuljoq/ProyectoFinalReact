import { useState } from 'react';

const productosIniciales = [
  { id: 1, nombre: 'Producto 1', precio: 10.000 },
  { id: 2, nombre: 'Producto 2', precio: 20.000 },
  { id: 3, nombre: 'Producto 3', precio: 30.423 },
];

const Carrito = () => {
  const [carrito, setCarrito] = useState([]);

  const agregarAlCarrito = (producto) => {
    setCarrito((prevCarrito) => {
      const productoExistente = prevCarrito.find(item => item.id === producto.id);
      if (productoExistente) {
        return prevCarrito.map(item =>
          item.id === producto.id ? { ...item, cantidad: item.cantidad + 1 } : item
        );
      } else {
        return [...prevCarrito, { ...producto, cantidad: 1 }];
      }
    });
  };

  const eliminarDelCarrito = (id) => {
    setCarrito((prevCarrito) =>
      prevCarrito.filter((producto) => producto.id !== id)
    );
  };

  const total = carrito.reduce((acc, item) => acc + item.precio * item.cantidad, 0);

  return (
    <div>
      <h1>Carrito de compras</h1>
      <h2>Productos:</h2>
      {productosIniciales.map((producto) => (
        <div key={producto.id}>
          <p>{producto.nombre} - ${producto.precio}</p>
          <button onClick={() => agregarAlCarrito(producto)}>Agregar al carrito</button>
        </div>
      ))}

      <h2>Tu carrito:</h2>
      {carrito.length === 0 ? (
        <p>El carrito está vacío</p>
      ) : (
        carrito.map((producto) => (
          <div key={producto.id}>
            <p>
              {producto.nombre} - ${producto.precio} x {producto.cantidad}
            </p>
            <button onClick={() => eliminarDelCarrito(producto.id)}>Eliminar</button>
          </div>
        ))
      )}

      <h2>Total: ${total}</h2>
    </div>
  );
};

export default function Home() {
  return (
    <div>
      <Carrito />
    </div>
  );
}
