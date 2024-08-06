import Navbar from './Navbar.jsx';
import Footer from './Footer.jsx';
import Servicios from './Servicios.jsx';
import Nosotros from './Nosotros.jsx';  
import Certificaciones from './Certificaciones.jsx';
import Productos from './Productos.jsx';
import Video from './Video.jsx';



function App() {
  return ( 
    <div className="App">

      
      <Navbar/>
      <Video/>
      <Certificaciones/>
      <Nosotros/>
      <Servicios/>
      <Productos/>
      <Footer/>
    </div>
    );
}

export default App;

