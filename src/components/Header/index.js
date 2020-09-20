import React from 'react';

import './styles.scss';

function Header() {
  return (
    <header>
      <h2>투두리스트</h2>
      <div className='right-wrapper'>
        <button>로그인</button>
        <button>할 일 추가</button>
      </div>
    </header>
  );
};

export default Header;
