import logo from "./ajlogo.jpg";
import "./App.css";
import Dictionary from "./Dictionary";

function App() {
  return (
    <div className="App">
      <div className="container">
        <header className="App-header">
          <img src={logo} className="App-logo img-fluid" alt="logo" />
        </header>
        <main>
          <Dictionary defaultKeyword="sunset" />
        </main>
        <footer className="App-footer">
          Coded by
          <a
            href="https://www.linkedin.com/in/amanjyot-singh-74219810a/"
            target="_blank"
            rel="noreferrer"
          >
            Amanjyot Singh
          </a>
        </footer>
      </div>
    </div>
  );
}

export default App;
