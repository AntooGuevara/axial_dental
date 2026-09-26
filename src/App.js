import './App.css';
import NavBar from './components/NavBar.jsx';
import Informacion from './components/informacion.jsx';
import Fondo from './components/fondo.jsx'

function App() {
  return (
    <div className="App">
        <Fondo/>
        <NavBar/>
        <Informacion/>
    </div>
       

    
  );
}

export default App;
