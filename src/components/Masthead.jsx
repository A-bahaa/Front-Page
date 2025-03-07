import React from 'react';
import '../styles/masthead.css';

const Masthead = ({ dimensions }) => {
  return (
    <div className="masthead-wrap">
      <h1
        style={{
          fontSize: dimensions[0] * 0.08,
        }}
      >
        The wall street journal
      </h1>
    </div>
  );
};

export default Masthead;
