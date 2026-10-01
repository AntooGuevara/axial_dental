import React , {useState} from 'react'
import './styles/contenedores.css';
import Modal from './modal.jsx';




export const Contenedores = () => {

    const [modalAbierto, setModalAbierto] = useState(false);   
    console.log(modalAbierto) 

  return (

    <>
    
    {/* contenedores de información */}
    <section className='contenedores'>
        

        <div className='contenedor'>

            <p className='titulo'>Salud y prevención</p>
            <p className='info'>Invertir en prevención es la desición <br/>
                más inteligente para tu sonrisa a largo plazo
            </p>

            <div className='fila-servicio'>
                <p className='servicios'>Chequeo integral</p>
                <span className='precios'> --$</span>
            </div>
            <div className='fila-servicio'>
                <p className='servicios'>Profilaxis</p>
                <span className='precios'> --$</span>
            </div>
            <div className='fila-servicio'>
                <p className='servicios'>Protección infantil</p>
                <span className='precios'> --$</span>
            </div>
            <div className='botones'>

                <button className='botones-agendar'  
                onClick={() => setModalAbierto(true)}>
                    Ver paquetes y agendar

                </button>
            </div>
        </div>
 
        <div className='contenedor'>
            <p className='titulo'>Estética y diseño</p>
            <p className='info'>Transformamos tu sonrisa con tratamientos que <br/>
                realzan tu belleza natural y confianza
            </p>
            <div className='fila-servicio'>
                <p className='servicios'>Sonrisa radiante</p>
                <span className='precios'> --$</span>
            </div>
            <div className='fila-servicio'>
                <p className='servicios'>Diseño express</p>
                <span className='precios'> --$</span>
            </div>
            <div className='fila-servicio'>
                <p className='servicios'>Microcarillas de resina</p>
                <span className='precios'> --$</span>
            </div>

            <div className='botones'>
                <button className='botones-agendar'
                onClick={() => setModalAbierto(true)}
                >Ver paquetes y agendar</button>
            </div>

        </div>
 
        <div className='contenedor'>
            <p className='titulo'>Corrección y restauración</p>
            <p className='info'>Devolvemos funcionalidad y armonía a tu mordida <br/>
                con tratamientos de presición
            </p>

            <div className='fila-servicio'>
                <p className='servicios'>Ortodoncia</p>
                <span className='precios'> --$</span>
            </div>
            <div className='fila-servicio'>
                <p className='servicios'>Restauración</p>
                <span className='precios'> --$</span>
            </div>
            <div className='fila-servicio'>
                <p className='servicios'>Encías sanas</p>
                <span className='precios'> --$</span>
            </div>

            <div className='botones'>
                <button className='botones-agendar'
                onClick={() => setModalAbierto(true)}
                >Ver paquetes y agendar</button>
            </div>

        </div>
    </section>  
    {/* contenedor del mapa y horarios */}

    <section className='mapa'>

        <div className='mapa-contenedor'>
            <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3643.771367830732!2d-104.65095699999999!3d24.0391263!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x869bb7d0ecdbbe37$3A0xb0460762e498cb8!2sPedro$20$C3$81vila$20Nevarez$20605$2C$20Armando$20del$20Castillo$20Franco$2C$2034214$20Durango$2C$20Dgo.!5e0!3m2!1ses!2smx!4v1790580975271!5m2!1ses!2smx"
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
        <Modal cerrar={() => setModalAbierto(false)} />
    )}
        </>

    
    
  );
  
};

export default Contenedores;