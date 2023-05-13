import React from 'react';
import { useState } from 'react';
import './App.css';
import CircleSelector from './components/CircleSelector/CircleSelector';
import Circle from './components/Circle/Circle';

export default function App () {
  const [circle, setCircle] = useState(null);
     return (
      <div className="App">
        <header className="App-header">UNIT 4 FINAL ASSESSMENT</header>
        <main>
          <CircleSelector setCircle={setCircle}/>
          <br />
          <Circle circle={circle}/>
        </main>
      </div>
    );
  
}

