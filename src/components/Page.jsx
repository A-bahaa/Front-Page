import React from 'react';
import '../styles/page.css';
//document.documentElement.clientHeight + 'px'

const Page = () => {
  return (
    <div className="page-wrapper">
      <div
        className="page"
        style={{
          height: '100%',
          aspectRatio: '8/11',
        }}
      ></div>
    </div>
  );
};

export default Page;
