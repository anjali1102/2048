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

  // console.log("emptyGrid", emptyGrid);
  console.log("randomGenerator", randomGenerator(emptyGrid));

  useEffect(() => {
    window.addEventListener("keydown", onKeyDown);

    return () => {
      window.removeEventListener("keydown", onKeyDown);
    };
  });

  const Cell = ({ number }) => {
    return (
      <div className={`cell cell- ${number}`}>{number > 0 ? number : ""}</div>
    );
  };

  const left = () => {
    const newGrid = moveLeft(grid);
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
      window.prompt("You win ! 🎉");
    } else if (isOver(grid)) {
      window.prompt("Game Over !");
    }
  };

  // will extract this to separate file
  const onKeyDown = (e) => {
    console.log("e", e, e.key);
    switch (e.key) {
      case "ArrowLeft":
        console.log("onkeyDown");
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
  );
};

export default GameContainer;
