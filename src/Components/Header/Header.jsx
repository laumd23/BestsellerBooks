import React from 'react';
import { Link } from 'react-router-dom';
import './header.scss';

const Header = () => {
  return (
    <header className="main-header">
      <div className="header-wrapper">
        <div className="main-logo"><img src="./logo.png" alt="" /></div>
        <nav>
          <ul className="main-menu">
            <li>
              <Link to='/home'>Home</Link>
            </li>
            <li><Link to='/form'>Add new Book</Link></li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
