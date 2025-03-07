import React from 'react';
import '../styles/page.css';
import usePageDimensions from '../hooks/usePageDimensions';
import Masthead from './Masthead';

const Page = () => {
  const dimensions = usePageDimensions();
  console.log(dimensions[0], dimensions[1]);
  return (
    <div
      className="page"
      style={{
        width: dimensions[0],
        height: dimensions[1],
        padding: dimensions[0] * 0.04,
        backgroundColor: 'red',
        backgroundClip: 'content-box',
      }}
    >
      <Masthead dimensions={dimensions} />
    </div>
  );
};

export default Page;
