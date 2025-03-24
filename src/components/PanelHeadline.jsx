import React from 'react';
import '../styles/panelHeadline.css';

const PanelHeadline = ({
  handleChangeHeadline,
  headlineFontSize,
  headlineFontStyle,
  playSound,
}) => {
  return (
    <div className="panel-headline-wrap">
      <label htmlFor="headline" className="visually-hidden">
        Headline
      </label>
      <input
        className="panel-headline-input"
        type="text"
        id="headline"
        placeholder="Write the slickest headline you can think of!"
        onChange={handleChangeHeadline}
        aria-describedby="type the headline of your story"
        style={{
          fontSize: `calc(var(--page-width) * ${headlineFontSize})`,
          fontStyle: headlineFontStyle,
        }}
        maxLength={50}
        onKeyDown={playSound}
      />
    </div>
  );
};

export default PanelHeadline;
