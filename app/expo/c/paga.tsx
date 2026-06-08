// Ejemplo simple - copia y pega esto
import Image from 'next/image';
import PulmonesAnimados from './components/PulmonesAnimados';
export default function DiagramaRespiratorio() {
  return (
    <div className="max-w-4xl mx-auto p-8">
      <h1 className="text-4xl font-bold text-center mb-8 text-blue-700">
        Sistema Respiratorio Humano
      </h1>
      
      {/* Diagrama grande y bonito */}
      <div className="flex justify-center bg-white p-6 rounded-2xl shadow-xl">
        <Image 
          src="/images/sistema-respiratorio.jpg" 
          alt="Diagrama completo del sistema respiratorio" 
          width={900} 
          height={1000}
          className="w-full max-w-3xl hover:scale-105 transition-transform duration-300"
        />
      </div>

      {/* Información debajo (fácil de expandir con CSS) */}
      <div className="mt-10 grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="bg-blue-50 p-6 rounded-xl">
          <h2 className="text-2xl font-semibold mb-4">Partes Principales</h2>
          <ul className="space-y-3 text-lg">
            <li><strong>Vías respiratorias superiores:</strong> Nariz, faringe, laringe</li>
            <li><strong>Vías respiratorias inferiores:</strong> Tráquea, bronquios, pulmones</li>
            <li><strong>Órgano clave:</strong> Diafragma (ayuda a inhalar y exhalar)</li>
          </ul>
        </div>
        
        <div className="bg-green-50 p-6 rounded-xl">
          <h2 className="text-2xl font-semibold mb-4">Función principal</h2>
          <p className="text-lg">
            Llevar oxígeno al cuerpo y eliminar dióxido de carbono. 
            En los alvéolos ocurre el intercambio gaseoso con la sangre.
          </p>
        </div>
       {/* <PulmonesAnimados /> */}
      </div>
    </div>
  );
}