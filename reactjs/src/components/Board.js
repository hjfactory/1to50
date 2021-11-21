import React, {useState, useEffect} from 'react'

import Time from './Time';
import Box from './Box';
import Cancel from '../Cancel';

function shuffle(array) { 
  array.sort(() => Math.random() - 0.5); 
}

let nums = Array.from({length: 25}, (v, i) => i+1);
shuffle(nums);

const scoreHeight = 100;

const Board = () => {
  const [boxSize, setBoxSize] = useState(500);

  useEffect(() => {
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    }
  }, [])

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

  return (
    <div className="game">
      <Time height={ scoreHeight } />
      <Box size={ boxSize } nums={nums} />
      <Cancel />
    </div>
  )
}

export default Board
