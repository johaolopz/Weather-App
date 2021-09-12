import React from 'react';
import Logo from '../img/logoApp.svg'
import SearchBar from './SearchBar.jsx';
import '../styles/Nav.css';
import { Link } from 'react-router-dom';


function Nav({onSearch}) {
  return (
    <nav className='navContainer'>
        <Link to='/' className='aNav'>
          <div className='divLogo'>
              <img id="logoApp" src={Logo} width="30" height="30" className="d-inline-block align-top" alt="" />
              <h1 className="stroke">Weather App</h1>
          </div>
        </Link>
        <Link to='/about' className='aAbout'>
          <span className="about">About</span>
        </Link>
        <SearchBar
          onSearch={onSearch}
        />
    </nav>
  );
};

export default Nav;