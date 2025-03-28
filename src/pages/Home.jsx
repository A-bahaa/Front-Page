import React from 'react';
import '../styles/home.css';
import Logo from '../components/Logo';
import home1 from '../assets/images/home1.png';
import home2 from '../assets/images/home2.png';
import home3 from '../assets/images/home3.png';
import home4 from '../assets/images/home4.png';
import { Button } from 'antd';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div className="home-wrap">
      <div className="logo-cnt">
        <Logo />
      </div>
      <div className="vertical-marquee-container">
        <div className="overlay">
          <Button
            className="action-btn"
            color="default"
            variant="solid"
            aria-describedby="go to the editorial page"
          >
            <Link to="/editorial">Start Journaling</Link>
          </Button>
        </div>
        <div className="vertical-marquee-content">
          <img src={home1} alt="landing-image-1" />
          <img src={home2} alt="landing-image-2" />
          <img src={home3} alt="landing-image-3" />
          <img src={home4} alt="landing-image-4" />
        </div>
      </div>
    </div>
  );
};

export default Home;
