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
import NavBar from './components/NavBar'
function App() {

  return (
    <div>
      
      <Router>
          <NavBar/>
          <Switch>
            <Route path="/postTypes">
              <PostType/>
            </Route>
            <Route path="/topics">
            {/* <Topics/> */}
            </Route>
            <Route path="/results">
              {/* <Results></Results> */}
            </Route>
            <Route path="/postFormat">
              {/* <PostFormat></PostFormat> */}
            </Route>
            <Route exact path="/">
              <div class="flex-shrink-0 items-center max-w-sm mx-auto ">
             
              <svg xmlns="http://www.w3.org/2000/svg" class="h-24 w-24" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
              </svg>
              <label for="user">What's your name?</label>
              <input type="text" class="border-brown" id="user"></input><br/>
              <label for="userBusinessName">What's your business name (optional)?</label>
              <input type="text" class="border-brown" id="userBusinessName"></input><br/>
              </div>
              <div class="mx-32">
                <Link  to="/postTypes">
                  <button  class="px-4 py-1 text-sm text-brown-dark font-semibold rounded-full border border-brown  hover:text-white hover:bg-brown-dark  hover:border-transparent focus:outline-none focus:ring-2 focus:ring-brown-dark focus:ring-offset-2">Let's Start</button>
                </Link>
              </div>             
            </Route>
          </Switch>
      </Router>
     
      
    </div>
  );
}

export default App;
