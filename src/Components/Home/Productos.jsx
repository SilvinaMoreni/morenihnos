import './Productos.css'
import './Servicios.css'
import { Link } from 'react-router-dom';

function Productos () {
    return (
        <div className="container-gral">
                    <div className="titulo">
                        <h1> PRODUCTOS</h1>  
                    </div> 
                    <div className="container-art">
                        <div className="intro">
                                <h3>VENTA DE ARTICULOS NAVALES E INDUSTRIALES</h3>
                                <p>
                                        - Dispositivos salvavidas: balsas salvavidas, chalecos salvavidas, trajes de inmersión
                                        y dispositivo de rescate hombre al agua.<br></br>
                                        - Equipos de lucha contra incendios.<br></br>
                                        - Equipos de comunicación de emergencia GMDSS: EPIRB, VHF y SART.<br></br>
                                        - Almacen naval general.<br></br>
                                </p>
                                <Link to="/Productos">
                                    <button className="vermas">
                                        VER MAS
                                    </button>
                                </Link>
                        </div>
                    </div>
        </div>
    )

}

export default Productos;