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
  const date = new Date();
  const options = {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  };

  return (
    <div className="story-container">
      <textarea
        className="story-textarea"
        value={storyText}
        placeholder="CAIRO - "
        onChange={handleTextChange}
        maxLength={maxLength}
        onKeyDown={playSound}
      ></textarea>
      <div className="story-deco">
        <p>{date.toLocaleDateString('en-US', options)}</p>
        <Logo />
      </div>
    </div>
  );
};
