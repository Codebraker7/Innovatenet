import React from 'react';
import { useState, useEffect } from 'react';
import { getuniversityData, getStudentData } from '../../Api';

const Project = ({ project }) => {
  const [university, setUniversity] = useState({});
  const [student, setStudent] = useState({});
  const getUniversityData = async () => {
    var uni = await getuniversityData(project.university_id);
    setUniversity(uni);
  };
  const getStudentDataById = async () => {
    var stu = await getStudentData(project.student_id);
    setStudent(stu);
  };
  useEffect(() => {
    getUniversityData();
    getStudentDataById();
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
        <p>
          {university.name} - {student.name}
        </p>
      </div>
      <div className='post-caption'>
        <h3>{project.title}</h3>
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
      <div className='post-buttons'>
        <div>Like</div>
        <div>Comment</div>
      </div>
    </div>
  );
};

export default Project;
