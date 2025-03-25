import React from 'react';
import '../styles/story.css';
import Logo from './Logo';
import { useRef } from 'react';

export const Story = ({
  storyText,
  setStoryText,
  setStoryLength,
  maxLength,
  playSound,
}) => {
  const textAreaRef = useRef(null);
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
  const handleMouseOut = () => {
    textAreaRef.current.blur();
  };

  return (
    <div className="story-container">
      <textarea
        ref={textAreaRef}
        className="story-textarea"
        value={storyText}
        placeholder="CAIRO - "
        onChange={handleTextChange}
        maxLength={maxLength}
        onKeyDown={playSound}
        onMouseOut={handleMouseOut}
      ></textarea>
      <div className="story-deco">
        <p>{date.toLocaleDateString('en-US', options)}</p>
        <Logo />
      </div>
    </div>
  );
};
