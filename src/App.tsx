import React from 'react';
import Header from './components/Header';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import AdDesign from './components/AdDesign';
import Votes from './components/Votes';

function App() {
  return (
    <div className="App">
      <Header/>
      <AdDesign/>
      
      
      <Votes/>
      </div>
  );
}

export default App;
