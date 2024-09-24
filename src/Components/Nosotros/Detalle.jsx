import './Detalle.css';
import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';


const Detalle = () => {

  const settings = {
    dots: true,
    infinite: true,
    speed: 700,
    slidesToShow: 3, // Ajustado para mostrar más imágenes a la vez
    slidesToScroll: 1,
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
  return (
    <div className="detalle">
      <h1>SOBRE NOSOTROS</h1>

      <div className='intro-detalle'>
      <img src="/img/logo-color.JPG" alt="logo moreni"/>
        <p>"MORENI HNOS. S.R.L." es una empresa patagónica que desde 1986 brinda en forma continua el servicio de mantenimiento de balsas 
         y dispositivos salvavidas. La empresa, posee dos estaciones de mantenimiento una en la ciudad de Puerto Madryn y otra en la 
         localidad de Punta Alta, Provincia de Buenos aires, ambas aprobadas por la Prefectura Naval Argentina, según la resolución 761(18)
         de la Organización Marítima Internacional (OMI). La firma brinda servicios y soluciones a gran parte de los barcos que arriban a 
         Puertos Patagónicos comunicados entre Bahía Blanca y Río Gallegos. En toda su trayectoria siempre ha tenido la premisa de 
         satisfacer las necesidades y requisitos del cliente a través de la provisión de servicios con altos niveles de confiabilidad. 
         Es por esta razón que la empresa obtuvo la aprobación y calificación de distintos fabricantes de dispositivos salvavidas para 
         realizar el servicio de tan importantes medios de seguridad, salvamento y supervivencia. Partiendo de la misma premisa, y cómo 
         resultado de la mejora continua del sistema de gestión de calidad, en 2008 se desarrolló una nueva unidad de negocios dedicada al 
         mantenimiento de extintores y sistemas de lucha contra incendios con certificación IRAM, electrónica de supervivencia, 
         desarrollo de nuevas instalaciones, renovación de equipos y rodados. Además, se han desarrollado proveedores internacionales 
         y alianzas con fábricas para la importación directa de repuestos y equipos, lo que favoreció la comercialización. 
         La mejora continua y enfoque al cliente ha llevado a la organización a certificar la norma IRAM 3517-2 “Control mantenimiento
         y recarga de extintores”, siendo la única empresa de la ciudad de Puerto Madryn en poseer tal distinción. La renovación permanente 
         del SGC junto con la certificación de la norma ISO 9001-2015 obtenida en el año 2022, para mejorar la competitividad de la empresa, 
         reafirma el compromiso asumido para satisfacer las necesidades de los clientes y de las demás partes interesadas.</p>
         
      </div>
        
        <div className="certificaciones">
                <Slider {...settings}>
                    <div>
                    <img src="/img/carrusel/carrusel1.JPG" alt="Instalaciones de MORENI HNOS."/>
                    </div>
                    <div>
                    <img src="/img/carrusel/carrusel2.JPG" alt="Equipo de trabajo"/>
                    </div>
                    <div>
                    <img src="/img/carrusel/carrusel3.JPG" alt="Equipo de trabajo"/>
                    </div>
                    <div>
                    <img src="/img/carrusel/carrusel4.JPG" alt="Equipo de trabajo"/>
                    </div>
                </Slider>
        </div>                      

        <div className="intro">
          <h1>UBICACIONES</h1>
          <iframe src="https://www.google.com/maps/d/embed?mid=1e8vQGYKjXvBFhfjf_DPP9eC1gRxypyI&ehbc=2E312F" width="500" height="800" title="Mapa de nuestras ubicaciones"></iframe>
        </div>

      </div>
  )}    

export default Detalle



      