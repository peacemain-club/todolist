import React, {useState} from 'react';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';

import './App.scss';

import MainPage from './pages/MainPage';
import AddPage from './pages/AddPage';

import Header from './components/Header';

function App() {
  const [list, setList] = useState([]);

  const addTodo = (input) => {
    setList((origin) => {
      origin.push({
        name: input,
        is_done: false,
      });
      return origin;
    });
  };

  const changeComplete = (name) => () => {
    setList(
      list.map((element) => element.name === name ? {...element, is_done: !element.is_done} : element)
    );
  };

  return (
    <Router>
      <Header />
      <Switch>
        <Route path='/' exact>
          <MainPage list={list} changeComplete={changeComplete} />
        </Route>
        <Route path='/add' exact>
          <AddPage addTodo={addTodo} />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
