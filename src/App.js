import React from "react";
import { Route } from "react-router-dom";
import "./App.css";
import Header from "./components/Header";
import HikePage from "./components/HikePage";
import Navbar from "./components/Navbar";
import CompletePage from "./components/CompletePage";

function App() {
  return (
    <div className="App">
      <Route path="/completed">
        <CompletePage />
      </Route>
      <Route exact path="/">
        <Header />
        <Navbar />
        <HikePage />
      </Route>
    </div>
  );
}

export default App;
