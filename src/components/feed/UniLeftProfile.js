import React, { useEffect, useState } from 'react';
import { getuniversityData } from '../../Api';

const UniLeftProfile = ({ studentData }) => {
  const [university, setUniversity] = useState({});
  const getUniversityData = async () => {
    var uni = await getuniversityData(studentData.id);
    setUniversity(uni);
  };
  useEffect(() => {
    getUniversityData();
  }, [studentData]);
  return (
    <div className='left-profile'>
      <img
        src={
          studentData.logo
            ? studentData.logo
            : 'https://c8.alamy.com/zooms/9/f7d5efe2d008437f8cdfdf74758feb10/2g7ft1h.jpg'
        }
        alt=''
      />
      <h3 className='feed-student-name'>
        {studentData.name ? studentData.name : 'John Doe'}
      </h3>
      <h4 className='feed-university-name'>
        {university.id ? university.address : 'Delhi Technical University'}
      </h4>
    </div>
  );
};

export default UniLeftProfile;
