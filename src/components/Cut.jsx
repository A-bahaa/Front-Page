import React from 'react';
import '../styles/cut.css';
import { FormatPainterOutlined } from '@ant-design/icons';

const Cut = ({ image, setImage, fileInputRef }) => {
  const handleFileChange = (event) => {
    const file = event.target.files[0];
    handleImage(file);
  };

  const handleDrop = (event) => {
    event.preventDefault();
    const file = event.dataTransfer.files[0];
    handleImage(file);
  };

  const handleDragOver = (event) => {
    event.preventDefault();
  };

  const handleImage = (file) => {
    if (file && file.type.startsWith('image/')) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setImage(reader.result);
      };
      reader.readAsDataURL(file);
    } else {
      alert('Please select an image file.');
    }
  };

  return (
    <div className="page-cut-wrap">
      {image ? (
        <img src={image} alt="hero-shot" className="page-cut" />
      ) : (
        <>
          <input
            type="file"
            accept="image/*"
            style={{ display: 'none' }}
            onChange={handleFileChange}
            ref={fileInputRef}
          />
          <button
            onClick={() => fileInputRef.current.click()}
            onDrop={handleDrop}
            onDragOver={handleDragOver}
            className="page-cut-add-btn"
            aria-describedby="add the lead photo of your journal"
          >
            <span className="page-cut-add-title">Add your Cut</span>
          </button>
        </>
      )}
    </div>
  );
};

export default Cut;
