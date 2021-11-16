import React, {useState, useEffect} from 'react'

import './App.css';
import GameTemplate from './components/GameTemplate';
import Score from './components/Score';
import Box from './components/Box';

function App() {
  const scoreHeight = 100;
  const [boxWidth, setBoxWidth] = useState(500);

  const handleResize = () => {
    const W = document.documentElement.clientWidth;
    const H = document.documentElement.clientHeight;

    console.log(W, H);

    if(W > H + scoreHeight) {
      setBoxWidth(H - scoreHeight - 100);    
    }
    else {
      setBoxWidth(W - 100);    
    }

  }

  useEffect(() => {
    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    }
  }, [])

  return (
    <GameTemplate>
      <Score height={ scoreHeight } />
      <Box width={ boxWidth } />
    </GameTemplate>
  );
}

export default App;
