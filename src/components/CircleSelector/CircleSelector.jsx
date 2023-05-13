import React from 'react';
import { useState } from 'react';
import './CircleSelector.css';

export default function CircleSelector ({setCircle}) {
  const [selected, setSelected] = useState('');

  
     return (
      <div className="CircleSelector">
        <button className={selected === 1 ? 'selected' : ''} onClick={(e) => {setSelected(1); setCircle(1)}}>{selected === 1 ? 'SELECT CIRCLE 1' : 'CIRCLE 1 SELECTED'}</button>
        <button className={selected === 2 ? 'selected' : ''} onClick={(e) => {setSelected(2); setCircle(2)}}>{selected === 2 ? 'SELECT CIRCLE 2' : 'CIRCLE 2 SELECTED'}</button>
        <button className={selected === 3 ? 'selected' : ''} onClick={(e) => {setSelected(3); setCircle(3)}}>{selected === 3 ? 'SELECT CIRCLE 3' : 'CIRCLE 3 SELECTED'}</button>
        <button className={selected === 4 ? 'selected' : ''} onClick={(e) => {setSelected(4); setCircle(4)}}>{selected === 4 ? 'SELECT CIRCLE 4' : 'CIRCLE 4 SELECTED'}</button>
      </div>
    );
  
}