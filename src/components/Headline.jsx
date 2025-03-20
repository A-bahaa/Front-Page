import React from 'react';
import '../styles/headline.css';
const Headline = ({ headline, headlineFontSize }) => {
  return (
    <div className="headline-wrap">
      <h2
        className="headline"
        style={{ fontSize: `calc(var(--page-width) * ${headlineFontSize})` }}
      >
        {headline}
      </h2>
    </div>
  );
};

export default Headline;
