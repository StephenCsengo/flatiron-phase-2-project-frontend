import React, { useState, useEffect } from "react";
import { Route, Switch } from "react-router-dom";
import "./App.css";
import Header from "./components/Header";
import HikePage from "./components/HikePage";
import Navbar from "./components/Navbar";
import CompletePage from "./components/CompletePage";
import AddHike from "./components/AddHike";

function App() {
  const [hikes, setHikes] = useState([]);
  const [completedHikes, setCompletedHikes] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3000/hikes")
      .then((resp) => resp.json())
      .then((data) => setHikes(data));
  }, []);

  function addHike(newHike) {
    setHikes([...hikes, newHike]);
  }

  function completeHike(completedHike) {
    setHikes(hikes.filter((hike) => hike.id !== completedHike.id));
    setCompletedHikes([...completedHikes, completedHike]);
    console.log(completedHikes);
  }
  return (
    <div className="App">
      <Header />
      <Navbar />
      <Switch>
        <Route path="/completed">
          <CompletePage completedHikes={completedHikes} />
        </Route>
        <Route path="/addhike">
          <AddHike onAddHike={addHike} />
        </Route>
        <Route exact path="/">
          <HikePage
            hikes={hikes}
            completedHikes={completedHikes}
            onCompleteHike={completeHike}
          />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
