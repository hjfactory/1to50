import React from 'react'
import { useRecoilValue } from 'recoil';
import { modeState, MODE_WELCOME, MODE_GAME } from "../recoil/atoms/gameAtom";

import Board from './Board';
import Welcome from './Welcome';


const Game = () => {
  const mode = useRecoilValue(modeState);

  return (
    <>
      { mode === MODE_WELCOME && <Welcome /> }
      { mode === MODE_GAME && <Board /> }
    </>
  )
}

export default Game
