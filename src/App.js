import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';

import Btn from './Btn.tsx';
import TextArea from './components/textarea';
import Text from './components/text';
import Sylaby from './excercise/sylaby';

const App = (props) => {
  const [sylaby, setSylaby] = useState("");
  const [sylabyParsed, setSylabyParsed] = useState([]);

  const [start, setStart] = useState(false);

  const [litery, setLitery] = useState(false);
  const [fontSize, setFontSize] = useState('250');
  const [lastCol, setLastCol] = useState(false);
  const [firstCol, setFirstCol] = useState(false);

  const startSylaby = () =>{
    const x = sylaby.trim().split(',');
    setSylabyParsed(x);
    setStart(true);
  };
  
  return (
    <div className="App">
      {!start && <div>
      <Btn text='Litery' onClick={() => setLitery(!litery)}/>: {!litery ? 'małe' : 'DUŻE'}<br/>
      Czcionka: <Text onChange={val => setFontSize(val)} value={fontSize} /><br/>
      <Btn text='Pierwsz kolorowa' onClick={() => setFirstCol(!firstCol)} /> {firstCol? 'TAK' : 'NIE'}<br/>
      <Btn text='Ostatnia kolorowa' onClick={() => setLastCol(!lastCol)} /> {lastCol? 'TAK' : 'NIE'}<br/>
      <TextArea onChange={val => setSylaby(val)} value={sylaby} />
      <br/>
      <Btn text='Start' onClick={() => startSylaby()} class='startBtn' />
      </div>
      }
      {start && <div> 
         <Sylaby
          litery={litery}
          sylaby={sylabyParsed}
          onEnd={() => setStart(false)}
          fontSize={fontSize}
          firstCol={firstCol}
          lastCol={lastCol}
        />
      </div>}
    </div>
  );
}

export default App;
