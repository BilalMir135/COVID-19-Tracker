import React from 'react';
import './App.css';
import Nav from './components/NavBar/Nav';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Global from './components/Global/Global';
import Country from './components/Country';

function App() {
  return (
    <div className='App'>
      <Router>
        <Nav />
        <Switch>
          <Route path='/' exact component={Global} />
          <Route path='/country' component={Country} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
