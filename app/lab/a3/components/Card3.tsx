//tsrfce
/*import React from 'react'*/
import Image from "next/image";

interface CardData {
  endTitle: string;
  endText: string[];
  img: string;
  
}
interface Props {
  cards3: CardData[];
}

function Card3(cardsProps: Props) {
  return (
    <div className="end_container">
      
      {cardsProps.cards3.map((cardsProps, index) => (

       <div className="endBox" key={index}>

         {cardsProps.img && (
         <Image
          className="img2"
          src={cardsProps.img}
          alt="imagen"
          width={200}
          height={0}
          priority
        />
         )}
         
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