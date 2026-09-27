import React from 'react'
import './styles/contenedores.css';


export const Contenedores = () => {
  return (
 
    <section className='contenedores'>

        <div className='contenedor'>
            <p className='titulo'>Salud y prevención</p>
            <p className='info'>Invertir en prevención es la desición <br/>
                más inteligente para tu sonrisa a largo plazo
            </p>
        </div>
 
        <div className='contenedor'>
            <p className='titulo'>Estética y diseño</p>
            <p className='info'>Transformamos tu sonrisa con tratamientos que <br/>
                realzan tu belleza natural y confianza
            </p>
        </div>
 
        <div className='contenedor'>
            <p className='titulo'>Corrección y restauración</p>
            <p className='info'>Devolvemos funcionalidad y armonía a tu mordida <br/>
                con tratamientos de presición
            </p>
        </div>
    </section>    
  );
};

export default Contenedores;