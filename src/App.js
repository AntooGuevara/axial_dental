import './App.css';

//componentes necesarios
import NavBar from './components/NavBar.jsx';
import Informacion from './components/informacion.jsx';
import Fondo from './components/fondo.jsx'
import Contenedores from './components/contenedores.jsx';



function App() {
  return (
    <div className="App">
      <meta name="viewport" content="width=device-width, initial-scale=1.0"></meta>
        <Fondo/>
        <NavBar/>
        <Contenedores/>
        <Informacion/>
        

    </div>
       

    
  );
}

export default App;
