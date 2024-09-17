import React, {useState} from 'react';
import './Navbar.css';
import { Link } from 'react-router-dom';

function BarraNav() {
  const [isOpen, setIsOpen] = useState(false)
  return (
    
    <div className='banner'>
          <div className='navbar'>          
                    <img className='logo' src="../img/logo-moreni.png" alt="logo"/> 
                    <ul className={`navbar ul ${isOpen ? "open" : ""}`}>
                      <Link className='nav'to={"/"}> INICIO</Link>
                      <Link className='nav'to={"/Nosotros"}> NOSOTROS</Link>
                      <Link className='nav'to={"/Servicios"}>SERVICIOS</Link>
                      <Link className='nav'to={"/Productos"}>PRODUCTOS</Link>
                      <Link className='nav'to={"/Contacto"}>CONTACTO</Link>
                    </ul>
                    <div className={`nav_toggle ${isOpen ? "open" : ""}`} onClick={() => setIsOpen(!isOpen)} >
                      <span></span>
                      <span></span>
                      <span></span>
                    </div>
          </div>            
      </div>  
  );
}

export default BarraNav;
