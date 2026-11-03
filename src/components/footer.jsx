import React from 'react';
import './styles/footer.css';

export const Footer = ({ alAbrirAdmin }) => {
  return (
    <footer className="footer-pagina">
      <div className="footer-contenido">
        <p>© 2026 Axial Dental. Todos los derechos reservados.</p>

        <button className="btn-acceso-admin" onClick={alAbrirAdmin}>
          Acceso Administrador
        </button>
      </div>
    </footer>
  );
};

export default Footer;