import React from 'react';

function Complete({list, changeComplete}) {
  return (
    <>
      <h3>완료된 일</h3>
      <div className='list'>
        {
          list.map((data, i) => {
            return (
              <div className='element'>
                <div className='checkbox_checked' onClick={changeComplete(data.name)}></div>
                <div className='text_checked'>{data.name}</div>
              </div>
            );
          })
        }
      </div>
    </>
  );
}

export default Complete;
