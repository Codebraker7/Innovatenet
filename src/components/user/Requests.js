import React from 'react';

const Requests = ({ project }) => {
  return (
    <div className={`student-request ${project.approval_status}`}>
      <p>{project.title}</p>
      <p>
        {project.approval_status === 'waiting'
          ? 'Waiting for approval from the Institute'
          : project.approval_status === 'approved'
          ? 'Posted by the Institute'
          : 'Declined by the Institute'}
      </p>
    </div>
  );
};

export default Requests;
