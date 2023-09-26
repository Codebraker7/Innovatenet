import React from 'react';
import LeftProfile from './LeftProfile';
import UniLeftProfile from './UniLeftProfile';


const Left = ({ login }) => {
  if (login.email.endsWith("@edu.in")) {
    return (
      <div className='left-feed'>
        <UniLeftProfile studentData={login}/>
      </div>
    )
  }
  return (
    <div className='left-feed'>{
      <LeftProfile studentData={login} />
    }</div>
  );
  
};

export default Left;
