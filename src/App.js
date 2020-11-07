import React from 'react';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';

import './App.scss';

import MainPage from './pages/MainPage';
import AddPage from './pages/AddPage';

import Header from './components/Header';

function App() {
  return (
    <Router>
      <Header />
      <Switch>
        <Route path='/' exact>
          <MainPage />
        </Route>
        <Route path='/add' exact>
          <AddPage />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
