import React, { useState } from 'react';
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

  const [imgEvery, setImgEvery] = useState(3);

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
      <Btn text='Obrazek co' onClick={() => setImgEvery(imgEvery > 10 ? 3 : imgEvery + 3)} /> {imgEvery}<br />
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
          imgEvery={imgEvery}
        />
      </div>}

      
    </div>
  );
}

export default App;
