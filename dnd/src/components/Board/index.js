import React from 'react';
import Knight from '../Knight';
import Square from '../square';
import './index.css';

import { DndProvider } from 'react-dnd'
import { HTML5Backend } from 'react-dnd-html5-backend'

function renderSquare(i, [knightX, knightY], setPos) {
  const x = i % 8
  const y = Math.floor(i / 8)
  const isKnightHere = x === knightX && y === knightY
  const black = (x + y) % 2 === 1
  const piece = isKnightHere ? <Knight /> : null

  const updatePosition = ()=>{
    setPos({posX:x, posY:y})
  }

  return (
    <div key={i} style={{ width: '100%', height: '100%'}} className='square' onClick={updatePosition}>
      <Square black={black}>{piece}</Square>
    </div>
  )
}





const Board = ({knightPosition, setPos}) => {
  const renderSquares = ()=>{
    const squares = [];
    for (let i = 0; i < 64; i++) {
      squares.push(renderSquare(i, knightPosition, setPos))
    }
    return squares;
  }

  return (
    // <DndProvider backend={HTML5Backend}>
    //   <div
    //   style={{
    //     height: '100vh',
    //     display: 'grid',
    //     gridTemplateColumns:"repeat(8, auto)",
    //     gridTemplateRows:"repeat(8, auto)"
    //   }}
    // >
    //   {renderSquares()}
    // </div>
    // </DndProvider>
    <div
      style={{
        height: '100vh',
        display: 'grid',
        gridTemplateColumns:"repeat(8, auto)",
        gridTemplateRows:"repeat(8, auto)"
      }}
    >
      {renderSquares()}
    </div>
  )
}

export default Board