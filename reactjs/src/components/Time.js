import React, { useEffect } from 'react'
import { useRecoilState } from 'recoil';
import { timeState } from '../recoil/atoms/gameAtom';

const Time = ({height}) => {
  const [time, setTime] = useRecoilState(timeState);

  useEffect(() => {
    const startTime = new Date();
    // console.log(startTime);
    const timer = setInterval(() => {
      let nowTime = new Date();
      let elapsedTime = (nowTime.getTime() - startTime.getTime()) / 1000;
      setTime(elapsedTime); // 소숫점 3글자 표시 https://stackoverflow.com/questions/610406/javascript-equivalent-to-printf-string-format
  
    }, 1);

    return () => {
      clearInterval(timer);
    }
  }, [setTime])

  return (
    <div className="score" style={{height: height}}>
      {time.toFixed(3)}
    </div>
  )
}

export default Time
