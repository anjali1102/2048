import { useEffect, useState } from "react";
import "./App.css";

function App() {
  const gridIntialValue = [
    [0, 0, 0, 0],
    [1, 1, 1, 1],
    [2, 2, 2, 2],
    [3, 3, 3, 3],
  ];
  const [grid, setGrid] = useState(gridIntialValue);


  const GridCell = ({ num }) => {
    return <div className="grid-cell">{num}</div>;
  };

  // useEffect(()=>{
    // random()

  // },[])

  return (
    <div className="App">
      <div className="container">
        <div className="heading">
          <h1 className="title">2048</h1>
          <div className="scores-container">
            "60"
            <div className="score-addition">+60</div>
            <div className="best-container">"144"</div>
          </div>
        </div>

        <div className="above-game">
          <p className="game-intro">
            "Join the tiles, get to "<strong>2048!</strong>
            <br />
            <a href="/" className="how-to-play-link">
              How to play →
            </a>
          </p>
          <a className="restart-button">New Game</a>
        </div>

        <div className="game-container">

          <div className="grid-container">
            {grid.map((row, oneIndex) => {
              return (
                <div
                  className="grid-row"
                  style={{ display: "flex" }}
                  key={oneIndex}
                >
                  {row.map((digit, index) => (
                    <GridCell num={digit} key={index}></GridCell>
                  ))}
                </div>
              );
            })}
          </div>

          <div className="title-container"></div>
        </div>
      </div>
    </div>
  );
}

export default App;
