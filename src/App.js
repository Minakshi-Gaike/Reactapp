import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://ciitstudent.com/"
          target="_blank"
          rel="noopener noreferrer"
        >
         CIIT Student
        
        </a>
        <br/>
         <button>display</button>
         <br/>
         <button>submit</button>
         <br/>
         <button>reset</button>
      </header>
    </div>
  );
}

export default App;
