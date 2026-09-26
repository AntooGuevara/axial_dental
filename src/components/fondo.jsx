import React from 'react';
import consultorio from './images/consultorio.jpg';
import './styles/fondo.css';

const Fondo = () => {
    return (
        <section className="fondo">

            <img
                className="fondo-imagen"
                src={consultorio}
                alt="Consultorio dental"
            />

            <div className="fondo-overlay"></div>

            <div className="fondo-contenido">
                <p>BIENVENIDO A</p>

                <h1>
                    Tu Sonrisa <em>Perfecta</em>
                </h1>

                <span>
                    Tu sonrisa, nuestra pasión. Cuidado dental de excelencia
                    en un ambiente sereno y profesional.
                </span>
            </div>

        </section>
    );
};

export default Fondo;