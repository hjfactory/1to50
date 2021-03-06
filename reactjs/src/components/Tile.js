import React, { useState } from 'react'
import { useRecoilState, useRecoilValue } from 'recoil';

import { stepState, nextStepSelector } from '../recoil/atoms/gameAtom';

const Tile = ({ id }) => {
  const [num, setNum] = useState(id);

  const [step, setStep] = useRecoilState(stepState);
  const nextStep = useRecoilValue(nextStepSelector);

  const handleStep = () => {
    if(num === step){
      let nextNum = nextStep;

      setNum(nextNum);
      setStep(step + 1);
    }
  }

  return (
    <div className="tile" onClick={handleStep}>
      {num}
    </div>
  )
}

export default Tile