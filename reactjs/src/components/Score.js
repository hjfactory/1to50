import React from 'react'

const Score = ({height}) => {
  let score = "0.000";
  return (
    <div className="score" style={{height: height}}>
      {score}
    </div>
  )
}

export default Score
