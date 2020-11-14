import React, {useState} from 'react';
import {useHistory} from 'react-router-dom';

import './styles.scss';

function AddPage({addTodo}) {
  const [input, setInput] = useState('');

  const history = useHistory();

  const handleInput = (e) => {
    setInput(e.target.value);
  };

  const handleSubmit = () => {
    if (!input) {
      window.alert('할 일을 입력해주세요');
      return;
    }

    // 투두리스트에 등록하는 함수
    addTodo(input);
    history.push('/');
  };

  return (
    <div className='add-page__background background'>
      <h3>할 일 추가</h3>
      <div className='list-selector'>
        할 일 목록
        <div className='list-selector-dropdown'>
          <div className='list-selector-element'></div>
          <div className='list-selector-element'>학교에서 할 일</div>
          <div className='list-selector-element'>회사에서 할 일</div>
        </div>
      </div>
      <input className='title-input' value={input} onChange={handleInput} />
      <button onClick={handleSubmit}>추가하기</button>
    </div>
  );
}

export default AddPage;
