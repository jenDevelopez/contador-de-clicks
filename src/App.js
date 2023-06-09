import './App.css';
import developezLogo from './imagenes/developez-logo.png'
import Boton from './componentes/Boton';
import Contador from './componentes/Contador';
import { useState } from 'react'

function App() {

      const [numClics, setNumClics] = useState(0)

      const manejarClic = () => {
        setNumClics(numClics + 1)
      }

      const reiniciarContador = () => {
        setNumClics(0)
      }
      

      return (
        <div className='App'>
          <div className='contenedor-logo'>
            <img 
              className='logo'
              src={developezLogo}
              alt='Logo de freeCodeCamp' />
          </div>
          <div className='contenedor-principal'>
            <Contador numClics={numClics} />
            <Boton 
              texto='Clic'
              esBotonClic={true}
              manejarClic={manejarClic} />
            <Boton 
              texto='Reiniciar'
              esBotonClic={false}
              manejarClic={reiniciarContador} />
          </div>
        </div>
      );
}

export default App;
