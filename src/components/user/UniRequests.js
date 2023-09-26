import React from 'react';

const UniRequests = ({ project }) => {
  return (
    <div className={`student-request ${project.approval_status}`}>
      <p>{project.title}</p>
      <p>
        {project.approval_status === 'waiting'
          ? 'Waiting for approval'
          : project.approval_status === 'approved'
          ? 'Posted by the Institute'
          : 'Declined by the Institute'}
      </p>
    </div>
  );
};

export default UniRequests;