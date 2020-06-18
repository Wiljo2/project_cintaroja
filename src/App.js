import React  from 'react';
import './App.css';
import Maps from "./components/Maps/Maps" ;
import { Map, GoogleApiWrapper } from 'google-maps-react';


function App() {
  return (
    <>
    <Maps/>
    </>
  );
}

export default App;
