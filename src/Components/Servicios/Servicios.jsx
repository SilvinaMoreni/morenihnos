import React from 'react'
import Footer from '../Home/Footer';
import Navbar from "../Home/Navbar";
import FotoServicios from './FotoServicios';
import DetalleServicios from './DetalleServicios';
import DetalleServiciosI from './DetalleServiciosI';



const Servicios = () => {
  return (
    <div>

        <Navbar/>
        <FotoServicios/>
        <DetalleServicios/>
        <DetalleServiciosI/>
        <Footer/>

        




    </div>
  )
}

export default Servicios