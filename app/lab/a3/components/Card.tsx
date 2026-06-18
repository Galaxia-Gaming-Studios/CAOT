/*import React from 'react';*/


interface CardData {
  title: string;
  text?: string;
}

interface Props {
  cards: CardData[];
}


function Card(cardProps: Props) {
  return (
    <div className="card_container">
      
      {cardProps.cards.map((cardProps, index) => (

      <div className="card_box" key={index}>
        <h1 className="card_title">{cardProps.title}</h1>
        <p className="card_text">{cardProps.text}</p>
      </div>
      
      ))}


    </div>
  );
};


export default Card;