import reactLogo from './assets/react.svg'
import ListaDeTareas from './componentes/ListaDeTareas'
import './App.css'

function App() {

  return (
    <div className="aplicacion-tareas">
      <div className="logo-contenedor">
        <img src={reactLogo} alt="React Logo" />
      </div>
      <div className="tareas-lista-principal">
        <h1>Mis Tareas</h1>
        <ListaDeTareas />
      </div>
    </div>
  )
}

export default App
