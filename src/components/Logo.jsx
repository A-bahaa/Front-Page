import React from 'react';
import '../styles/logo.css';
import logo from '../assets/images/logo.jpg';
const Logo = () => {
  return (
    <div className="logo-wrap">
      <img className="logo-img" alt="logo" src={logo} />
      <div className="logo-title">The Front Page</div>
    </div>
  );
};

export default Logo;
