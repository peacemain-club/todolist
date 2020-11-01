import React from 'react';
import './App.scss';

import MainPage from './pages/MainPage';
import AddPage from './pages/AddPage';

import Header from './components/Header';

function App() {
  return (
    <>
      <Header />
      <MainPage />
      {/* <AddPage data={'777777'} /> */}
    </>
  );
}

export default App;
