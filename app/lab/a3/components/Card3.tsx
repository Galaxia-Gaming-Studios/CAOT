//tsrfce
/*import React from 'react'*/

interface CardData {
  endTitle: string;
  endText: string[];
  
}
interface Props {
  cards3: CardData[];
}

function Card3(cardsProps: Props) {
  return (
    <div className="end_container">
      
      {cardsProps.cards3.map((cardsProps, index) => (

       <div className="endBox" key={index}>
         <h1 className="endTitle">{cardsProps.endTitle}</h1>
         
      {cardsProps.endText.map((response, index) => (
         <p className="endText" key={index}>{cardsProps.endText}</p>
         ))}
         
        
        
         
         
       </div>
      
      ))}
      
    </div>
  )
}

export default Card3;