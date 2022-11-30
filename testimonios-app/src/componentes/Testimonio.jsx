import '../hojas-de-estilo/Testimonio.css'

function Testimonio(props){
  return (
    <div className="contenedor-testimonio">
      <img 
        className="imagen-testimonio" 
        src={require(`../imagenes/testimonio-${props.imagen}.png`)} 
        alt={`porfile picture at ${props.imagen}`} 
      />
      <div className="contenedor-texto-testimonio">
        <p className="nombre-testimonio"><b>{props.nombre}</b> in {props.pais}</p>
        <p className="cargo-testimonio">{props.cargo} at <b>{props.empresa}</b></p>
        <p className="texto-testimonio">"{props.testimonio}"</p>
      </div>
    </div>
  );
}
export default Testimonio;