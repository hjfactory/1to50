import React from 'react'

const Box = ({size, nums}) => {
  let rows = [];
  for(var i=0; i<5; i++){
    let cols = [];
    for(var j=0; j<5; j++){
      cols.push(
        <div className="col">
          <div className="col-text">{nums[i*5+j]}</div>
        </div>
      )
    }
    rows.push(<div className="row">{cols}</div>)
  }

  return (
    <div className="box" style={{width: size, height: size}}>
      {rows}
    </div>
  )
}

export default Box
