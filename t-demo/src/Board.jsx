import React, { useState } from 'react';
import Square from './Square';
import CalculateWinner from './CalculateWinner'; 

function Board({size, squares, onPlay }) { 
  const [xIsNext, setXIsNext] = useState(true); 

  const handleClick = (i) => {
    if (CalculateWinner(squares, size) || squares[i]) {
      return;
    }

    const nextSquares = squares.slice();
    nextSquares[i] = xIsNext ? 'X' : 'O';
    onPlay(nextSquares); 
    setXIsNext(!xIsNext); 
  };

  const winner = CalculateWinner(squares, size);
  let status;
  if (winner) {
    status = 'Winner: ' + winner;
  } else {
    status = 'Next player: ' + (xIsNext ? 'X' : 'O');
  }

  return (
    <>
      <div className='status'>{status}</div>
      {Array.from({ length: size }).map((_, rowIndex) => (
        <div key={rowIndex} className="board-row">
          {Array.from({ length: size }).map((_, colIndex) => (
            <Square
              key={rowIndex * size + colIndex}
              value={squares[rowIndex * size + colIndex]}
              onSquareClick={() => handleClick(rowIndex * size + colIndex)} 
            />
          ))}
        </div>
      ))}
    </>
  );
}

export default Board;
