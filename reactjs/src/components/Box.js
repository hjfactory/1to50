import React, { useState, useMemo  } from 'react'

const Box = ({size, nums}) => {
  const [tiles, setTiles] = useState([]);

  useMemo (
    () => {
      let arr = []
      nums.forEach((item, index) => {
        arr.push(<div className="tile" key={index}>{nums[index]}</div>);
      });

      console.log("box", nums);
      setTiles(arr);
    },
    [nums],
  );

  return (
    <div className="box" style={{width: size, height: size}}>
      {tiles}
    </div>
  )
}

export default Box
