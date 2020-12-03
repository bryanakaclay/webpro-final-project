import React from 'react'
import './App.css'
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom'
import {International, Local, Province} from './Components' 

const App = () =>{
  return(
    <Router>
      <div>
        <div className="header">
        <h1>COVID-19 Tracker</h1>
        </div>
        <h3>Badiam sadiki napa dirumah? ¯\_(ツ)_/¯</h3>
        <nav>
          <ul>
            <li>
              <Link to="/International">
                International
              </Link>
            </li>
            <li>
              <Link to="/Local">
                Local
              </Link>
            </li>
            <li>
              <Link to="/Province">
                Province
              </Link>
            </li>
          </ul>
        </nav>
      </div>
      <Switch>
        <Route path="/International">
          <International />
        </Route>
        <Route path="/Local">
          <Local />
        </Route>
        <Route path="/Province">
          <Province />
        </Route>
      </Switch>
    </Router>
  )
}

export default App