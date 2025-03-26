import React, { useState, useRef, useEffect } from 'react';
import Page from '../components/Page';
import Panel from '../components/Panel';
import '../styles/editorial.css';
import domtoimage from 'dom-to-image';
import StoryProgress from '../components/StoryProgress';
import { Spin } from 'antd';
import Author from '../components/Author';

const Editorial = () => {
  const [loading, setLoading] = useState(true);
  const [showAuthor, setShowAuthor] = useState(
    !localStorage.getItem('masthead')
  );
  /*const [showAuthor, setShowAuthor] = useState(true);*/
  const [headline, setHeadline] = useState(
    'Double cick to change the background texture'
  );
  const [headlineFontSize, SetHeadlineFontSize] = useState(0.037);
  const [headlineFontStyle, setHeadlineFontStyle] = useState('italic');
  const [image, setImage] = useState(null);
  const [storyText, setStoryText] = useState('');
  const [storyLength, setStoryLength] = useState(storyText.length);
  const [showLoader, setShowLoader] = useState(false);
  const fileInputRef = useRef(null);
  const pageRef = useRef(null);
  const storyRef = useRef(null);
  const masthead = localStorage.getItem('masthead');
  const issue_no = parseInt(localStorage.getItem('issue_no'));
  const maxLength = 700;
  const date = new Date();
  const options = {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  };
  const date_formatted = date.toLocaleDateString('en-US', options);
  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 1000);
  }, []);
  const handleRemoveImage = () => {
    setImage(null);
    if (fileInputRef.current) {
      fileInputRef.current.value = null; // Clear the input value
    }
  };

  const handleIssueJournal = () => {
    setShowLoader(true);
    localStorage.setItem('issue_no', issue_no + 1);

    domtoimage
      .toPng(pageRef.current, {
        quality: 1,
        cacheBust: true, // Enable cache busting
        bgcolor: 'white',
      })
      .then((dataUrl) => {
        const link = document.createElement('a');
        link.href = dataUrl;
        link.download = `${masthead} No. ${issue_no + 1}.png`;
        link.click();
        if (!storyText) setShowLoader(false);
      })
      .catch((error) => {
        console.error('Error exporting the front page:', error);
        alert('error saving the front-page');
      });
    if (storyText) {
      domtoimage
        .toPng(storyRef.current, {
          quality: 1,
          cacheBust: true, // Enable cache busting
          bgcolor: 'white',
        })
        .then((dataUrl) => {
          const link = document.createElement('a');
          link.href = dataUrl;
          link.download = `${date_formatted}.png`;
          link.click();
          setShowLoader(false);
        })
        .catch((error) => {
          console.error('Error exporting the front page:', error);
          alert('error saving the story');
        });
    }
  };

  return (
    <>
      {!loading ? (
        showAuthor ? (
          <Author setShowAuthor={setShowAuthor} />
        ) : (
          <div className="editorial-wrap">
            <div className="editorial-page-wrap">
              <Page
                headline={headline}
                headlineFontSize={headlineFontSize}
                headlineFontStyle={headlineFontStyle}
                image={image}
                setImage={setImage}
                fileInputRef={fileInputRef}
                pageRef={pageRef}
              />
            </div>
            <StoryProgress storyLength={storyLength} maxLength={maxLength} />
            <div className="editorial-panel-wrap">
              <Panel
                setHeadline={setHeadline}
                headlineFontSize={headlineFontSize}
                SetHeadlineFontSize={SetHeadlineFontSize}
                headlineFontStyle={headlineFontStyle}
                setHeadlineFontStyle={setHeadlineFontStyle}
                handleIssueJournal={handleIssueJournal}
                handleRemoveImage={handleRemoveImage}
                image={image}
                storyText={storyText}
                setStoryText={setStoryText}
                setStoryLength={setStoryLength}
                maxLength={maxLength}
                storyRef={storyRef}
                showLoader={showLoader}
                setShowAuthor={setShowAuthor}
              />
            </div>
          </div>
        )
      ) : (
        <Spin style={{ transform: 'translate(49vw, 49vh)' }} />
      )}
    </>
  );
};

export default Editorial;

/*

        

*/
