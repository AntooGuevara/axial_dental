import React, { useState } from 'react';
import './App.css';

// Componentes principales
import NavBar from './components/NavBar.jsx';
import Informacion from './components/informacion.jsx';
import Fondo from './components/fondo.jsx';
import Contenedores from './components/contenedores.jsx';
import Footer from './components/footer.jsx';

// Importamos el NUEVO Dashboard en lugar de AdminServicios
import AdminDashboard from './components/AdminDashboard.jsx';

function App() {
  const [vistaActual, setVistaActual] = useState('cliente');

  return (
    <div className="App">
      {vistaActual === 'admin' ? (
        /* Renderizamos el nuevo Dashboard con Sidebar claro */
        <AdminDashboard alVolverSitio={() => setVistaActual('cliente')} />
      ) : (
        /* Vista Pública */
        <>
          <Fondo />
          <NavBar alAbrirAdmin={() => setVistaActual('admin')} />
          <Contenedores />
          <Informacion />
          <Footer />
        </>
      )}
    </div>
  );
}

export default App;