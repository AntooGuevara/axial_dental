import React, { useState } from 'react';
import './App.css';

// componentes necesarios
import NavBar from './components/NavBar.jsx';
import Informacion from './components/informacion.jsx';
import Fondo from './components/fondo.jsx';
import Contenedores from './components/contenedores.jsx';
import Footer from './components/footer.jsx';
import AdminServicios from './components/adminservicios.jsx'; // Importamos el Admin

function App() {
  
  const [vistaActual, setVistaActual] = useState('cliente');

  return (
    <div className="App">
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />

      {vistaActual === 'admin' ? (
        
        <div>
          
          <button 
            onClick={() => setVistaActual('cliente')}
            style={{
              position: 'fixed',
              top: '15px',
              right: '20px',
              zIndex: 10000,
              padding: '10px 18px',
              backgroundColor: '#304342',
              color: '#fff',
              border: 'none',
              borderRadius: '8px',
              cursor: 'pointer',
              fontWeight: 'bold'
            }}
          >
            ← Volver a la Web
          </button>

          <AdminServicios />
        </div>
      ) : (
        
        <>
          <Fondo />
          <NavBar />
          <Contenedores />
          <Informacion />
          <Footer alAbrirAdmin={() => setVistaActual('admin')} />
        </>
      )}
    </div>
  );
}

export default App;