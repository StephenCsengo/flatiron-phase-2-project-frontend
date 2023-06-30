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

  //Fetch initial list of hikes
  useEffect(() => {
    fetch(`${process.env.REACT_APP_API_URL}/hikes`)
      .then((resp) => resp.json())
      .then((data) => setHikes(data));
  }, []);

  function addHike(newHike) {
    setHikes([...hikes, newHike]);
  }

  //Remove hike from initial hike state and add it to completed state
  function completeHike(completedHike) {
    setHikes(hikes.filter((hike) => hike.id !== completedHike.id));
    setCompletedHikes([...completedHikes, completedHike]);
  }

  //Remove hike from homescreen
  function removeHike(RemovedHike) {
    setHikes(hikes.filter((hike) => hike.id !== RemovedHike.id));
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
            onCompleteHike={completeHike}
            onRemoveHike={removeHike}
          />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
