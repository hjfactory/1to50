import React, { useState } from 'react'
import { useRecoilValue } from 'recoil';

import { stepSelector, nextStepSelector } from '../recoil/atoms/gameAtom';

const Tile = ({ id }) => {
  const [num, setNum] = useState(id);

  const step = useRecoilValue(stepSelector);
  const nextStep = useRecoilValue(nextStepSelector);

  const handleStep = () => {
    let s = step;
    console.log('start handleStep', id, s)
    if(id === s){
      let nextNum = nextStep;

      console.log('nextNum', nextNum, 10)
      setNum(nextNum);
    }
  }

  return (
    <div className="tile" onClick={handleStep}>
      {num}
    </div>
  )
}

export default Tile