import React from 'react';
import './App.css';
import Home from './containers/Home'
import Header from './components/Headers';
import Hero from './components/Hero';

function App() {
  return (
    <div className="App">
      <Header/>
      <Hero/>
     <Home/>
    </div>
  );
}

export default App;
