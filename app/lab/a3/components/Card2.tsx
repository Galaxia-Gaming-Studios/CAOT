//tsrfce
/*import React from 'react'*/

interface CardData {
  question: string;
  response: string[]
  dy: string;
}
interface Props {
  cards2: CardData[];
}

function Card2(cardsProps: Props) {
  return (
    <div className="question_container">
      
      {cardsProps.cards2.map((cardsProps, index) => (

       <div className="questionBox" key={index}>
         <h1 className="questionTitle">{cardsProps.question}</h1>
         
         {cardsProps.response.map((response, index) => (
         <ul key={index}>
           <li className="questionText" key={index}>{response}</li>
         </ul>
         ))}
         
         
         <h3 className="questionDy">{cardsProps.dy}</h3>
       </div>
      
      ))}
      
    </div>
  )
}

export default Card2;