import React  from 'react';
import './App.css';
import Maps from "./components/Maps/Maps" ;
import { Map, GoogleApiWrapper } from 'google-maps-react';
import Landing from "./views/Landing/Landing";

import {
  BrowserRouter as Router,
  Route,
  Switch,
} from "react-router-dom";

function App() {
  return (
    <Router>
        <Switch>
          <Route exact path="/">
            <Maps />
          </Route>
          <Route exact path="/views">
            <Landing/>
          </Route>
          <Route path="*">
          </Route>
        </Switch>
    </Router>
   
  );
}

export default App;
