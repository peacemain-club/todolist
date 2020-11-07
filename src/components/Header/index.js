import React from 'react';
import {Link} from 'react-router-dom';

import './styles.scss';

function Header() {
  return (
    <header>
      <Link to='/'>
        <h2>투두리스트</h2>
      </Link>
      <div className='right-wrapper'>
        <button>로그인</button>
        <Link to={`/add`}>
          <button>할 일 추가</button>
        </Link>
      </div>
    </header>
  );
};

export default Header;
