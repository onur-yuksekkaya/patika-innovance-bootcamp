import "./App.css";
import SelectCharacter from "./components/SelectChracter";

function App() {
  return (
    <div className="container">
      <div>
        <h2>THE GIRL WHO WALKS ALONE IN URFA/HARRAN</h2>
      </div>
      <div className="game-area">
        <SelectCharacter />
        <div className="game-tips">
          <h3>GAME TIPS</h3>
          <p>-You can use arrow keys on game !</p>
          <p>-Press Space for Speed Up !</p>
        </div>
      </div>
    </div>
  );
}

export default App;
