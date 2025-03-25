import React, { useState, useRef } from 'react';
import Page from '../components/Page';
import Panel from '../components/Panel';
import '../styles/editorial.css';
import CutRemover from '../components/CutRemover';
import domtoimage from 'dom-to-image';

const Editorial = () => {
  const [headline, setHeadline] = useState(
    'Double cick to change the background texture'
  );
  const [headlineFontSize, SetHeadlineFontSize] = useState(0.037);
  const [headlineFontStyle, setHeadlineFontStyle] = useState('italic');
  const [image, setImage] = useState(null);
  const fileInputRef = useRef(null);
  const PageRef = useRef(null);

  const handleRemoveImage = () => {
    setImage(null);
    if (fileInputRef.current) {
      fileInputRef.current.value = null; // Clear the input value
    }
  };

  const handleIssueJournal = () => {
    if (image === null) {
      alert("don't have cut");
    } else {
      domtoimage
        .toPng(PageRef.current, {
          quality: 1,
          cacheBust: true, // Enable cache busting
          bgcolor: 'white',
        })
        .then((dataUrl) => {
          const link = document.createElement('a');
          link.href = dataUrl;
          link.download = 'journal.png';
          link.click();
        })
        .catch((error) => {
          console.error('Error exporting image:', error);
        });
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
          PageRef={PageRef}
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
          handleIssueJournal={handleIssueJournal}
        />
      </div>
    </div>
  );
};

export default Editorial;
