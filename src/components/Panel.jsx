import React, { useState, useEffect } from 'react';
import PanelHeadline from './PanelHeadline';
import PanelHeadlineEditor from './PanelHeadlineEditor';
import Byline from './Byline';
import { Story } from './Story';
import StoryProgress from './StoryProgress';
import Aud from '../assets/sounds/writing_sound.mp3';
import '../styles/panel.css';

const Panel = ({
  setHeadline,
  headlineFontSize,
  SetHeadlineFontSize,
  headlineFontStyle,
  setHeadlineFontStyle,
  handleIssueJournal,
  handleRemoveImage,
  image,
  storyRef,
}) => {
  const [storyText, setStoryText] = useState('');
  const [storyLength, setStoryLength] = useState(storyText.length);
  const [audio, setAudio] = useState(null);

  useEffect(() => {
    const audioElement = new Audio(Aud);
    setAudio(audioElement);
  }, []);

  const maxLength = 700;
  const isMobile = window.matchMedia('(max-width: 768px)').matches;
  const isFirefox = /Firefox/.test(navigator.userAgent);
  const handleChangeHeadline = (event) => {
    setHeadline(event.target.value);
  };
  const handleChangeHeadlineFontSize = (event) => {
    SetHeadlineFontSize(parseFloat(event.target.value));
  };

  const handleCheckboxChange = () => {
    setHeadlineFontStyle(headlineFontStyle === 'normal' ? 'italic' : 'normal');
  };

  const playSound = () => {
    // disable the typing sound effect on firefox for now (poor smothing)
    // disble the typing sound on mobile devices
    if (!isFirefox && !isMobile) {
      audio.currentTime = 0; // reset playback position
      audio.volume = Math.random() * 0.4 + 0.2; // randomize volume
      audio.play();
    }
  };
  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        border: '2px solid green',
        width: `var(--page-width)`,
        height: `var(--page-height)`,
      }}
    >
      <PanelHeadlineEditor
        headlineFontSize={headlineFontSize}
        handleChangeHeadlineFontSize={handleChangeHeadlineFontSize}
        headlineFontStyle={headlineFontStyle}
        handleCheckboxChange={handleCheckboxChange}
      />
      <div ref={storyRef} className="panel-screenshot">
        <PanelHeadline
          handleChangeHeadline={handleChangeHeadline}
          headlineFontSize={headlineFontSize}
          headlineFontStyle={headlineFontStyle}
          playSound={playSound}
        />
        <Byline />
        <Story
          storyText={storyText}
          setStoryText={setStoryText}
          setStoryLength={setStoryLength}
          maxLength={maxLength}
          playSound={playSound}
        />
      </div>
      <div style={{ position: 'relative', top: '200px' }}>
        <StoryProgress storyLength={storyLength} maxLength={maxLength} />
        <button onClick={handleIssueJournal}>Issue Journal</button>
        <button onClick={handleRemoveImage} disabled={!image}>
          Remove cut
        </button>
        <button>Author</button>
      </div>
    </div>
  );
};

export default Panel;
