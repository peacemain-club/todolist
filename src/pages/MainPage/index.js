import React, {useState} from 'react';

import Complete from './components/Complete';
import Todolist from './components/Todolist';

import './styles.scss';

function MainPage() {
  const [list, setList] = useState(defaultState);

  const todo = list.filter((data) => data.is_done === false);
  const comp = list.filter((data) => data.is_done === true);

  const changeComplete = (name) => () => {
    setList(
      list.map((element) => element.name === name ? {...element, is_done: !element.is_done} : element)
    );
  };

  return (
    <div className='main-page__background background'>
      <Todolist list={todo} changeComplete={changeComplete} />
      <Complete list={comp} changeComplete={changeComplete} />
    </div>
  );
}

export default MainPage;

const defaultState = [
  {
    name: '운동하기',
    is_done: false,
  },
  {
    name: '넷플릭스 보기',
    is_done: false,
  },
  {
    name: '빨래하기',
    is_done: false,
  },
  {
    name: '과제하기',
    is_done: true,
  },
  {
    name: '공부하기',
    is_done: false,
  },
];
