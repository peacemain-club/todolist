import React, {useState} from 'react';

import Complete from './components/Complete';
import Todolist from './components/Todolist';

import './styles.scss';

function MainPage({list, changeComplete}) {
  const todo = list.filter((data) => data.is_done === false);
  const comp = list.filter((data) => data.is_done === true);

  return (
    <div className='main-page__background background'>
      <Todolist list={todo} changeComplete={changeComplete} />
      <Complete list={comp} changeComplete={changeComplete} />
    </div>
  );
}

export default MainPage;

// const defaultState = [
//   {
//     name: '운동하기',
//     is_done: false,
//   },
// ];
