import React, { useState } from 'react';
import '../styles/page.css';
import Masthead from './Masthead';
import Folio from './Folio';
import Headline from './Headline';
import Cut from './Cut';

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

  const backgroundImages = [
    '../../public/background.jpg',
    '../../public/background2.jpg',
    '../../public/background3.jpg',
    '../../public/background4.jpg',
    '../../public/background5.jpg',
    '../../public/background6.jpg',
  ];

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
