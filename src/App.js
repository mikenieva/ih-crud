// 1. IMPORTACIONES
import logo from './logo.svg';
import './App.css';
import Header from './components/Header'
import Footer from './components/Footer'
import Sidebar from './components/Sidebar'
import Mike from './components/Mike'
import Home from './components/Home'
import User from './components/User'
import Contactos from './components/Contactos'

import Crud from './components/Crud'

import { 
  Route,
  Switch,
  BrowserRouter as Router
} from 'react-router-dom'


// 2. FUNCIÓN
// (VAMOS A APRENDER PROGRAMACIÓN FUNCIONAL CON COMPONENTES)
function App() {

  const saludar = "Hola mundo"

  return ( // UN COMPONENTE SIEMPRE DEBE ESTAR ENVUELTO EN UNA SOLA ETIQUETA
    <>
      {/* APLICACIÓN DE REACT ROUTER - RUTEO */}
      <Router> 
        <Header />

          <Switch>

            {/* RUTEO ESTÁTICO */}
            <Route exact path="/sidebar" component={Sidebar} />
            <Route exact path="/mike" component={Mike} />
            <Route exact path="/crud" component={Crud} />
            <Route exact path="/contactos" component={Contactos} />

            {/* RUTEO DINÁMICO */}
            <Route exact path="/:usuario" component={User}/>

            {/* RUTA PRINCIPAL */}
            <Route exact path="/" component={Home} />
          </Switch>
      
        <Footer />
        
      
        

      </Router>
    </>
  );
}


// 3. EXPORTACIÓN
export default App;


    // {/* <Sidebar />
    //       { saludar }
    //       <p>Hola soy un párrafo</p>
    //       <h1>Soy un h1</h1> */}