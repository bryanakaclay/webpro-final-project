import React, {useEffect, useState} from 'react'
import axios from 'axios'
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom'
import './App.css'
import header from './component'
import { international, local, province } from './link'

const App = () =>{
  return (
    <Router>
      <div>
        <h1>Covid-19 Tracker</h1>
        <nav>
          <ul>
            <li>
              <Link to="/international">
                International
              </Link>
            </li>
            <li>
              <Link to="/local">
                Local
              </Link>
            </li>
            <li>
              <Link to="/province">
                Province
              </Link>
            </li>
          </ul>
      </nav>
    </div>
    <Switch>
      <Route path="/international">
        <international />
      </Route>
      <Route path="/local">
        <local />
      </Route>
      <Route path="/province">
        <province />
      </Route>
    </Switch>
  </Router>
  )
}

export default App;