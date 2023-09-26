import React from 'react';
import { useState } from 'react';
import { getStudentByEmail, getUniversityByEmail } from '../../Api';

const Login = (props) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = async (e) => {
    e.preventDefault();
    const isStudentLogin = email.endsWith('@gmail.com');
    const isUniversityLogin = email.endsWith('@edu.in');

    if (isStudentLogin) {
      var student = await getStudentByEmail(email);
      if (student.id) {
        props.loginUser(student);
      }
      props.toggle();
    }
    else if (isUniversityLogin) {
      var university = await getUniversityByEmail(email);
      if (university.id) {
        props.loginUser(university);
      }
      props.toggle();
    }
  };
  return (
    <div className='popup'>
      <div className='popup-inner'>
        <h2>Login</h2>
        <form onSubmit={handleLogin}>
          <label>
            Email:
            <input
              type='text'
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </label>
          <label>
            Password:
            <input
              type='password'
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </label>
          <button type='submit'>Login</button>
        </form>
        <button type='button' className='close-btn' onClick={props.toggle}>
          Close
        </button>
      </div>
    </div>
  );
};

export default Login;
