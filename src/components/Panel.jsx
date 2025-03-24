import React, { useState, useEffect } from 'react';
import PanelHeadline from './PanelHeadline';
import PanelHeadlineEditor from './PanelHeadlineEditor';
import Byline from './Byline';
import { Story } from './Story';
import StoryProgress from './StoryProgress';
import Aud from '../assets/sounds/writing_sound.mp3';

const Panel = ({
  setHeadline,
  headlineFontSize,
  SetHeadlineFontSize,
  headlineFontStyle,
  setHeadlineFontStyle,
  handleIssueJournal,
}) => {
  const [storyText, setStoryText] = useState('        Cairo -');
  const [storyLength, setStoryLength] = useState(storyText.length);
  const [audio, setAudio] = useState(null);

  useEffect(() => {
    const audioElement = new Audio(Aud);
    setAudio(audioElement);
  }, []);

  const maxLength = 700;
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
    if (!/Firefox/.test(navigator.userAgent)) {
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
      <StoryProgress storyLength={storyLength} maxLength={maxLength} />
      <button onClick={handleIssueJournal}>Issue Journal</button>
    </div>
  );
};

export default Panel;
