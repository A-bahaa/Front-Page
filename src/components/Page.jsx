import React from 'react';
import '../styles/page.css';
import usePageDimensions from '../hooks/usePageDimensions';
import Masthead from './Masthead';
import Folio from './Folio';
import Headline from './Headline';
import Cut from './Cut';

const Page = () => {
  usePageDimensions();
  return (
    <div className="page">
      <div className="page-wrap">
        <Masthead />
        <Folio></Folio>
        <Headline></Headline>
        <Cut></Cut>
      </div>
    </div>
  );
};

export default Page;
