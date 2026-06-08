import Image from 'next/image';
//import PulmonesAnimados from './components/PulmonesAnimados';
import AutoPlayVideo from './components/video';
import './global.css';

export default function DiagramaRespiratorio() {
  return (
    <div className="contenedor">
      <h1 className="titulo">Sistema Nervioso</h1>
      
      <div className="contenedor-multimedia">
        
        <div className="imagen">
          <Image
          src="/images/img.jpg" 
          alt="Diagrama completo del sistema respiratorio" 
          width={0}
          height={0} />
        </div>
        
        <div>
        <AutoPlayVideo className="video"
        src="/videos/video-1.mp4"   // Pon el vídeo en la carpeta public/videos/
        poster="/images/poster.jpg"
        />
        </div>

    </div>
      
      <div className="cajas">
          <div className="caja1">
              <h2 className="titulo-h2">🫁 SISTEMA RESPIRATORIO</h2>
              <div className="parafo">
<p>Son las partes por donde pasa el aire:</p>
 
<ul>1. Vías respiratorias: Nariz y boca.</ul>
<ul>2. Faringe y Laringe.</ul>
<ul>3. Tráquea: El tubo principal.</ul>
<ul>4. Bronquios: Dos tubos que entran a los pulmones.</ul>
<ul>5. Pulmones: Los órganos principales (derecho e izquierdo).</ul>
<ul>6. Bronquiolos y Alvéolos: Los tubitos muy pequeños dentro de los pulmones.</ul>
<ul>7. Diafragma: El músculo que está abajo de los pulmones y ayuda a respirar.</ul>
              </div>
          </div>
          <div className="caja2">
            <h2 className="titulo-h2">¿Qué función hace?</h2>
            <div className="parafo">
<p>Su trabajo principal es introducir oxígeno al cuerpo y sacar el dióxido de carbono (que es lo que sobra y nos hace daño).</p>
 
<p>Pasos básicos:</p>
 
<li>- Inhalar: Entra aire con oxígeno para que la sangre lo lleve a todo el cuerpo y tengamos energía.</li>

<li>- Exhalar: Sale el aire "usado" o dióxido de carbono.</li>
            </div>
          </div>
      </div>
      
    </div>
  );
}