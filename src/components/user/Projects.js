import React from 'react';
import { useState, useEffect } from 'react';
import { getuniversityData } from '../../Api';

const Projects = ({ project }) => {
  const [university, setUniversity] = useState({});
  const getUniversityData = async () => {
    var uni = await getuniversityData(project.university_id);
    setUniversity(uni);
  };
  useEffect(() => {
    getUniversityData();
  }, [project]);
  return (
    <div className='post'>
      <div className='post-header'>
        <img
          src={
            university.logo
              ? university.logo
              : 'https://c8.alamy.com/zooms/9/f7d5efe2d008437f8cdfdf74758feb10/2g7ft1h.jpg'
          }
          alt='logo'
        />
        <p>{project.title}</p>
      </div>
      <div className='post-caption'>
        <p>{project.caption}</p>
      </div>
      <div className='post-media'>
        <img
          src={
            project.media.length > 0
              ? project.media[0]
              : 'https://t4.ftcdn.net/jpg/05/56/16/81/360_F_556168144_qEINHd6qUsQH4b6wDvgOS0WtuShVwJVm.jpg'
          }
          alt='not helo'
        />
      </div>
    </div>
  );
};

export default Projects;
