import React from 'react';
import { useState, useEffect } from 'react';
import { getStudentProjects, getUniversityProjects } from '../../Api';
import Requests from './Requests';

const RequestList = ({ login }) => {
  const [projects, setProjects] = useState([]);
  const studentProjects = async () => {
    var X;
    if (login.email.endsWith('@edu.in')) {
      X = await getUniversityProjects(login.id);
    } else if (login.email.endsWith('@gmail.com')) {
      X = await getStudentProjects(login.id);
    }
    setProjects(X);
  };
  useEffect(() => {
    studentProjects(1);
  }, []);

  return (
    <div className='studentRequests'>
      {projects.map((project) => {
        return <Requests key={project.id} project={project} />;
      })}
    </div>
  );
};

export default RequestList;
