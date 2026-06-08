
import "./style.css"
function page() {
  return (
    <div>
      {/*<Box title={"Hello Good"}/>*/}
         <h1 className="titulo">Mis Metas 2026</h1>
   <div className="contenedor-principal">
    
    {/* Grupo IZQUIERDA (3 cajas verticales) */}
    <div className="grupo-izquierda">
      <div className="contenedor-cajas">

        <div className="caja">
       
         <h3 className="emoji">Meta Corto Plazo</h3>
         <img src="/religion/file1.png" alt=""/>
         <h2 className="title">Graduarme de 9.° Año</h2>
         <p>Lograr culminar con éxito mi educación secundaria básica, superando cada materia con buenas notas.</p>
        </div>

        <div className="caja">
         <h3 className="emoji">Meta Mediano Plazo</h3>
         <img src="/religion/file1.png" alt=""/>
         <h2 className="title">Graduarme de 5.° Año</h2>
         <p>Terminar el colegio (educación diversificada), obteniendo mi título de bachiller listo para dar el salto profesional.</p>
        </div>

        <div className="caja">
         <h3 className="emoji">Meta a Futuro</h3>
         <img src="/religion/file5.png" alt=""/>
         <h2 className="title">Aprender Ciberseguridad</h2>
         <p>Convertirme en un experto en proteger sistemas, redes y datos. Un guardián digital ético y profesional.</p>
       </div>
      </div>
    </div>

    {/* Grupo MEDIO (3 cajas verticales) */}
    <div className="grupo-medio">
      <div className="contenedor-cajas">

        <div className="caja">
         <h3 className="emoji">Mi Compromiso de Honor</h3>
         <img src="/religion/file6.png" alt=""/>
         <h2 className="title">Mi Compromiso Personal ✍️</h2>
         <p>"Me comprometo formalmente conmigo mismo a dar mi mejor esfuerzo cada día en las aulas. Estudiaré con pasión, cuidará mi salud mental y física, mantendré la curiosidad encendida para aprender informática y no me rendiré cuando las cosas se pongan difíciles. Este camino me llevará a la felicidad, la autorrealización y a ser un profesional de orgullo."</p>
        </div>

      </div>
      </div>

    {/* Grupo DERECHA (3 cajas verticales) */}
    <div className="grupo-derecha">
      <div className="contenedor-cajas">

        <div className="caja">
         <h3 className="emoji">Valor #1</h3>
         <img src="/religion/file4.png" alt=""/>
         <h2 className="title">Perseverancia / Disciplina</h2>
         <p>La tecnología y la seguridad informática requieren práctica constante. No me rendiré cuando el código o la materia sean difíciles.</p>
        </div>
       
        <div className="caja">
         <h3 className="emoji">Valor #2</h3>
         <img src="/religion/file2.png" alt=""/>
         <h2 className="title">Honestidad y Ética</h2>
         <p>En ciberseguridad se maneja información muy delicada. Mi compromiso es usar el conocimiento siempre para proteger y hacer el bien.</p>
        </div>

        </div>
        <div className="caja">
         <h3 className="emoji">1 Obstáculo a Vencer</h3>
         <img src="/religion/file3.png" alt=""/>
         <h2 className="title">Distracciones y Procrastinación</h2>
         <p>El mayor reto será no dejar los estudios para el final por jugar o distraerme. Trabajaré en organizar mi tiempo de forma inteligente.</p>
        </div>

     </div>
      
   </div>

    </div>
    
  )
}

export default page;