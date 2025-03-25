import React from 'react';
import { Progress } from 'antd';
import '../styles/storyProgress.css';

const StoryProgress = ({ storyLength, maxLength }) => {
  const percent = Math.floor((storyLength / maxLength) * 100);
  const isMobile = window.matchMedia('(max-width: 1024px)').matches;

  return (
    <div className="story-progress-wrap">
      <Progress
        percent={percent}
        type="circle"
        strokeColor="var(--primary-typography-color)"
        trailColor="#ccc"
        showInfo={true}
        size={isMobile ? 30 : 50}
      />
    </div>
  );
};

export default StoryProgress;
