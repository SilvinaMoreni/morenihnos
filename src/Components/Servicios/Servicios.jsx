import React from 'react'
import Footer from '../Home/Footer';
import Navbar from "../Home/Navbar";
import FotoServicios from './FotoServicios';
import DetalleServicios from './DetalleServicios';
import DetalleServiciosI from './DetalleServiciosI';
import DetalleServiciosE from './DetalleServiciosE';


const Servicios = () => {
  return (
    <div>

        <Navbar/>
        <FotoServicios/>
        <DetalleServicios/>
        <DetalleServiciosI/>
        <DetalleServiciosE/>
        <Footer/>

        




    </div>
  )
}

export default Servicios