import { createRoot } from 'react-dom/client'
import Inicio from './pages/Inicio'
import { ProductosProvider } from './contexts/ProductosContext'
import './index.css'; // Opcional, para estilos globales

createRoot(document.getElementById('root')).render(
    <ProductosProvider>
    <Inicio />
    </ProductosProvider>
);
