/*import React from 'react';*/
import Image from "next/image";

interface CardData {
  title: string;
  text?: string;
  img: string;
}

interface Props {
  cards: CardData[];
}


function Card(cardProps: Props) {
  return (
    <div className="card_container">
      
      {cardProps.cards.map((cardProps, index) => (

      <div className="card_box" key={index}>
        {cardProps.img && (
        <Image
          className="img2"
          src={cardProps.img}
          alt="Imagen"
          width={200}
          height={0}
          priority
        />
      )}
        
        <h1 className="card_title">{cardProps.title}</h1>
        <p className="card_text">{cardProps.text}</p>
      </div>
      
      ))}


    </div>
  );
};


export default Card;