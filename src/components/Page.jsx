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
      <Masthead />
      <Folio></Folio>
      <Headline></Headline>
      <Cut></Cut>
    </div>
  );
};

export default Page;
