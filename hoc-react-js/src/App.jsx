import "./App.css";
import Header from "./Header";
import logo from "./logo.svg";

function App() {
  return (
    <>
      <Header />
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="title">Unicode Academy</h1>
          <p>Chào mừng bạn đến với khoá học ReactJS</p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header>
      </div>
    </>
  );
}

export default App;
