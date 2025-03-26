import React, { useState } from 'react';
import '../styles/Author.css';
import { Button } from 'antd';

const Author = ({ setShowAuthor }) => {
  const [masthead, setMasthead] = useState(localStorage.getItem('masthead'));
  const [mastheadFontSize, setMastheadFontSize] = useState(
    localStorage.getItem('masthead_font_size')
  );
  const [name, setName] = useState(localStorage.getItem('name'));
  const [default_city, setDefault_city] = useState(
    localStorage.getItem('default_city')
  );

  const handleChangeMasthead = (event) => {
    setMasthead(event.target.value);
  };
  const handleChangeMastheadFontSize = (event) => {
    setMastheadFontSize(parseFloat(event.target.value));
  };
  const handleChangeName = (event) => {
    setName(event.target.value);
  };

  const handleChangeDefaultCity = (event) => {
    setDefault_city(event.target.value);
  };

  const handleSaveChanges = () => {
    localStorage.setItem('masthead', masthead);
    localStorage.setItem('masthead_font_size', mastheadFontSize);
    localStorage.setItem('name', name);
    localStorage.setItem('default_city', default_city);
    closeAuthor();
  };

  const closeAuthor = () => {
    setShowAuthor(false);
  };

  const range_min = 0.1;
  const range_max = 0.2;
  const range_step = 0.001;
  const byline_max_length = 40;
  const city_max_length = 25;
  const rangeBackground = `linear-gradient(to right, var(--primary-typography-color) ${
    ((mastheadFontSize - range_min) / (range_max - range_min)) * 100
  }%, #E5E5E5 ${
    ((mastheadFontSize - range_min) / (range_max - range_min)) * 100
  }%)`;

  return (
    <div className="author-wrap">
      <div className="author-form">
        <div className="section">
          <label htmlFor="masthead">Masthead</label>
          <input
            required={true}
            className="author-text-input"
            type="text"
            id="masthead"
            placeholder="Journal Name"
            value={masthead}
            aria-describedby="type the name of your journal"
            onChange={handleChangeMasthead}
            style={{
              padding: '0',
              marginBottom: '0.5em',
              height: 'var(--page-height)*0.06',
              transform: 'scaleY(1.1)',
              fontSize: `calc(var(--page-width) * ${mastheadFontSize})`,
              fontWeight: 'normal',
              fontFamily: 'chomsky',
              textAlign: 'center',
            }}
          />
          <label htmlFor="masthead-size" className="hidden">
            masthead size
          </label>
          <input
            className="author-range-input"
            type="range"
            id="masthead-size"
            min={range_min}
            max={range_max}
            value={mastheadFontSize}
            aria-describedby="change the masthead font size"
            step={range_step}
            onChange={handleChangeMastheadFontSize}
            style={{
              background: rangeBackground,
            }}
          />
        </div>
        <div className="section">
          <label htmlFor="byline">Byline</label>
          <input
            required={true}
            className="author-text-input"
            type="text"
            id="byline"
            placeholder="call it by your name"
            maxLength={byline_max_length}
            value={name}
            aria-describedby="type your name"
            onChange={handleChangeName}
          />
        </div>
        <div className="section">
          <label htmlFor="city">city</label>
          <input
            required={true}
            className="author-text-input"
            type="text"
            id="city"
            placeholder="cairo"
            maxLength={city_max_length}
            value={default_city}
            aria-describedby="type your city"
            onChange={handleChangeDefaultCity}
          />
        </div>
        <div className="section">
          <Button
            color="default"
            variant="solid"
            onClick={handleSaveChanges}
            disabled={!masthead || !name || !default_city}
            aria-describedby="Save youe entries"
          >
            Submit
          </Button>
          <Button
            color="default"
            variant="solid"
            onClick={closeAuthor}
            disabled={!localStorage.getItem('masthead')}
            aria-describedby="Cancel and return to your journal"
          >
            Cancel
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Author;
