import React, { useState, useEffect } from 'react';
import PanelHeadline from './PanelHeadline';
import PanelHeadlineEditor from './PanelHeadlineEditor';
import Byline from './Byline';
import { Story } from './Story';
import Aud from '../assets/sounds/writing_sound.mp3';
import '../styles/panel.css';
import { Spin, Button } from 'antd';
const Panel = ({
  setHeadline,
  setPanelHeadline,
  panelHeadline,
  headlineFontSize,
  SetHeadlineFontSize,
  headlineFontStyle,
  setHeadlineFontStyle,
  handleIssueJournal,
  handleRemoveImage,
  image,
  storyRef,
  showLoader,
  storyText,
  setStoryText,
  setStoryLength,
  maxLength,
  setShowAuthor,
}) => {
  const [audio, setAudio] = useState(null);
  useEffect(() => {
    const audioElement = new Audio(Aud);
    setAudio(audioElement);
  }, []);

  const isMobile = window.matchMedia('(max-width: 768px)').matches;
  const isFirefox = /Firefox/.test(navigator.userAgent);
  const handleChangeHeadline = (event) => {
    setHeadline(event.target.value);
    setPanelHeadline(event.target.value);
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
  const openAuthor = () => [setShowAuthor(true)];
  return (
    <div className="panel-wrap">
      <PanelHeadlineEditor
        headlineFontSize={headlineFontSize}
        handleChangeHeadlineFontSize={handleChangeHeadlineFontSize}
        headlineFontStyle={headlineFontStyle}
        handleCheckboxChange={handleCheckboxChange}
      />
      <div ref={storyRef} className="panel-screenshot">
        <PanelHeadline
          panelHeadline={panelHeadline}
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
      <div className="action-btns-wrap">
        <Button
          className={isMobile ? 'hide-from-mobile' : 'action-btn'}
          color="default"
          variant="solid"
          onClick={handleIssueJournal}
          disabled={!image || showLoader}
          aria-describedby="download your journal as images"
        >
          Issue Journal
          {showLoader && <Spin />}
        </Button>
        <Button
          className="action-btn"
          color="default"
          variant="solid"
          onClick={handleRemoveImage}
          disabled={!image}
          aria-describedby="remove the lead photo of your journal"
        >
          Remove cut
        </Button>
        <Button
          className="action-btn"
          color="default"
          variant="solid"
          aria-describedby="change the meta data of your journal"
          onClick={openAuthor}
        >
          Author
        </Button>
      </div>
    </div>
  );
};

export default Panel;
