import React, {useState, useEffect} from 'react'

import './App.css';
import GameTemplate from './components/GameTemplate';
import Score from './components/Score';
import Box from './components/Box';

function App() {
  const scoreHeight = 100;
  const [boxSize, setBoxSize] = useState(500);

  function shuffle(array) { 
    array.sort(() => Math.random() - 0.5); 
  }

  let nums = Array.from({length: 25}, (v, i) => i+1);
  shuffle(nums);
  // for(var i=0; i<nums.length; i++){
  //   var idx = Math.floor(Math.random() * nums.length);

  //   cols[i].textContent = (nums[idx]);
  //   nums.splice(idx, 1);
  // }


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
    <GameTemplate>
      <Score height={ scoreHeight } />
      <Box size={ boxSize } nums={nums} />
    </GameTemplate>
  );
}

export default App;
