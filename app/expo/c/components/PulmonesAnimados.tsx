'use client'; // Si estás en Next.js App Router

import { useState, useEffect } from 'react';

export default function PulmonesAnimados() {
  const [isBreathing, setIsBreathing] = useState(true);
  const [phase, setPhase] = useState<'inhale' | 'hold' | 'exhale'>('inhale');

  useEffect(() => {
    if (!isBreathing) return;

    const cycle = () => {
      setPhase('inhale');
      setTimeout(() => setPhase('hold'), 3000);   // inhala 3 segundos
      setTimeout(() => setPhase('exhale'), 4500); // hold 1.5 seg
      setTimeout(() => setPhase('inhale'), 7500); // exhala 3 seg
    };

    const interval = setInterval(cycle, 8000); // ciclo completo cada 8 segundos
    cycle(); // inicia inmediatamente

    return () => clearInterval(interval);
  }, [isBreathing]);

  return (
    <div className="flex flex-col items-center justify-center min-h-[600px] bg-gradient-to-b from-blue-50 to-white p-8">
      <h2 className="text-3xl font-bold text-gray-800 mb-8">Simulación de Respiración</h2>

      <div className="relative w-[420px] h-[380px] flex items-center justify-center">
        {/* Caja torácica simple (fondo) */}
        <div className="absolute w-[380px] h-[320px] border-8 border-gray-300 rounded-[60px] bg-white/70"></div>

        {/* Pulmón izquierdo */}
        <div 
          className={`absolute left-[70px] w-[110px] h-[240px] rounded-[80px_40px_60px_40px] transition-all duration-[3000ms] ease-in-out shadow-inner
            ${phase === 'inhale' ? 'scale-110 bg-gradient-to-br from-pink-300 to-rose-400' : 
              phase === 'hold' ? 'scale-105 bg-gradient-to-br from-pink-300 to-rose-400' : 
              'scale-90 bg-gradient-to-br from-pink-200 to-rose-300'}`}
          style={{ boxShadow: 'inset 20px 20px 40px rgba(0,0,0,0.15)' }}
        ></div>

        {/* Pulmón derecho */}
        <div 
          className={`absolute right-[70px] w-[110px] h-[240px] rounded-[40px_80px_40px_60px] transition-all duration-[3000ms] ease-in-out shadow-inner
            ${phase === 'inhale' ? 'scale-110 bg-gradient-to-br from-pink-300 to-rose-400' : 
              phase === 'hold' ? 'scale-105 bg-gradient-to-br from-pink-300 to-rose-400' : 
              'scale-90 bg-gradient-to-br from-pink-200 to-rose-300'}`}
          style={{ boxShadow: 'inset 20px 20px 40px rgba(0,0,0,0.15)' }}
        ></div>

        {/* Tráquea (línea central) */}
        <div className="absolute top-[80px] w-6 h-[140px] bg-gradient-to-b from-gray-400 to-gray-600 rounded-full z-10"></div>

        {/* Diafragma (línea que sube y baja) */}
        <div 
          className={`absolute bottom-[90px] w-[260px] h-4 bg-gradient-to-r from-amber-700 to-amber-800 rounded-full transition-all duration-[3000ms] ease-in-out
            ${phase === 'inhale' ? 'translate-y-8' : phase === 'exhale' ? 'translate-y-0' : 'translate-y-4'}`}
        ></div>

        {/* Bronquios pequeños (detalle) */}
        <div className="absolute top-[160px] left-[150px] w-3 h-12 bg-gray-500 rounded-full rotate-12"></div>
        <div className="absolute top-[160px] right-[150px] w-3 h-12 bg-gray-500 rounded-full -rotate-12"></div>
      </div>

      {/* Texto de fase */}
      <div className="mt-10 text-4xl font-semibold text-center min-h-[80px]">
        {phase === 'inhale' && <span className="text-blue-600">🌬️ Inhala...</span>}
        {phase === 'hold' && <span className="text-amber-600">⏸️ Mantén...</span>}
        {phase === 'exhale' && <span className="text-red-600">💨 Exhala...</span>}
      </div>

      {/* Botones de control */}
      <div className="flex gap-4 mt-8">
        <button 
          onClick={() => setIsBreathing(!isBreathing)}
          className="px-8 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-full font-medium transition"
        >
          {isBreathing ? 'Pausar' : 'Iniciar Respiración'}
        </button>
        
        <button 
          onClick={() => setPhase('inhale')}
          className="px-6 py-3 border border-gray-400 hover:bg-gray-100 rounded-full"
        >
          Reiniciar
        </button>
      </div>

      <p className="text-sm text-gray-500 mt-12 max-w-md text-center">
        Los pulmones se expanden al inhalar (diafragma baja) y se contraen al exhalar.<br />
        En la vida real esto pasa unas 12-20 veces por minuto.
      </p>
    </div>
  );
}