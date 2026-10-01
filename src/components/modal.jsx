import React from 'react';
import './styles/modal.css';

const Modal = ({ tipo, cerrar }) => {
        console.log("Modal renderizado");

    return (
        <div className="modal-fondo">
            <div className="modal">
                <button onClick={cerrar}>X</button>

                <h2>
                    {tipo === 'prevencion' && 'Salud y Prevención'}
                    {tipo === 'estetica' && 'Estética y Diseño'}
                    {tipo === 'restauracion' && 'Corrección y Restauración'}
                </h2>
            </div>
        </div>
    );
};

export default Modal;