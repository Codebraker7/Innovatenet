import React from 'react';
import Feed from '../feed/Feed';
import Profile from '../user/Profile';
import NotFound from '../layout/NotFound';
import { Route, Routes } from 'react-router-dom';

const RoutesList = ({ login }) => {
  return (
    <div>
      <Routes>
        {login.id ? (
          <Route exact path='/feed' element={<Feed login={login} />} />
        ) : (
          <></>
        )}

        {login.id ? (
          <Route exact path='/dashboard' element={<Profile login={login} />} />
        ) : (
          <></>
        )}

        <Route path='*' element={<NotFound />} />
      </Routes>
    </div>
  );
};

export default RoutesList;
