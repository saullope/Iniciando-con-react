import React from "react";
import '../hojas-de-estilo/Tarea.css'
import { CiCircleMinus } from 'react-icons/ci'

function Tarea( { id, texto, completada, completarTarea, eliminarTarea } ) {
    return (
        <div 
          className={completada ? "tarea-contenedor completada" : "tarea-contenedor"} 
          >
            <div className="tarea-texto" 
            onClick={()=> completarTarea(id)}
            >
                {texto}
            </div>
            <div className="tarea-contenedor-iconos"
                onClick={() => eliminarTarea(id)}
            >
                <CiCircleMinus className="tarea-icono"/>
            </div>
        </div>
    );
}

export default Tarea;