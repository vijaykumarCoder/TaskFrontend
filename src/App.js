import React from 'react';
import './App.css';
import Navbar from './components/Navbar';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './pages/Home';
import AddUser from './pages/AddUser';
import Products from './pages/Products';
import AllUsers from './pages/AllUsers';


function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Switch>
          <Route path='/' exact component={Home} />
          <Route path='/AddUser' component={AddUser} />
          <Route path='/products' component={Products} />
        </Switch>
      </Router>
    </>
  );
}

export default App;
