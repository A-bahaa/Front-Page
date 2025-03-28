import React, { useRef } from 'react';
import '../styles/panelHeadline.css';

const PanelHeadline = ({
  panelHeadline,
  handleChangeHeadline,
  headlineFontSize,
  headlineFontStyle,
  playSound,
}) => {
  const panelHeadlineRef = useRef(null);

  const handleMouseOut = () => {
    panelHeadlineRef.current.blur();
  };
  return (
    <div className="panel-headline-wrap">
      <label htmlFor="headline" className="visually-hidden">
        Headline
      </label>
      <input
        ref={panelHeadlineRef}
        className="panel-headline-input"
        type="text"
        id="headline"
        value={panelHeadline}
        placeholder="Write the slickest headline you can think of!"
        onChange={handleChangeHeadline}
        aria-describedby="type the headline of your story"
        style={{
          fontSize: `calc(var(--page-width) * ${headlineFontSize})`,
          fontStyle: headlineFontStyle,
        }}
        maxLength={50}
        onKeyDown={playSound}
        onMouseOut={handleMouseOut}
      />
    </div>
  );
};

export default PanelHeadline;
