import './App.css';
import React, { useState } from 'react';

function Square({ value, onSquareClick }) {
  return (
    <button className="square" onClick={onSquareClick}>
      {value}
    </button>
  );
}

export default function Board() {
  const [xIsNext, setXIsNext] = useState(true);
  const [squares, setSquares] = useState(Array(9).fill(null));
  function hadleClick(i) {
    const nextSquares = squares.slice();
    if (xIsNext) {
      nextSquares[i] = 'X';
    } else {
      nextSquares[i] = 'O';
    }
    setSquares(nextSquares);
    setXIsNext(!xIsNext);
  }
  return (
    <>
      <div className="board-row">
        <Square value={squares[0]} onSquareClick={() => hadleClick(0)} />
        <Square value={squares[1]} onSquareClick={() => hadleClick(1)} />
        <Square value={squares[2]} onSquareClick={() => hadleClick(2)} />
      </div>
      <div className="board-row">
        <Square value={squares[3]} onSquareClick={() => hadleClick(3)} />
        <Square value={squares[4]} onSquareClick={() => hadleClick(4)} />
        <Square value={squares[5]} onSquareClick={() => hadleClick(5)} />
      </div>
      <div className="board-row">
        <Square value={squares[6]} onSquareClick={() => hadleClick(6)} />
        <Square value={squares[7]} onSquareClick={() => hadleClick(7)} />
        <Square value={squares[8]} onSquareClick={() => hadleClick(8)} />
      </div>
    </>
  );
}
