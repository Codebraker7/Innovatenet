import React from 'react';
import { useState, useEffect } from 'react';
import { getuniversityData } from '../../Api';

const UpperProfile = ({ login }) => {
  const [university, setUniversity] = useState({});
  const getUniversityData = async () => {
    var uni = await getuniversityData(login.university_id);
    setUniversity(uni);
  };
  useEffect(() => {
    getUniversityData();
  }, [login]);
  return (
    <div className='profile-upper'>
      <div className='profile-picture'>
        <img
          src={
            login.profile_pic
              ? login.profile_pic
              : 'https://c8.alamy.com/zooms/9/f7d5efe2d008437f8cdfdf74758feb10/2g7ft1h.jpg'
          }
          alt=''
        />
      </div>
      <div className='profile-info'>
        <div className='left-upper'>
          <h1>{login.name ? login.name : 'John Doe'}</h1>
          <h4>
            {university.id ? university.name : 'Delhi Technical University'}
          </h4>
        </div>
        <button className='right-upper'>Add project</button>
      </div>
    </div>
  );
};

export default UpperProfile;
