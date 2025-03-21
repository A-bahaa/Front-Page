import React, { useState } from 'react';
import Page from '../components/Page';
import Panel from '../components/Panel';
import '../styles/editorial.css';

const Editorial = () => {
  const [headline, setHeadline] = useState(
    'Double cick to change the background texture'
  );
  const [headlineFontSize, SetHeadlineFontSize] = useState(0.037);
  const [headlineFontStyle, setHeadlineFontStyle] = useState('italic');
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
        }}
      >
        <Page
          headline={headline}
          headlineFontSize={headlineFontSize}
          headlineFontStyle={headlineFontStyle}
        />
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
