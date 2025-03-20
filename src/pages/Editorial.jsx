import React from 'react';
import Page from '../components/Page';
import Panel from '../components/Panel';
import '../styles/editorial.css';

const Editorial = () => {
  return (
    <div
      className="editorial-wrap"
      style={{
        border: '1px solid red',
      }}
    >
      <div
        className="editorial-page-wrap"
        style={{
          border: '1px solid black',
        }}
      >
        <Page />
      </div>
      <div
        style={{ border: '1px solid blue' }}
        className="editorial-panel-wrap"
      >
        <Panel />
      </div>
    </div>
  );
};

export default Editorial;
