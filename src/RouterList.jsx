import React from 'react'
import { Route, Routes } from 'react-router-dom';
import Home from './Components/Home/Home.jsx';
import Productos from './Components/Productos/Productos.jsx';
import Nosotros from './Components/Nosotros/Nosotros.jsx';
import Servicios from './Components/Servicios/Servicios.jsx';
import Contacto from './Components/Contacto/Contacto.jsx';

const RouterList = () => {
  return (
    <Routes>
        <Route path="/" element={<Home/>}/> 
        <Route path="/Nosotros" element={<Nosotros/>}/>                                                 "
        <Route path="/Productos" element={<Productos/>}/>
        <Route path="/Servicios" element={<Servicios/>}/>
        <Route path="/Contacto" element={<Contacto/>}/>

    </Routes>




  )
}

export default  RouterList