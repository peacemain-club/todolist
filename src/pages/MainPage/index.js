import React from 'react';

import './styles.scss';

function MainPage() {
  return (
    <div className='main-page__background background'>
      <h3>할 일 목록</h3>
      <div className='list'>
        <div className='element'>
          <div className='checkbox_checked'></div>
          <div className='text_checked'>공부하기</div>
        </div>
        <div className='element'>
          <div className='checkbox'></div>
          <div className='text'>운동하기</div>
        </div>
        <div className='element'>
          <div className='checkbox'></div>
          <div className='text'>넷플릭스 보기</div>
        </div>
      </div>
    </div>
  );
}

export default MainPage;
