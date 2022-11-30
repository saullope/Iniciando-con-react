import './App.css';
import Boton from './componentes/Boton';
import logo from './imagenes/freecodecamp-logo.jpg';
import Contador  from './componentes/Contador';
import { useState } from 'react';

function App() {

  const [numClics, setNumClics] = useState(0);
  const [numRestart, setNumRestart] = useState(0);

  const manejarClic = () => {
    setNumClics(numClics + 1);
  };

  const reiniciarContador = () => {
    setNumClics(0);
    setNumRestart(numRestart + 1);
  };

  return (
    <div className="App">
      <div className="freecodecamp-logo-contenedor">
        <img 
          className='freecodecamp-logo'
          src={logo}
          alt="Logo de freeCodeCamp"
        />
      </div>
      <div className="contenedor-contador">
        <Contador 
          numerodeClics={ numClics }
          numeroReinicios = { numRestart }
        />
        <Boton
          texto="Clic"
          esBotondeClic={true}
          manejarClic = { manejarClic }
        />
        <Boton
          texto="Reiniciar"
          esBotondeClic={false}
          manejarClic={ reiniciarContador }
        />
      </div>
    </div>
  );
}

export default App;
