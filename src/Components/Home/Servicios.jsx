import "./Servicios.css"
import "./Nosotros.css"
import { Link } from 'react-router-dom';


function Nosotros () {
    return ( 
            <div className="container-gral">

                <div className="titulo">
                    <h1> SERVICIOS
                    </h1>
                </div>
                <div className="fabrica">
                    <img src="/img/ACR.png" alt=""/>
                    <img src="/img/CSM.jpg" alt="" />
                    <img src="/img/Youlong.jpg" alt="" />
                    <img src="/img/Hwayan.jpg" alt="" />
                    <img src="/img/HN.jpg" alt=""/>
                </div> 
                <div className="container"> 
                    <div className="intro">
                            <h3>MANTENIMIENTO ANUAL DE:</h3>             
                                <ul>
                                    - Dispositivos salvavidas <br></br>
                                    - Equipos de lucha contra incendios naval e industrial<br></br>
                                    - Equipos de comunicación de emergencia (GMDSS)<br></br>
                                </ul>
                                <Link to="/Servicios">
                                    <button className="vermas">VER MAS</button>
                                 </Link>
                                
                    </div>
                </div>    
            </div>
    );
}

export default Nosotros ;

