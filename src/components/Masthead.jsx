import React from 'react';
import '../styles/masthead.css';

const Masthead = () => {
  const masthead = localStorage.getItem('masthead');
  const masthead_font_size = localStorage.getItem('masthead_font_size');
  return (
    <div className="masthead-wrap">
      <h1
        style={{ fontSize: `calc(var(--page-width) *${masthead_font_size})` }}
      >
        {masthead}
      </h1>
    </div>
  );
};

export default Masthead;
