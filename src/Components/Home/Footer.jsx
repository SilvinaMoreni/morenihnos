import React from 'react';
import './Footer.css';
import { Facebook, Instagram, Linkedin, Twitter } from 'lucide-react';

function Footer() {
    return (
        <footer id="footer">
            <div className="footer-content">
                
                <nav className="footer-nav">
                    <ul>
                        <li><a href="#inicio">INICIO</a></li>
                        <li><a href="#nosotros">NOSOTROS</a></li>
                        <li><a href="#productos">PRODUCTOS</a></li>
                        <li><a href="#servicios">SERVICIOS</a></li>
                        <li><a href="#contacto">CONTACTO</a></li>
                    </ul>
                </nav>
                
                <div className="social-icons">
                    <a href="#" aria-label="Facebook"><Facebook /></a>
                    <a href="#" aria-label="Instagram"><Instagram /></a>
                    <a href="#" aria-label="Twitter"><Twitter /></a>
                    <a href="#" aria-label="LinkedIn"><Linkedin /></a>
                </div>
                
                <form className="contact-form">
                    <input type="email" placeholder="Su email" required />
                    <textarea placeholder="Su mensaje" required></textarea>
                    <button type="submit">Enviar</button>
                </form>
                
                <div className="derechos">
                    <p>
                        © 2024 Moreni Hnos SRL - Todos los derechos reservados.<br/>
                        Diseñado y desarrollado por:
                        <a href="https://www.linkedin.com/in/silvina-moreni-1a6507229">@Silvina Moreni</a><br/> 
                        Imagenes y videos: <a href="...">@EAGroup</a><br/>
                    </p>
                </div>
            </div>
        </footer>
    );
}

export default Footer;
