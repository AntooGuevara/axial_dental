import React, { useState } from 'react';

// Componente global desde core/
import NavBar from '../../core/components/NavBar.jsx';

// Componentes del módulo landing
import Fondo from './components/fondo.jsx';
import Contenedores from './components/contenedores.jsx';
import Informacion from './components/informacion.jsx';
import Modal from './components/modal.jsx';

export function LandingPage() {
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedCategoria, setSelectedCategoria] = useState(null);

  const handleOpenModal = (categoria) => {
    setSelectedCategoria(categoria);
    setModalOpen(true);
  };

  const handleCloseModal = () => {
    setModalOpen(false);
  };

  return (
    <div className="landing-page">
      <Fondo />
      <NavBar />
      <Contenedores onOpenModal={handleOpenModal} />
      <Informacion />

      {modalOpen && (
        <Modal 
          isOpen={modalOpen} 
          onClose={handleCloseModal} 
          categoria={selectedCategoria} 
        />
      )}
    </div>
  );
}

export default LandingPage;