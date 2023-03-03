import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { Navbar } from 'react-bootstrap';
import Login from './Login';
import Signup from './Signup';
import CreateProfile from './createprofile';
import Home from './Home';

const App = () => {
  return (
    <Router>
      <Navbar bg="light" expand="lg">
        <Navbar.Brand href="#home"></Navbar.Brand>
      </Navbar>

      <Switch>
        <Route exact path="/home" component={Home} />
        <Route path="/signup" component={Signup} />
        <Route path="/createprofile" component={CreateProfile} />
        <Route path="/login" component={Login} />
      </Switch>
    </Router>
  );
};

export default App;
