import React from "react";
import { Route } from "react-router-dom";
import "./App.css";
import Header from "./components/Header";
import HikePage from "./components/HikePage";
import Navbar from "./components/Navbar";

function App() {
  return (
    <div className="App">
      <Route path="/">
        <Header />
        <Navbar />
        <HikePage />
      </Route>
    </div>
  );
}

export default App;
