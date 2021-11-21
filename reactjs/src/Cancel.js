import React from 'react'
import { useSetRecoilState } from 'recoil'
import { modeState, MODE_WELCOME } from './recoil/atoms/gameAtom';

const Cancel = () => {
  const setMode = useSetRecoilState(modeState);
  const handleCancel = () => {
    setMode(MODE_WELCOME);
  }

  return (
    <div className="cancel" onClick={handleCancel}>
      취소
    </div>
  )
}

export default Cancel