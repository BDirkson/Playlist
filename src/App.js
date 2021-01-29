import React from "react";

import "./App.css";
import SongOverview from "./components/SongOverview";
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Home from './components/Home';
import About from './components/About';
import Navigation from './components/Navigation';

const App = () => {
  return (
    <div className="App">
      <header className="App-header">
        <h1> Winc lil' Playlist</h1>
        <BrowserRouter>
          <div>
            <Navigation />
              <Switch>
                <Route path="/" component={Home} exact/>
                <Route path="/about" component={About}/>
              </Switch>
          </div> 
        </BrowserRouter>
      </header>
        < SongOverview />
    </div>

  );
};

export default App;

// app is okay