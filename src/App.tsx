import React from 'react';
import logo from './logo.svg';
import Navbar from './components/Navbar'
import Sidebar from './components/Sidebar'
import Footer from './components/Footer'
import Home from './views/Home'
import Pool from './views/Pool'
import Prediction from './views/Prediction'
import Prediction2 from './views/Prediction2'
import Exchange from './views/Exchange'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

function App() {
  return (

      <Router>
        <div className="main-frame">
          <Sidebar/>
          <aside className="main-frame-aside">
            <Navbar/>
            <div className="middlesec">
              <Switch>
                  <Route exact path="/">
                    <Home />
                  </Route>
                  <Route path="/pool">
                    <Pool />
                  </Route>
                  <Route path="/farm">
                    <Pool tokenMode/>
                  </Route>
                  <Route path="/prediction">
                    <Prediction />
                  </Route>
                  <Route path="/prediction2">
                    <Prediction2 />
                  </Route>
                  <Route path="/exchange">
                    <Exchange />
                  </Route>
              </Switch>
            </div>
            <Footer/>
          </aside>

        </div>
      </Router>
  );
}

export default App;
