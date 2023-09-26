import React from 'react';
import { useState, useEffect } from 'react';
import { getStudentProjects, getUniversityProjects } from '../../Api';
import Projects from './Projects';

const ProjectList = ({ login }) => {
  const [projects, setProjects] = useState([]);
  const studentProjects = async () => {
    var X;
    if (login.email.endsWith('@edu.in')) {
      X = await getUniversityProjects(login.id);
    }
    else if (login.email.endsWith('@gmail.com')) {
      X = await getStudentProjects(login.id);
    }
    setProjects(X);
  };
  useEffect(() => {
    studentProjects();
  }, []);

  return (
    <div className='studentProjects'>
      {projects.map((project) => {
        return <Projects key={project.id} project={project} />;
      })}
    </div>
  );
};

export default ProjectList;
