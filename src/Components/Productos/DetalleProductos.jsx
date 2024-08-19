import React from 'react'
import { data } from '../../data.js';
import "./Productos.css"




const DetalleProductos = () => {


  return (
    <div className='contenedor'>
      <h1>PRODUCTOS DE SEGURIDAD Y SALVAMENTO</h1>
    
      <div className='container-items'>
        
        {data.map(producto=>(
          <div className='item' key={producto.id}>
            <figure className='imagen'>
              <img src={producto.imageSrc} alt={producto.imageAlt}/>
            </figure>
            <div className='info-product'>
              <h2>{producto.nombre}</h2>
              <p className='detalle'>{producto.descripcion}</p>
              <button>CONSULTAR</button>
            </div>
          </div>
        ))}
      </div>
    </div>  
  );
}

export default DetalleProductos