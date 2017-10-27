import React, { Component } from 'react';
import './App.css';
import { BrowserRouter, Route } from 'react-router-dom';
import Login from './components/Login/Login';
import Profile from './components/Profile/Profile';


class App extends Component {
  render() {
    return (
<<<<<<< HEAD
      <div className="App">
        
      </div>
=======
      <BrowserRouter>
        <div className="App">
          <Route path='/' exact component={ Login }/>
          <Route path='/profile' component={ Profile } />
        </div>
      </BrowserRouter>
>>>>>>> 23ffe4f661a8dba2a2cc6a664d92c1ccf4f7c9a5
    );
  }
}

export default App;
