import React from 'react'
import './App.css'
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom'
import {Header, International, Local, Province} from './Components'

const App = () =>{
  return(
    <div className="main">
    <Router>
      <div>
        <Header />
        <div className="main-nav-container">
          <nav align="center">
            <table align="center">
              <tr className="link1">
                <th className="link1">
                  <Link to="/international">
                    International
                  </Link>
                </th>
                <th className="link2">
                  <Link to="/local">
                    Local
                  </Link>
                </th>
                <th className="link3">
                  <Link to="/province">
                    Province
                  </Link>
                </th>
              </tr>
            </table>
          </nav>
        </div>
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
    </div>
  )
}

export default App