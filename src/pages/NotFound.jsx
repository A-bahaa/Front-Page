import { Button } from 'antd';
import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/not-found.css';
const NotFound = () => {
  return (
    <div className="not-found-wrap">
      <p className="not-found-text">Fake News aka (404)</p>
      <Button
        className="action-btn"
        color="default"
        variant="solid"
        aria-describedby="go to the home page"
      >
        <Link to="/">Return to home</Link>
      </Button>
    </div>
  );
};

export default NotFound;
