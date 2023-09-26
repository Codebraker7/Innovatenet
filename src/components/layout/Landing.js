import React from 'react';
import LandingLogo from './landing_logo.svg';

const Landing = () => {
  return (
    <div className='main'>
      <div className='col'>
        <h2 className='landing-heading'>
          Welcome to <br />
          <span>InnovateNet</span>
        </h2>
        <p>
          At Innovate Net, we believe that innovation thrives at the <br />
          intersection of ideas, disciplines, and perspectives. Our platform is{' '}
          <br />
          your gateway to a world of integrated projects, where creativity and{' '}
          <br />
          collaboration come together to spark transformation. <br />
          Join us on this journey of discovery, where innovation knows no
          bounds.
        </p>
      </div>
      <img src={LandingLogo} alt='landing logo' />
    </div>
  );
};

export default Landing;
