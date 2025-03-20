import React from 'react';
import '../styles/headline.css';
const Headline = ({ headline, headlineFontSize, headlineFontStyle }) => {
  return (
    <div className="headline-wrap">
      <h2
        className="headline"
        style={{
          fontSize: `calc(var(--page-width) * ${headlineFontSize})`,
          fontStyle: headlineFontStyle,
        }}
      >
        {headline}
      </h2>
    </div>
  );
};

export default Headline;
