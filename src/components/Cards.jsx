import React from 'react';
import '../styles/Cards.css';

import Card from './Card.jsx';

export default function Cards({cities, onClose}) {
  return (
    <div className='cards'>
      {cities.map(c => <Card
          key={c.id}
          id={c.id}
          max={c.max}
          min={c.min}
          name={c.name}
          img={c.img}
          flag={c.flag}
          onClose={() => onClose(c.id)}
        /> )}
    </div>
  );
}
