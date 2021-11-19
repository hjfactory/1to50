import React, {useState, useEffect} from 'react'
import Score from './Score';
import Box from './Box';


function shuffle(array) { 
  array.sort(() => Math.random() - 0.5); 
}

let nums = Array.from({length: 25}, (v, i) => i+1);
shuffle(nums);

const scoreHeight = 100;

const Game = () => {
  const [boxSize, setBoxSize] = useState(500);

  const handleResize = () => {
    const W = document.documentElement.clientWidth;
    const H = document.documentElement.clientHeight;

    console.log(W, H);

    if(W > H + scoreHeight) {
      setBoxSize(H - scoreHeight - 100);    
    }
    else {
      setBoxSize(W - 100);    
    }
  }

  useEffect(() => {
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    }
  }, [])


  return (
    <main className="game">
      <Score height={ scoreHeight } />
      <Box size={ boxSize } nums={nums} />
    </main>
  )
}

export default Game
