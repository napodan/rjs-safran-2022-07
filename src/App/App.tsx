import React from "react";
import "./App.css";
import Header from "./components/Header/Header";
import Tchat from "./components/ui/Tchat/Tchat";

function App() {
  return (
    <>
      <Header version="1.0" />
      <div className="App">
        <Tchat />
      </div>
    </>
  );
}

export default App;
