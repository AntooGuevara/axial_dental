import React, { useState } from 'react';
import './styles/contenedores.css';
import Modal from './modal.jsx';
import { serviciosData } from './data/serviciosData.js'; //eso es como una db por el momento NO HAY NADA DE BACK AQUI

export const Contenedores = () => {
  const [modalAbierto, setModalAbierto] = useState(null);

  return (
    <>
      <section className='contenedores'>
        {Object.entries(serviciosData).map(([clave, categoria]) => (
          <div className='contenedor' key={clave}>
            <p className='titulo'>{categoria.titulo}</p>
            <p className='info'>{categoria.descripcion}</p>

            {categoria.servicios.map((servicio) => (
              <div className='fila-servicio' key={servicio.nombre}>
                <p className='servicios'>{servicio.nombre}</p>
                <span className='precios'>{servicio.precio}</span>
              </div>
            ))}

            <div className='botones'>
              <button 
                className='botones-agendar'
                onClick={() => setModalAbierto(clave)}
              >
                Ver paquetes y agendar
              </button>
            </div>
          </div>
        ))}
      </section>

      {/* Tu mapa y horarios continúan igual... */}
        <section className='mapa'>

        <div className='mapa-contenedor'>

        {/* 
        dirección del local sacada directamente de googlemaps

        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d910.9428332814183!2d-104.65160073041874!3d24.039127523442275!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x869bb7d0ecdbbe37%3A0xb0460762e498cb8!2sPedro%20%C3%81vila%20Nevarez%20605%2C%20Armando%20del%20Castillo%20Franco%2C%2034214%20Durango%2C%20Dgo.!5e0!3m2!1ses!2smx!4v1790912035799!5m2!1ses!2smx" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="strict-origin-when-cross-origin"></iframe>*/}


            <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d910.9428332814183!2d-104.65160073041874!3d24.039127523442275!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x869bb7d0ecdbbe37%3A0xb0460762e498cb8!2sPedro%20%C3%81vila%20Nevarez%20605%2C%20Armando%20del%20Castillo%20Franco%2C%2034214%20Durango%2C%20Dgo.!5e0!3m2!1ses!2smx!4v1790912035799!5m2!1ses!2smx"
            width="600"
            height="450"
            style={{ border: 0 }}
            title="Mapa de ubicación de Axial Dental"
            allowFullScreen
            loading="lazy"
            referrerPolicy="strict-origin-when-cross-origin"
            ></iframe>
        </div>    

        <div className='horarios'>

            <div className='fila-horario'>
                <p className='titulo'>Horario de atención</p>
            </div>

            <div className='fila-horario'>

                <p className='info'>Lunes-Viernes</p>
                <span className='horarios'>8:00 - 19:00</span>
            </div>

            <div className='fila-horario'>

                <p className='info'>Sábado</p>
                <span className='horarios'>9:00 - 15:00</span>
            </div>

            <div className='fila-horario'>

                <p className='info'>Domingo</p>
                <span className='horarios'>Cerrado</span>
            </div>


        </div>
    </section>
      {modalAbierto && (
        <Modal 
          tipo={modalAbierto} 
          cerrar={() => setModalAbierto(null)} 
        />
      )}
    </>
  );
};

export default Contenedores;