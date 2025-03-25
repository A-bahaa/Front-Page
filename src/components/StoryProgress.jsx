import React from 'react';
import { Progress } from 'antd';
import '../styles/storyProgress.css';

const StoryProgress = ({ storyLength, maxLength }) => {
  const percent = Math.floor((storyLength / maxLength) * 100);

  return (
    <div className="story-progress-wrap">
      <Progress
        percent={percent}
        type="circle"
        strokeColor="var(--primary-typography-color)"
        trailColor="#ccc"
        showInfo={true}
        size={30}
      />
    </div>
  );
};

export default StoryProgress;
