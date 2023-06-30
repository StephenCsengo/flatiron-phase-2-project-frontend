import React, { useState, useEffect } from "react";
import { Route, Switch } from "react-router-dom";
import "./App.css";
import Header from "./components/Header";
import HikePage from "./components/HikePage";
import Navbar from "./components/Navbar";
import CompletePage from "./components/CompletePage";
import CompleteForm from "./components/CompleteForm";
import AddHike from "./components/AddHike";

function App() {
  const [hikes, setHikes] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3000/hikes")
      .then((resp) => resp.json())
      .then((data) => setHikes(data));
  }, []);

  function addHike(newHike) {
    setHikes([...hikes, newHike]);
  }

  return (
    <div className="App">
      <Header />
      <Navbar />
      <Switch>
        <Route path="/completed">
          <CompletePage />
        </Route>
        <Route path="/completeform">
          <CompleteForm />
        </Route>
        <Route path="/addhike">
          <AddHike onAddHike={addHike} />
        </Route>
        <Route exact path="/">
          <HikePage hikes={hikes} />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
