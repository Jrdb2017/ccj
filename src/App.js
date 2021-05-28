import logo from './logo.svg';
import './App.css';
import React, {useState, useEffect} from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import PostType from './pages/PostType'
import PostFormat from './pages/PostFormat'
import GetStarted from './pages/GetStarted'
import Topics from './pages/Topics'
import Results from './pages/Results'
import NavBar from './components/NavBar'
function App() {

  return (
    <div>
      
      <Router>
          <NavBar/>
          <Switch>
            <Route path="/postTypes">
              {/* <PostType/> */}
            </Route>
            <Route path="/topics">
              <Topics/>
            </Route>
            <Route path="/results">
              <Results></Results>
            </Route>
            <Route path="/postformat">
              <PostFormat></PostFormat>
            </Route>
            <Route exact path="/">
              <GetStarted/>  
            </Route>
          </Switch>
      </Router>
     
      
    </div>
  );
}

export default App;
