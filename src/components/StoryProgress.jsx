import React from 'react';
import { Progress } from 'antd';

const StoryProgress = ({ storyLength, maxLength }) => {
  const percent = Math.floor((storyLength / maxLength) * 100);

  return (
    <div style={{ alignSelf: 'flex-start', marginLeft: '5%', marginTop: '2%' }}>
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
