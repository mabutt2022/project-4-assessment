import React from 'react';
import './Circle.css';

export default function Circle ({circle}) {
     return (
      <div className="Circles">
        <div className={circle === 1 ? 'selected' : ''}>1</div>
        <div className={circle === 2 ? 'selected' : ''}>2</div>
        <div className={circle === 3 ? 'selected' : ''}>3</div>
        <div className={circle === 4 ? 'selected' : ''}>4</div>
      </div>
    );
  
}