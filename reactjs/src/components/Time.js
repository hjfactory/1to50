import React, { useState, useEffect } from 'react'

const Time = ({height}) => {
  const [time, setTime] = useState('0.000');

  useEffect(() => {
    const startTime = new Date();
    // console.log(startTime);
    const timer = setInterval(() => {
      let nowTime = new Date();
      let elapsedTime = (nowTime.getTime() - startTime.getTime()) / 1000;
      setTime(elapsedTime.toFixed(3)); // 소숫점 3글자 표시 https://stackoverflow.com/questions/610406/javascript-equivalent-to-printf-string-format
  
    }, 1);

    return () => {
      clearInterval(timer);
    }
  }, [])

  return (
    <div className="score" style={{height: height}}>
      {time}
    </div>
  )
}

export default Time
