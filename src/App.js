import React, { Component } from 'react';
import './App.css';
import { BrowserRouter, Route } from 'react-router-dom';
import Login from './components/Login/Login';
import Profile from './components/Profile/Profile';


class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <Route path='/' exact component={ Login }/>
          <Route path='/profile' component={ Profile } />
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
