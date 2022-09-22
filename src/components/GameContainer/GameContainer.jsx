import { React, useEffect, useState } from "react";
import {
  checkWin,
  emptyBoard,
  isOver,
  moveDown,
  moveLeft,
  moveRight,
  moveUp,
  randomGenerator,
} from "../GameActions/GameActions";
import "./GameContainer.css";

const emptyGrid = emptyBoard();

const GameContainer = () => {
  const [grid, setGrid] = useState(randomGenerator(emptyGrid));
  // const [score, setScore] = useState(0);

  // console.log("emptyGrid", emptyGrid);
  // console.log("randomGenerator", randomGenerator(emptyGrid));

  useEffect(() => {
    window.addEventListener("keydown", onKeyDown);

    return () => {
      window.removeEventListener("keydown", onKeyDown);
    };
  });

  const Cell = ({ number }) => {
    return (
      <div className={`cell cell-${number}`}>{number > 0 ? number : ""}</div>
    );
  };

  const left = () => {
    // const { score , } = useScore();
    const newGrid = moveLeft(grid);
    // console.log("score", score);
    setGrid(randomGenerator(newGrid));
    checkEndGame();
  };

  const right = () => {
    const newGrid = moveRight(grid);
    setGrid(randomGenerator(newGrid));
    checkEndGame();
  };

  const up = () => {
    const newGrid = moveUp(grid);
    setGrid(randomGenerator(newGrid));
    checkEndGame();
  };

  const down = () => {
    const newGrid = moveDown(grid);
    setGrid(randomGenerator(newGrid));
    checkEndGame();
  };

  const checkEndGame = () => {
    if (checkWin(grid)) {
      window.confirm("You win ! 🎉");
    } else if (isOver(grid)) {
      console.error("Game over");
      window.confirm("Game Over !");
    }
  };

  // will extract this to separate file
  const onKeyDown = (e) => {
    switch (e.key) {
      case "ArrowLeft":
        left();
        break;
      case "ArrowRight":
        right();
        break;
      case "ArrowUp":
        up();
      case "ArrowDown":
        down();
        break;

      default:
    }
  };

  return (
    <div>
      <div className="grid-container">
        {grid.map((Eachrow, RowIndex) => {
          return (
            <div key={RowIndex} className="eachRow">
              {Eachrow.map((cell, ColumnIndex) => (
                <Cell
                  key={`cell ${RowIndex}-${ColumnIndex}`}
                  number={cell}
                ></Cell>
              ))}
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default GameContainer;
