import React from 'react';
import '../styles/home.css';
import Logo from '../components/Logo';
import home1 from '../assets/images/home1.png';
import home2 from '../assets/images/home2.png';
import home3 from '../assets/images/home3.png';
import home4 from '../assets/images/home4.png';
import { Button } from 'antd';
import { Link } from 'react-router-dom';
import Marquee from 'react-fast-marquee';

const Home = () => {
  return (
    <div className="home-wrap">
      <div className="mobile-header-cnt mobile">
        <Logo />
        <Button
          className="action-btn mobile-navigator"
          color="default"
          variant="solid"
          aria-describedby="go to the editorial page"
        >
          <Link to="/editorial">Start Journaling</Link>
        </Button>
      </div>
      <div className="logo-cnt desktop">
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
          <img
            src={home1}
            alt="landing-image-1"
            style={{ width: 'calc(var(--page-width) * 1.28)' }}
          />
          <img
            src={home2}
            alt="landing-image-2"
            style={{ width: 'calc(var(--page-width) * 1.28)' }}
          />
          <img
            src={home3}
            alt="landing-image-3"
            style={{ width: 'calc(var(--page-width) * 1.28)' }}
          />
          <img
            src={home4}
            alt="landing-image-4"
            style={{ width: 'calc(var(--page-width) * 1.28)' }}
          />
        </div>
      </div>
      <Marquee className="mobile-marquee">
        <img
          src={home1}
          alt="landing-image-1"
          style={{ width: 'var(--page-width)' }}
        />
        <img
          src={home2}
          alt="landing-image-2"
          style={{ width: 'var(--page-width)' }}
        />
        <img
          src={home3}
          alt="landing-image-3"
          style={{ width: 'var(--page-width)' }}
        />
        <img
          src={home4}
          alt="landing-image-4"
          style={{ width: 'var(--page-width)' }}
        />
      </Marquee>
      <a
        className="copywrite-anchor"
        href="https://www.linkedin.com/in/ahmed-ghonim-6643251a4/"
      >
        ©ghonim's
      </a>
    </div>
  );
};

export default Home;
