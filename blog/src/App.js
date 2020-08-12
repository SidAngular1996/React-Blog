import React from 'react';
import './App.css';
import Home from './containers/Home'
import Header from './components/Headers';
import Hero from './components/Hero';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import ContactUS from './containers/ContactUs';
import Post from './containers/Post';

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <Hero />
        <Route path="/" exact component={Home}/>
        <Route path="/contact-us" component={ContactUS}/>
        <Route path="/post/:postid" component={Post}/>
      </div>
    </Router>
  );
}

export default App;
