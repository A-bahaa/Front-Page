import React from 'react';

const Panel = ({ setHeadline, headlineFontSize, SetHeadlineFontSize }) => {
  const handleChangeHeadline = (event) => {
    setHeadline(event.target.value);
  };
  const handleChangeHeadlineFontSize = (event) => {
    SetHeadlineFontSize(parseFloat(event.target.value));
  };
  return (
    <div>
      <label htmlFor="headline">HEADLINE</label>
      <input
        type="text"
        id="headline"
        placeholder="Double cick to change the background texture"
        onChange={handleChangeHeadline}
        aria-describedby="type the headline of your story"
      />
      <small>Please enter your full name as it appears on your ID</small>

      <label htmlFor="font-size">Font size</label>
      <input
        type="range"
        id="font-size"
        min={0.03}
        max={0.1}
        value={headlineFontSize}
        aria-describedby="change the headline font size"
        step={0.001}
        onChange={handleChangeHeadlineFontSize}
      />
    </div>
  );
};

export default Panel;
