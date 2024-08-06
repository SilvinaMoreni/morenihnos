import "./Nosotros.css"
import { Link } from 'react-router-dom';

function Nosotros (){

    return(

        <div className="nosotros-container">

            <div className="intro">
                <h3>SOBRE NOSOTROS</h3> 
                
                <p>“MORENI HNOS. S.R.L.” es una empresa patagónica que brinda servicios y soluciones a gran parte de los barcos que arriban a Puertos Patagónicos comunicados entre Bahía Blanca y Río Gallegos.
                    En toda su trayectoria siempre ha tenido la premisa de satisfacer las necesidades y requisitos del cliente a través de la provisión de servicios con altos niveles de confiabilidad.
                    Es por esta razón que la empresa obtuvo la aprobación y calificación de distintos fabricantes...
                </p>
                <Link to="/Nosotros">
                    <button className="vermas">VER MAS</button>
                </Link>

            </div>

        </div>




    )




}

export default Nosotros;