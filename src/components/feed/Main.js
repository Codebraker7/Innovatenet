import React from 'react';
import { useState, useEffect } from 'react';
import axios from 'axios';
import Project from './Project';

const Main = () => {
  const [projects, setProjects] = useState([]);
  const universityProjects = async () => {
    await axios
      .get('https://busy-erin-deer-shoe.cyclic.cloud/projects')
      .then((response) => {
        // Handle the success response here
        setProjects(response.data);
      })
      .catch((error) => {
        // Handle any errors that occur during the PATCH request
        console.error('Error:', error);
      });
  };
  useEffect(() => {
    universityProjects();
  }, []);
  return (
    <div className='main-feed'>
      {projects.map((project) => {
        return <Project key={project.id} project={project} />;
      })}
    </div>
  );
};

export default Main;
