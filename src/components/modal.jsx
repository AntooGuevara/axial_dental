import React from 'react';
import './styles/modal.css';

const Modal = ({ cerrar }) => {
        console.log("Modal renderizado");

    return (
        <div className="modal-fondo">
            <div className="modal">
                <button onClick={cerrar}>X</button>

                <h2>Salud y Prevención</h2>

                <p>Chequeo Integral</p>
                <p>Profilaxis Pro</p>
                <p>Protección Infantil</p>
            </div>
        </div>
    );
};

export default Modal;