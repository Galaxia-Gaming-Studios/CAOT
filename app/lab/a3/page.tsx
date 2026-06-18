//rafc
import React from 'react';
import Image from "next/image";
import Title from './components/Title';
import Card from './components/Card';
import Card2 from './components/Card2';
import Card3 from './components/Card3';
import './index.css'


const data = {
  title: "Proyecto De Civica",
  titleText: ""
}

const myCard = [
  {
    title: "Tema",
    text: "Desconfianza de la población joven en las instituciones políticas."
  },
  {
    title: "Objetivo general ",
    text: "Analizar los factores políticos que generan desconfianza en la población joven de nuestro país, con el propósito de de conocer por qué motivo está población sen interesa menos en estos temas, mediante una entrevista a: null faltante session"
  },
  {
    title: "Objetivo específico ",
    text: "1. Identicar el grado de desinterés de los joven a instrucciones políticas \n2. Investigar porque los jóvenes no le dan mucha importancia y omiten ver videos discursos oficiales de las instituciones políticas \n3. Determinar las causas del desinterés de la población joven"
  },
  {
    title: "Descripción del tema del Proyecto",
    text: "La desconfianza de la población joven en las instituciones políticas ocurre cuando los jóvenes pierden la confianza en el gobierno, los partidos políticos y otras entidades públicas. Esto puede deberse a la corrupción, la falta de transparencia y el incumplimiento de promesas, provocando menor participación en la vida política y democrática."
  },
  {
    title: "Objetivo o meta del proyecto",
    text: "La desconfianza de los Jovenes de la instituciónes políticas es un problema serio porque los jóvenes pierden interés en las instituciones políticas porque no apoyan sus intereses esta situación puede provocar desinterés en la participación ciudadana, baja asistencia a las votaciones y poca involucración en actividades democráticas. Entre las causas más comunes se encuentran los casos de corrupción"
  },
  {
    title: "Justificación",
    text: "Los jóvenes han perdído la desconfianza en las instituciones políticas esto afecta a la sociedad y la participación juvenil y luego pueden aver partidos corruptos por falta de interés de los jóvenes ahí que hacer algo para que tengan interés la participación juvenil es fundamental para el desarrollo democrático de un país soberano "
  }
];

const myCard2 = [
  {
    question: "1. ¿Qué institución política te genera más confianza? ¿Y cuál menos?",
    response: [
      "hola",
      "hla"
    ],
    dy: "Chis"
  },
  {
    question: "2. ¿Las redes sociales afectan tu percepción de la política?",
    response: [
      "hola",
      "hla"
    ],
    dy: "Chis"
  },
  {
    question: "3. ¿Por qué piensas que muchos jóvenes no se interesan en la política?",
    response: [
      "hola",
      "hla"
    ],
    dy: "Orlando"
  },
  {
    question: "4. ¿Crees que los políticos cumplen sus promesas?",
    response: [
      "hola",
      "hla"
    ],
    dy: "Orlando"
  },
  {
    question: "5. ¿Qué problemas políticos preocupan más a los jóvenes actualmente?",
    response: [
      "hola",
      "hla"
    ],
    dy: "Jimmy"
  },
  {
    question: "6. ¿Consideras que el gobierno escucha las necesidades de los jóvenes?",
    response: [
      "hola",
      "hla"
    ],
    dy: "Jimmy"
  }
  
]
  const myEnd = [
    {
      endTitle: "Dificultades",
      endText: [
        "Encontrar información actualizada y confiable sobre la opinión de los jóvenes.",
        "Analizar diferentes puntos de vista sin sesgos."
                ]
    },
    {
      endTitle: "Retos Para El Futuro",
      endText: [
        "Recuperar la confianza de los jóvenes en las instituciones políticas.",
        "Crear espacios donde los jóvenes puedan expresar sus opiniones y ser escuchados."
      ]
    },
    {
      endTitle: "Enseñanza",
      endText: [
        'La participación de los jóvenes es fundamental para fortalecer la democracia.',
        "Los jóvenes tienen el derecho y la responsabilidad de informarse sobre los asuntos políticos."
      ]
    }
  ]
const page = () => {
  return (
    <div>
      {/*<img src="/logo.png" alt="Logo" />*/}
      <Title 
        title={data.title}
        titleText={data.titleText}
        />
      
      <Card 
        cards={myCard}
        />
      
      <Card2 
        cards2={myCard2}
        />

      <Card3 
        cards3={myEnd}
        />
    </div>
  )
}
export default page;