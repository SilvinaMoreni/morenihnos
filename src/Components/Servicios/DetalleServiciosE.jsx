import React, { useState, useEffect, useRef } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import './DetalleServicios.css';

const DetalleServiciosE = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const videoRefs = useRef([]);
  const videos = [

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
            type="video/MP4"
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
        <h1>ELECTRONICA DE EMERGENCIA</h1>
            <h2>
                Radiobaliza de emergencia EPIRB, radio VHF GMDSS, transpondedor de búsqueda y salvamento AIS SART GMDSS
            </h2>
            <ul>
                <li>Mantenimiento anual acorde a ordenanza 03-18 de Prefectura Naval Argentina, 761 (18) de OMI, norma ISO 9001:2015</li>
                <li>Service oficial ACR</li>
                <li>Primeras marcas y/o repuestos originales</li>
                <li>Urgencias las 24 hs</li>
                <li>Retiros y entregas acorde a las necesidades del cliente</li>              
            </ul>
      </div>
    </div>
  );
};

export default DetalleServiciosE;