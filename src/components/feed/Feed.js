import React from 'react';
import Left from './Left';
import Right from './Right';
import Main from './Main';

const Feed = ({ login }) => {
  return (
    <div className='feed'>
      <Left login={login} />
      <Main />
      <Right />
    </div>
  );
};

export default Feed;
