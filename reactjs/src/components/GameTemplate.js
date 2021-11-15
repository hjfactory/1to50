import React from 'react'
import "./GameTemplate.css"

const GameTemplate = ({ children }) => {
  return (
    <main className="game-template">
      { children }
    </main>
  )
}

export default GameTemplate
