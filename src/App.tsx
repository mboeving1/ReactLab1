import React from 'react';
import Header from './components/Header';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import AdDesign from './components/AdDesign';
import Votes from './components/Votes';
import Ad from "./components/Ad"

function App() {
  return (
    <div className="App">
      <Header user="Matthew"/>
      <div className="card">
      <Ad flavor="Chocolate" fontSize={30} darkTheme={true} />
      <Ad flavor="Vanilla" fontSize={30} darkTheme={false}/>
      <Ad flavor="Strawberry" fontSize={30} darkTheme={true}/>

      </div>
      <AdDesign/>
      <Votes/>
      </div>
  );
}

export default App;
