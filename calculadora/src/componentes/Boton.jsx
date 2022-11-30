import React from "react";
import '../hojas-de-estilo/Boton.css'

function Boton( props ){

  const esOperador = (operador) => {
    return isNaN(operador) && (operador != '.') && (operador != '=');
  };

  return(
    <div
      className={ `boton-contenedor ${esOperador(props.children) ? 'operador' : ''} `.trim() } 
      onClick={ () => props.manejarClic(props.children)}
      >
      {props.children}
    </div>
  );
}

export default Boton;