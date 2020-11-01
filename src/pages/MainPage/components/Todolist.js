import React from 'react';

function Todolist({list, changeComplete}) {
  return (
    <>
      <h3>할 일 목록</h3>
      <div className='list'>
        {
          list.map((data, i) => {
            return (
              <div className='element'>
                <div className='checkbox' onClick={changeComplete(data.name)}></div>
                <div className='text'>{data.name}</div>
              </div>
            );
          })
        }
      </div>
    </>
  );
}

export default Todolist;
