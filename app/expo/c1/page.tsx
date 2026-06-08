import Image from 'next/image';
//import PulmonesAnimados from './components/PulmonesAnimados';
import './global.css';

export default function DiagramaRespiratorio() {
  return (
    <div className="contenedor-principal">
      <h1 className="titulo-principal">
        Sistema Respiratorio Humano
      </h1>

      {/* Diagrama grande y bonito */}
      <div className="contenedor-imagen">
        <Image 
          src="/images/sistema-respiratorio.jpg" 
          alt="Diagrama completo del sistema respiratorio" 
          width={900} 
          height={1000}
          className="imagen-diagrama"
        />
      </div>

      {/* Información debajo */}
      <div className="contenedor-info">
        
        <div className="caja-azul">
          <h2 className="subtitulo">Partes Principales</h2>
          <ul className="lista-partes">
            <li><strong>Vías respiratorias superiores:</strong> Nariz, faringe, laringe</li>
            <li><strong>Vías respiratorias inferiores:</strong> Tráquea, bronquios, pulmones</li>
            <li><strong>Órgano clave:</strong> Diafragma (ayuda a inhalar y exhalar)</li>
          </ul>
        </div>
        
        <div className="caja-verde">
          <h2 className="subtitulo">Función principal</h2>
          <p className="texto-funcion">
            Llevar oxígeno al cuerpo y eliminar dióxido de carbono. 
            En los alvéolos ocurre el intercambio gaseoso con la sangre.
          </p>
        </div>

        {/* Componente comentado */}
        {/* <PulmonesAnimados /> */}

      </div>
    </div>
  );
}