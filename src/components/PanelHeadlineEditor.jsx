import React from 'react';
import '../styles/panel-headline-editor.css';

const PanelHeadlineEditor = ({
  headlineFontSize,
  handleChangeHeadlineFontSize,
  headlineFontStyle,
  handleCheckboxChange,
}) => {
  const range_min = 0.03;
  const range_max = 0.1;
  const range_step = 0.001;
  const rangeBackground = `linear-gradient(to right, var(--primary-typography-color) ${
    ((headlineFontSize - range_min) / (range_max - range_min)) * 100
  }%, #E5E5E5 ${
    ((headlineFontSize - range_min) / (range_max - range_min)) * 100
  }%)`;

  return (
    <div className="panel-headline-editor-wrap">
      <label htmlFor="font-size" className="ranger-label">
        Headline size
      </label>
      <input
        type="range"
        id="font-size"
        min={range_min}
        max={range_max}
        value={headlineFontSize}
        aria-describedby="change the headline font size"
        step={range_step}
        onChange={handleChangeHeadlineFontSize}
        style={{
          background: rangeBackground,
        }}
      />
      <label htmlFor="font-style-toggle" className="check-box-label">
        Italic
      </label>
      <input
        type="checkbox"
        id="font-style-toggle"
        checked={headlineFontStyle === 'italic'}
        onChange={handleCheckboxChange}
      />
    </div>
  );
};

export default PanelHeadlineEditor;
