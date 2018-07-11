import React from "react";
import ReactDOM from "react-dom";
import Search from "./Search/search"

import "./styles.css";

function App() {
  return (
    <div className="container">
      <h1>Search</h1>
      <Search />
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);

export default App;
