import React, { useState, useEffect, useRef } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import './DetalleServicios.css';

const DetalleServiciosI = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const videoRefs = useRef([]);
  const videos = [
    "/img/carrusel/servicios/Mangueras1.MP4",
    "/img/carrusel/servicios/Mangueras2.MP4",
    "/img/carrusel/servicios/PH1.MP4",
    "/img/carrusel/servicios/PH2.MP4",

  ];

  useEffect(() => {
    const currentVideo = videoRefs.current[currentSlide];
    
    if (currentVideo) {
      currentVideo.currentTime = 0;
      currentVideo.play();

      const handleEnded = () => {
        nextSlide();
      };

      currentVideo.addEventListener('ended', handleEnded);

      return () => {
        currentVideo.removeEventListener('ended', handleEnded);
      };
    }
  }, [currentSlide]);

  const nextSlide = () => {
    setCurrentSlide((prevSlide) => (prevSlide + 1) % videos.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prevSlide) => (prevSlide - 1 + videos.length) % videos.length);
  };

  return (
    <div className="detalle-servicios">
      <div className="carousel">
        {videos.map((video, index) => (
          <video
            key={index}
            ref={el => videoRefs.current[index] = el}
            src={video}
            className={`carousel-video ${index === currentSlide ? 'active' : ''}`}
            muted
          />
        ))}
        <button className="carousel-button prev" onClick={prevSlide}>
          <ChevronLeft size={24} />
        </button>
        <button className="carousel-button next" onClick={nextSlide}>
          <ChevronRight size={24} />
        </button>
      </div>
      <div className='disp-salvavidas'>
        <h1>PROTECCIÓN CONTRA INCENDIOS</h1>
            <h2>
                Extintores, Pruebas hidráulicas, Protección respiratoria, Mangueras de incendio, Sistemas fijos de extinción de
                incendios
            </h2>
            <ul>
                <li>Mantenimiento anual acorde a ordenanza 03-18 de Prefectura Naval Argentina, 761 (18) de OMI, norma ISO 9001:2015</li>
                <li>Service oficial YUKON, HWAYAN</li>
                <li>Sello IRAM en control, mantenimiento y recarga de EXTINTORES</li>
                <li>Primeras marcas y/o repuestos originales en repuestos</li>
                <li>Urgencias las 24 hs</li>
                <li>Retiros y entregas acorde a las necesidades del cliente</li>              
            </ul>
      </div>
    </div>
  );
};

export default DetalleServiciosI;