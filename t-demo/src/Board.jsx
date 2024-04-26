import React from 'react';
import Square from './Square';
import CalculateWinner from './CalculateWinner';
import './Board.css'; // 引入 Board 的 CSS 文件

function Board({ size, squares, onPlay }) {
  const [xIsNext, setXIsNext] = React.useState(true);

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
    const currentPlayer = xIsNext ? 'X' : 'O';
    status = 'Next player: ' + currentPlayer;
  }

  return (
    <div className='board'>
      <div className='status'>{status}</div>
      {Array.from({ length: size }).map((_, rowIndex) => (
        <div key={rowIndex} className='board-row'>
          {Array.from({ length: size }).map((_, colIndex) => (
            <Square
              key={rowIndex * size + colIndex}
              value={squares[rowIndex * size + colIndex]}
              onSquareClick={() => handleClick(rowIndex * size + colIndex)}
            />
          ))}
        </div>
      ))}
    </div>
  );
}

export default Board;
