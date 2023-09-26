import './App.css';
import { Fragment, useState } from 'react';
import {
  BrowserRouter as Router,
  Route,
  Routes,
  useSearchParams,
} from 'react-router-dom';
import Navbar from './components/layout/Navbar';
import Landing from './components/layout/Landing';
import RoutesList from './components/routing/RoutesList';

function App() {
  const [login, setLogin] = useState({});
  const loginUser = (student_data) => {
    setLogin(student_data);
  };
  return (
    <Router>
      <Fragment>
        <Navbar login={login} loginUser={loginUser} />
        <Routes>
          <Route exact path='/' element={<Landing />} />
          <Route path='*' element={<RoutesList login={login} />} />
        </Routes>
      </Fragment>
    </Router>
  );
}

export default App;
