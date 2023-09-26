import React from 'react';
import UpperProfile from './UpperProfile';
import LowerProfile from './LowerProfile';
import UniUpperProfile from './UniUpperProfile';
import UniLowerProfile from './UniLowerProfile';


const Profile = ({ login }) => {
  if (login.email.endsWith("@edu.in")) {
    return (
      <div className='profile'>
        <UniUpperProfile login={login} />
        <UniLowerProfile login={login} />
      </div>
    )
  }
  return (
    <div className='profile'>
      <UpperProfile login={login} />
      <LowerProfile login={login} />
    </div>
  );
};

export default Profile;
