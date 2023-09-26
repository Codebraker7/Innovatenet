import React, { useState } from 'react';
import ProjectList from './ProjectList';
import RequestList from './RequestList';
import Projects from './Projects';

const LowerProfile = ({ login }) => {
  const [page, setPage] = useState('projects');
  return (
    <div>
      <div className='buttons'>
        <button
          className='list'
          onClick={() => {
            setPage('projects');
          }}>
          Projects
        </button>
        <button
          className='list'
          onClick={() => {
            setPage('requests');
          }}>
          Requests
        </button>
      </div>
      {page === 'projects' ? (
        <ProjectList login={login} />
      ) : (
        <RequestList login={login} />
      )}
    </div>
  );
};

export default LowerProfile;
