import React from "react";
import Weather from "./Weather";
import "./App.css";

function App() {
  return (
    <div className="App">
      <div className="container">
        <Weather defaultCity="Jesi" />

        <footer>
          <a
            href="https://github.com/isyolini/react-weather-app.git"
            target="_blank"
            rel="noreferrer"
          >
            Open-source code
          </a>{" "}
          by{" "}
          <a
            href="https://www.linkedin.com/in/isabellarossolini/"
            target="_blank"
            rel="noreferrer"
          >
            IsyOlini
          </a>
        </footer>
      </div>
    </div>
  );
}

export default App;
