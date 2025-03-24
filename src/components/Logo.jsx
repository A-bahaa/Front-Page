import React from 'react';
import '../styles/logo.css';

const Logo = () => {
  return (
    <div className="logo-wrap">
      <img className="logo-img" alt="logo" src="./logo.jpg" />
      <div className="logo-title">The Front Page</div>
    </div>
  );
};

export default Logo;
