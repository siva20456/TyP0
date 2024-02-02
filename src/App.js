import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="header">
        <div className="container-header">
          <div className="logo">
            <h1>TyP0</h1>
          </div>
          <div className="stats">
            <p>Average WPM: <span className="wpm">60</span></p>
            <p>Accuracy: <span className="accuracy">95%</span></p>
          </div>
        </div>
      </header>
      <div className="container">
        <div className="words-container">
          <h2>Type the following words:</h2>
          <p>Word 1</p>
          <p>Word 2</p>
          <p>Word 3</p>
        </div>
        <div className="input-container">
          <input type="text" placeholder="Start typing..." />
        </div>
      </div>
    </div>
  );
}

export default App;
