import React, { useState, useRef } from 'react';
import Page from '../components/Page';
import Panel from '../components/Panel';
import '../styles/editorial.css';
import Cut from '../components/Cut';
import CutRemover from '../components/CutRemover';

const Editorial = () => {
  const [headline, setHeadline] = useState(
    'Double cick to change the background texture'
  );
  const [headlineFontSize, SetHeadlineFontSize] = useState(0.037);
  const [headlineFontStyle, setHeadlineFontStyle] = useState('italic');
  const [image, setImage] = useState(null);
  const fileInputRef = useRef(null);

  const handleRemoveImage = () => {
    setImage(null);
    if (fileInputRef.current) {
      fileInputRef.current.value = null; // Clear the input value
    }
  };

  return (
    <div
      className="editorial-wrap"
      style={{
        border: '1px solid red',
      }}
    >
      <div
        className="editorial-page-wrap"
        style={{
          border: '1px solid black',
          position: 'relative',
        }}
      >
        <Page
          headline={headline}
          headlineFontSize={headlineFontSize}
          headlineFontStyle={headlineFontStyle}
          image={image}
          setImage={setImage}
          fileInputRef={fileInputRef}
        />
        <CutRemover image={image} handleRemoveImage={handleRemoveImage} />
      </div>
      <div
        style={{ border: '1px solid blue' }}
        className="editorial-panel-wrap"
      >
        <Panel
          setHeadline={setHeadline}
          headlineFontSize={headlineFontSize}
          SetHeadlineFontSize={SetHeadlineFontSize}
          headlineFontStyle={headlineFontStyle}
          setHeadlineFontStyle={setHeadlineFontStyle}
        />
      </div>
    </div>
  );
};

export default Editorial;
