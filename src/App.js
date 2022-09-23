import "./App.css";
import GameContainer from "./components/GameContainer/GameContainer";

function App() {
  return (
    <div className="App">
      <div className="container">
        <div className="heading">
          <h1 className="title">2048</h1>
          <div className="scores-container">
            <div className="score-addition"></div>
            <div className="best-container"></div>
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
          <a
            className="restart-button"
            onClick={() => window.location.reload()}
          >
            New Game
          </a>
        </div>

        <GameContainer />
      </div>
    </div>
  );
}

export default App;
