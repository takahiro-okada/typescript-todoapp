/* eslint-disable no-use-before-define */
// eslint-disable-next-line no-unused-vars
import React, { useState } from "react";
import "./App.css";

function App() {
  const [text, setText] = useState<string>("");
  return (
    <div className="App">
      <h1>test</h1>
      value:{text}
      <br />
      <input
        type="text"
        value={text}
        onChange={(e) => setText(e.target.value)}
      />
    </div>
  );
}

export default App;
