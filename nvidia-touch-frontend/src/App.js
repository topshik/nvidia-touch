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

export const API_URL = "http://nvidia-touch.com:443/api";
// export const API_URL = "http://192.168.1.7:8000/api";
export const MY_ID = "117";

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
          <a className="nav-link" href="/coffee" tabIndex="-1" aria-disabled="true">Random Coffee</a>
        </li>
      </ul>

        {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
        <Switch>
          <Route exact path="/">
            <Search api_url={API_URL}/>
          </Route>
          <Route path="/profile/:id" 
          render={(props) => (
            <Profile {...props} api_url={API_URL} />
          )}
          >
          </Route>
          <Route path="/profile">
            <Profile api_url={API_URL} my_id={MY_ID}/>
          </Route>
          <Route path="/projecthunt">
            <ProjectHunt api_url={API_URL}/>
          </Route>
          <Route path="/coffee">
            <RandomCoffee api_url={API_URL} my_id={MY_ID}/>
          </Route>
        </Switch>
      </div>
    </Router>
    </div>
  );
}

export default App;
