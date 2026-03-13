import Square from "./Square.jsx";
import { useState } from "react";

export default function Box(){
  const [xTrue, setTrue] = useState(true);
  const [squares, setSquares] = useState(Array(9).fill(null));

  function handleClick(i) {

    const nextSquares = squares.slice();

    if (xTrue) {
      nextSquares[i] = "X";
    } else {
      nextSquares[i] = "O";
    }

    setSquares(nextSquares);
    setTrue(!xTrue);
  }
  return (
    <>
      <div className="board-row">
        <Square va={squares[0]} onClick={() => handleClick(0)} />
        <Square va={squares[1]} onClick={() => handleClick(1)} />
        <Square va={squares[2]} onClick={() => handleClick(2)} />
      </div>

      <div className="board-row">
        <Square va={squares[3]} onClick={() => handleClick(3)} />
        <Square va={squares[4]} onClick={() => handleClick(4)} />
        <Square va={squares[5]} onClick={() => handleClick(5)} />
      </div>

      <div className="board-row">
        <Square va={squares[6]} onClick={() => handleClick(6)} />
        <Square va={squares[7]} onClick={() => handleClick(7)} />
        <Square va={squares[8]} onClick={() => handleClick(8)} />
      </div>
    </>
  );
}
