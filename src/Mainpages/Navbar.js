import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import '../Styles/Navbar.css';
import { BsList, BsSun, BsFillMoonFill } from 'react-icons/bs';
import { useDispatch } from 'react-redux';
import { DARK_MODE, LIGHT_MODE } from '../Features/themeSlice';

const getLocalStorage = () => {
  const currentTheme = JSON.parse(localStorage.getItem('currentTheme'));

  if (currentTheme) {
    if (currentTheme.fontColor === 'black') return true;
    else return false;
  }

  return true;
};

const Navbar = () => {
  const [light, setLight] = useState(getLocalStorage());
  const [responsive, setResponsive] = useState(false);
  const dispatch = useDispatch();

  const toggleTheme = () => {
    setLight(!light);

    if (!light) {
      dispatch(LIGHT_MODE());
    } else {
      dispatch(DARK_MODE());
    }
  };

  return (
    <div className='Nav'>
      <BsList
        className='hamburger'
        onClick={() => setResponsive(!responsive)}
      />

      <div
        className={!responsive ? 'navbar' : 'navbar responsive'}
        onClick={() => setResponsive(!responsive)}
      >
        <NavLink
          to='/'
          className={({ isActive }) =>
            isActive ? 'nav-link active-link' : 'nav-link'
          }
        >
          HOME
        </NavLink>

        <NavLink
          to='/projectspage'
          className={({ isActive }) =>
            isActive ? 'nav-link active-link' : 'nav-link'
          }
        >
          PROJECTS
        </NavLink>

        <NavLink
          to='/contact'
          className={({ isActive }) =>
            isActive ? 'nav-link active-link' : 'nav-link'
          }
        >
          CONTACT ME
        </NavLink>
      </div>

      <div className='toggle' onClick={toggleTheme}>
        {light ? (
          <BsSun className='togglebtn' />
        ) : (
          <BsFillMoonFill className='togglebtn' />
        )}
      </div>
    </div>
  );
};

export default Navbar;
