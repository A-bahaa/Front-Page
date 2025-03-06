import React from 'react';
import '../styles/page.css';
import usePageDimensions from '../hooks/usePageDimensions';

const Page = () => {
  const dimensions = usePageDimensions();
  console.log(dimensions[0], dimensions[1]);
  return (
    <div className="page-wrapper">
      {
        <div
          className="page"
          style={{
            width: dimensions[0],
            height: dimensions[1],
          }}
        ></div>
      }
    </div>
  );
};

export default Page;
