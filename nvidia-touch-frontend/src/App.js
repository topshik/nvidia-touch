import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import { Search } from "./components/Search"
import { Profile } from "./components/Profile"
import { ProjectHunt } from "./components/ProjectHunt"
import { RandomCoffee } from "./components/RandomCoffee"

function App() {
  return (
    <div className="App">
    <Router>
      <div>
      <ul className="nav justify-content-end">
        <li className="nav-item nvidia-nav-item">
          <a className="nav-link" href="/">Search</a>
        </li>
        <li className="nav-item nvidia-nav-item">
          <a className="nav-link" href="/profile">Profile</a>
        </li>
        <li className="nav-item nvidia-nav-item">
          <a className="nav-link" href="/projecthunt">Project Hunt</a>
        </li>
        <li className="nav-item nvidia-nav-item">
          <a className="nav-link" href="/coffee" tabindex="-1" aria-disabled="true">Random Coffee</a>
        </li>
      </ul>

        {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
        <Switch>
          <Route exact path="/">
            <Search />
          </Route>
          <Route path="/profile">
            <Profile />
          </Route>
          <Route path="/projecthunt">
            <ProjectHunt />
          </Route>
          <Route path="/coffee">
            <RandomCoffee />
          </Route>
        </Switch>
      </div>
    </Router>
    </div>
  );
}

export default App;
