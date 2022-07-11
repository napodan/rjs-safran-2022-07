import React from "react";
import "./App.css";
import Button from "./App/components/Button/Button";

function App() {
  return (
    <div className="App">
      <Button
        onclick={(arg: String) => {
          console.log(arg);
        }}
      >
        Benjamin
        <br />
        Button
      </Button>
    </div>
  );
}

export default App;
