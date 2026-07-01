//tsrfce
/*import React from 'react'*/
import Image from "next/image";

interface CardData {
  question: string;
  response: string[];
  dy: string;
  img: string;
}
interface Props {
  cards2: CardData[];
}

function Card2(cardsProps: Props) {
  return (
    <div className="question_container">
      
      {cardsProps.cards2.map((cardsProps, index) => (

       <div className="questionBox" key={index}>
         { cardsProps.img && (
         <Image
          className="img2"
          src={cardsProps.img}
          alt="Imagen"
          width={200}
          height={0}
          priority
        />
       )}
         
         <h1 className="questionTitle">{cardsProps.question}</h1>
         
         {cardsProps.response.map((response, index) => (
         <ul key={index}>
           <li className="questionText" key={index}>{response}</li>
         </ul>
         ))}
         
         
         {/*<h3 className="questionDy">{cardsProps.dy}</h3>*/}
       </div>
      
      ))}
      
    </div>
  )
}

export default Card2;