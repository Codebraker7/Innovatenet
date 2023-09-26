import React from 'react';
import { useState, useEffect } from 'react';
import { getuniversityData } from '../../Api';

const UniUpperProfile = ({ login }) => {
  const [university, setUniversity] = useState({});
  const getUniversityData = async () => {
    var uni = await getuniversityData(login.id);
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
            login.logo
              ? login.logo
              : 'https://c8.alamy.com/zooms/9/f7d5efe2d008437f8cdfdf74758feb10/2g7ft1h.jpg'
          }
          alt=''
        />
      </div>
      <div className='profile-info'>
        <div className='left-upper'>
          <h1>{login.name ? login.name : 'John Doe'}</h1>
          <h4>{university.address ? university.address : 'Delhi'}</h4>
          <br />
          <h4>
            Dean - {university.dean_name ? university.dean_name : 'Dr. Sujata Sengar'}
          </h4>
        </div>
        <button className='right-upper'>Visit Website</button>
      </div>
    </div>
  );
};

export default UniUpperProfile;
