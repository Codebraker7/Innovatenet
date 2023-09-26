import React from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHouse, faUser } from '@fortawesome/free-solid-svg-icons';
import { faNewspaper } from '@fortawesome/free-regular-svg-icons';
import Login from './Login';
import { useState } from 'react';

const Navbar = ({ login, loginUser }) => {
  const [seen, setSeen] = useState(false);
  function togglePop() {
    setSeen(!seen);
  }

  return (
    <div className='header'>
      <div className='logo'>
        <h1>InnovateNet</h1>
      </div>
      <nav className='navigation'>
        <ul>
          <li>
            <Link to='/'>
              <FontAwesomeIcon icon={faHouse} /> About
            </Link>
          </li>
          <li>
            {login.id ? (
              <Link to='/feed'>
                <FontAwesomeIcon icon={faNewspaper} /> Feed
              </Link>
            ) : (
              <></>
            )}
          </li>
          <li>
            {login.id ? (
              <Link to='/dashboard'>
                <FontAwesomeIcon icon={faUser} /> Profile
              </Link>
            ) : (
              <></>
            )}
          </li>
        </ul>
      </nav>
      {!login.id ? (
        <div className='btn'>
          <button type='button' onClick={togglePop}>
            Login
          </button>
          {seen ? <Login toggle={togglePop} loginUser={loginUser} /> : null}
        </div>
      ) : (
        <img
          className='header-profile'
          src={
            login && login.profile_pic
              ? login.profile_pic
              : login.logo
          }
          alt='Profile'
        />
      )}
    </div>
  );
};

export default Navbar;
