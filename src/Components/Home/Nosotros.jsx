import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import './Nosotros.css';
import { Link } from 'react-router-dom';

function Nosotros() {
    const settings = {
        dots: true,
        infinite: true,
        speed: 700,
        slidesToShow: 3, // Ajustado para mostrar más imágenes a la vez
        slidesToScroll: 2,
        autoplay: true,
        responsive: [
          {
            breakpoint: 1024,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 1,
              infinite: true,
              dots: true
            }
          },
          {
            breakpoint: 600,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1,
              initialSlide: 1
            }
          }
        ]
    };
    return(
        <div className="nosotros-container">
            <div className="intro">
                <h1>SOBRE NOSOTROS</h1>               
                <p>“MORENI HNOS. S.R.L.” es una empresa patagónica que brinda servicios y soluciones a gran parte de los barcos que arriban a Puertos Patagónicos comunicados entre Bahía Blanca y Río Gallegos.
                    En toda su trayectoria siempre ha tenido la premisa de satisfacer las necesidades y requisitos del cliente a través de la provisión de servicios con altos niveles de confiabilidad.
                    Es por esta razón que la empresa obtuvo la aprobación y calificación de distintos fabricantes...
                </p>
                <Link to="/Nosotros">
                    <button className="vermas">VER MAS</button>
                </Link>
            </div>

            <div className="certificaciones">
                <Slider {...settings}>
                    <div>
                        <img src="/img/pna1.jpg" alt="Certificación PNA" />
                    </div>
                    <div>
                        <img src="/img/iso1.png" alt="Certificación ISO 9001" />
                    </div>
                    <div>
                        <img src="/img/iso2.png" alt="Certificación ISO 9001" />
                    </div>
                    <div>
                        <img src="/img/iso3.png" alt="Certificación ISO 9001" />
                    </div>
                    <div>
                        <img src="/img/iram.png" alt="Certificación IRAM 3517-2"/>
                    </div>
                </Slider>                             
            </div>
        </div>
    )
}

export default Nosotros;
