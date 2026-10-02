import React from 'react';
import './styles/modal.css';
import logo from './images/logo_sin_fondo.png';



//datos que agarra del contenedores.jsx

const datos = {
    prevencion: {
        titulo: 'Salud y Prevención',
        paquetes: [
            {
                nombre: 'Chequeo Integral',
                descripcion: 'Revisión completa, radiografías y diagnóstico personalizado.',
                precio: '$--'
            },
            {
                nombre: 'Profilaxis',
                descripcion: 'Limpieza profunda, eliminación de sarro y pulido dental.',
                precio: '$--'
            },
            {
                nombre: 'Protección Infantil',
                descripcion: 'Selladores, flúor y educación en higiene para niños.',
                precio: '$--'
            }
        ]
    },

    estetica: {
        titulo: 'Estética y Diseño',
        paquetes: [
            {
                nombre: 'Sonrisa Radiante',
                descripcion: 'Tratamiento para mejorar el aspecto de tu sonrisa.',
                precio: '$--'
            },
            {
                nombre: 'Diseño Express',
                descripcion: 'Diseño de sonrisa personalizado.',
                precio: '$--'
            },
            {
                nombre: 'Microcarillas de Resina',
                descripcion: 'Mejora estética de los dientes mediante resina.',
                precio: '$--'
            }
        ]
    },

    restauracion: {
        titulo: 'Corrección y Restauración',
        paquetes: [
            {
                nombre: 'Ortodoncia',
                descripcion: 'Corrección de la posición de los dientes y mordida.',
                precio: '$--'
            },
            {
                nombre: 'Restauración',
                descripcion: 'Recuperación de la función y apariencia dental.',
                precio: '$--'
            },
            {
                nombre: 'Encías Sanas',
                descripcion: 'Tratamientos para mantener la salud de las encías.',
                precio: '$--'
            }
        ]
    }
};



const Modal = ({ tipo, cerrar }) => {

    const contenido = datos[tipo];


    return (
        <div className="modal-fondo">

            <div className="modal">

                <div className="modal-header">
                    <div className="modal-icono">
                        <img src={logo} alt="modal-icono" />
                    </div>

                    <div className="modal-titulo">
                        <h2>{contenido.titulo}</h2>
                        <p>{contenido.paquetes.length} paquetes disponibles</p>
                    </div>

                    <button className="modal-cerrar" onClick={cerrar}>
                        ×
                    </button>

                </div>


                
                {/* aquí use funciones de javascript para agarrar datos del menú principal y que se actualicen automaticamente para no reutilizar tanto código */ }
                 
               <div className="paquetes">

                    {contenido.paquetes.map((paquete) => (

                        <div className="paquete" key={paquete.nombre}>

                            <div className="check">
                                ✓
                            </div>

                            <div className="paquete-info">

                                <h3>{paquete.nombre}</h3>

                                <p>{paquete.descripcion}</p>

                            </div>

                            <span className="precio">
                                {paquete.precio}
                            </span>

                        </div>

                    ))}

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