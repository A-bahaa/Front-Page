import React, { useState } from 'react';
import '../styles/page.css';
import Masthead from './Masthead';
import Folio from './Folio';
import Headline from './Headline';
import Cut from './Cut';
import bg1 from '../assets/images/background.jpg';
import bg2 from '../assets/images/background2.jpg';
import bg3 from '../assets/images/background3.jpg';
import bg4 from '../assets/images/background4.jpg';
import bg5 from '../assets/images/background5.jpg';
import bg6 from '../assets/images/background6.jpg';

const Page = ({
  headline,
  headlineFontSize,
  headlineFontStyle,
  image,
  setImage,
  fileInputRef,
  pageRef,
}) => {
  const [currentBgIndex, setCurrentBgIndex] = useState(2);

  const backgroundImages = [bg1, bg2, bg3, bg4, bg5, bg6];

  const loadImage = async () => {
    const newImageIndex = (currentBgIndex + 1) % backgroundImages.length;
    const image = new Image();
    image.src = backgroundImages[newImageIndex];

    if (image.complete) {
      return newImageIndex;
    } else {
      await new Promise((resolve) => {
        image.onload = resolve;
      });
      return newImageIndex;
    }
  };

  const handleChangeBg = async () => {
    const newImageIndex = await loadImage();
    setCurrentBgIndex(newImageIndex);
  };

  return (
    <div className="page-screenshot" ref={pageRef}>
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
            headlineFontStyle={headlineFontStyle}
          ></Headline>
          <Cut
            image={image}
            setImage={setImage}
            fileInputRef={fileInputRef}
          ></Cut>
        </div>
      </div>
    </div>
  );
};

export default Page;
