import React from 'react';
import icon from '../../assets/logo.png';
import './Menu.scss';

const Menu = () => {
  return (
    <div className="menu-container-wrap">
      <div className="menu-container">
        <div className="menu-top">
          <img src={icon} alt='logo' />
        </div>
        <div className="menu-bottom">
          <a href="#">logout</a>
        </div>
      </div>
    </div>
  );
};

export default Menu;
