import React, { useState } from 'react';
import '../styles/page.css';
import Masthead from './Masthead';
import Folio from './Folio';
import Headline from './Headline';
import Cut from './Cut';

const Page = ({ headline, headlineFontSize }) => {
  const [currentBgIndex, setCurrentBgIndex] = useState(2);

  const backgroundImages = [
    '../../public/background.jpg',
    '../../public/background2.jpg',
    '../../public/background3.jpg',
    '../../public/background4.jpg',
    '../../public/background5.jpg',
    '../../public/background6.jpg',
  ];

  const handleChangeBg = () => {
    const newImageIndex = (currentBgIndex + 1) % backgroundImages.length;
    const newImage = new Image();
    newImage.src = backgroundImages[newImageIndex];
    // wait untill the new image is uploaded then change the state
    newImage.onload = () => {
      setCurrentBgIndex(newImageIndex);
    };
  };

  return (
    <div
      className="page"
      style={{ backgroundImage: `url(${backgroundImages[currentBgIndex]})` }}
      onDoubleClick={handleChangeBg}
    >
      <div className="page-wrap">
        <Masthead />
        <Folio></Folio>
        <Headline
          headline={headline}
          headlineFontSize={headlineFontSize}
        ></Headline>
        <Cut></Cut>
      </div>
    </div>
  );
};

export default Page;
