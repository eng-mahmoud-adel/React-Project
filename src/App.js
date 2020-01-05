import React, { Component } from 'react';
import {BrowserRouter, Route} from 'react-router-dom';
import Navbar from './Components/Navbar/index'
import Contact from './Components/Contact/index'
import Index from './Components/Index';

class App extends Component {
  render () {
    return (
      <BrowserRouter className="App">
        <Navbar />
        <Route exact path= "/" component= {Index} />
        <Route path= "/contact" component= {Contact} />
      </BrowserRouter>
    );
  }
}

export default App;
