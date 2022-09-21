import "./App.css";

function App() {
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
          <div className="game-message"></div>

          <div className="grid-container">
            <div class="grid-row">
              <div class="grid-cell"></div>
              <div class="grid-cell"></div>
              <div class="grid-cell"></div>
              <div class="grid-cell"></div>
            </div>
            <div class="grid-row">
              <div class="grid-cell"></div>
              <div class="grid-cell"></div>
              <div class="grid-cell"></div>
              <div class="grid-cell"></div>
            </div>
            <div class="grid-row">
              <div class="grid-cell"></div>
              <div class="grid-cell"></div>
              <div class="grid-cell"></div>
              <div class="grid-cell"></div>
            </div>
            <div class="grid-row">
              <div class="grid-cell"></div>
              <div class="grid-cell"></div>
              <div class="grid-cell"></div>
              <div class="grid-cell"></div>
            </div>
          </div>

          <div className="title-container"></div>
        </div>
      </div>
    </div>
  );
}

export default App;
