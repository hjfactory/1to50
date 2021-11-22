import React from 'react'
import { useSetRecoilState } from 'recoil';
import { modeState, MODE_GAME } from '../recoil/atoms/gameAtom';

import "./Welcome.css";

const Welcome = () => {
  const setMode = useSetRecoilState(modeState);

  const handleStart = () => {
    setMode(MODE_GAME);
  }
  
  return (
    <div className="welcome">
      <div className="panel">
        <div className="header">1 to 50</div>
        <button onClick={handleStart}>시작</button>
      </div>
    </div>
  )
}

export default Welcome
