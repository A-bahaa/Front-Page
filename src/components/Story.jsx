import React from 'react';
import '../styles/story.css';
import Logo from './Logo';

export const Story = ({
  storyText,
  setStoryText,
  setStoryLength,
  maxLength,
  playSound,
}) => {
  const handleTextChange = (e) => {
    const newText = e.target.value;
    setStoryText(newText);
    setStoryLength(newText.length);
  };
  console.log(/Chrome/.test(navigator.userAgent));

  return (
    <div className="story-container">
      <textarea
        className="story-textarea"
        value={storyText}
        onChange={handleTextChange}
        maxLength={maxLength}
        onKeyDown={playSound}
      ></textarea>
      <div className="logo-container">
        <Logo />
      </div>
    </div>
  );
};
