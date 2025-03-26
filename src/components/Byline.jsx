import React from 'react';
import '../styles/byline.css';

const Byline = () => {
  const name = localStorage.getItem('name').toUpperCase();
  return (
    <div className="byline" aria-describedby="name of the journal's author">
      By {name}
    </div>
  );
};

export default Byline;
