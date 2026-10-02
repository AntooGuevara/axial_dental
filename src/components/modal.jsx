import React from 'react';
import './styles/modal.css';

const Modal = ({ cerrar }) => {
    return (
        <div className="modal-fondo">

            <div className="modal">

                <div className="modal-header">
                    <div className="modal-icono">
                        🛡
                    </div>

                    <div className="modal-titulo">
                        <h2>Salud y Prevención</h2>
                        <p>3 paquetes disponibles</p>
                    </div>

                    <button className="modal-cerrar" onClick={cerrar}>
                        ×
                    </button>

                </div>


                
                <div className="paquetes">
                    <div className="paquete">

                        <div className="check">
                            ✓
                        </div>

                        <div className="paquete-info">
                            <h3>Chequeo Integral</h3>
                            <p>
                                Revisión completa, radiografías y diagnóstico personalizado.
                            </p>
                        </div>

                        <span className="precio">$--</span>

                    </div>


                    <div className="paquete">

                        <div className="check">
                            ✓
                        </div>

                        <div className="paquete-info">
                            <h3>Profilaxis</h3>
                            <p>
                                Limpieza profunda, eliminación de sarro y pulido dental.
                            </p>
                        </div>

                        <span className="precio">$--</span>

                    </div>


                    <div className="paquete">

                        <div className="check">
                            ✓
                        </div>

                        <div className="paquete-info">
                            <h3>Protección Infantil</h3>
                            <p>
                                Selladores, flúor y educación en higiene para niños.
                            </p>
                        </div>

                        <span className="precio">$--</span>

                    </div>

                </div>


                
                <div className="modal-footer">

                    <button className="boton-cita">
                        
                        Agendar cita ahora
                    </button>

                    <p>
                        O llama al <u> +52 618 --- ----</u>
                    </p>

                </div>

            </div>

        </div>
    );
};

export default Modal;