import React from 'react'
import Card from './Card';

export default function Cards({data}) {

  return (
    <div className="grid grid-cols-3 gap-5">
      {data?.map((card) => (
        <Card
          id={card.id}
          name={card.name}
          img={card.image}
          price={card.price}
        />
      ))}
    </div>
  );
}
