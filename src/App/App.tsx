import React from "react";
import "./App.css";
import Tchat from "./components/ui/Tchat/Tchat";
import Header from "./components/ui/Header/Header";
function App() {
  return (
    <>
      <Header version={"1.0"} />
      <div className="App">
        <Tchat />
      </div>
    </>
  );
}

export default App;
