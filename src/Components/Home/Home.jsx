import Navbar from './Navbar.jsx';
import Footer from './Footer.jsx';
import Servicios from './Servicios.jsx';
import Nosotros from './Nosotros.jsx';  
import Productos from './Productos.jsx';
import Video from './Video.jsx';



function App() {
  return ( 
    <div className="App">

      
      <Navbar/>
      <Video/>
      <Nosotros/>
      <Servicios/>
      <Productos/>
      <Footer/>
    </div>
    );
}

export default App;

