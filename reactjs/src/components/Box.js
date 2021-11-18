import React, { useState, useMemo  } from 'react'

import Tile from './Tile';

const Box = ({size, nums}) => {
  const [tiles, setTiles] = useState([]);

  // const handleTileClick = (e) => {
  //   if(e.target)
  // };

  useMemo (
    () => {
      let arr = []
      nums.forEach((item, index) => {
        arr.push(<Tile key={index} id={item} />)
      });
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
