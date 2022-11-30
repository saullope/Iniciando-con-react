import React from "react";
import '../hojas-de-estilo/Contador.css';
function Contador({ numerodeClics, numeroReinicios }){
    return (
      <div className="contador">
        { numerodeClics } - { numeroReinicios }
      </div>
    );
}

export default Contador;