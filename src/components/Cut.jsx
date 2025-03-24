import React from 'react';
import '../styles/cut.css';

const Cut = ({ image, setImage, fileInputRef }) => {
  const handleFileChange = (event) => {
    console.log('clicked');
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
    <div
      className="page-cut-wrap"
      style={{
        border: '2px dashed var(--primary-typography-color)',
        textAlign: 'center',
      }}
      onDrop={handleDrop}
      onDragOver={handleDragOver}
    >
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
            style={{ zIndex: 2 }}
          >
            Upload Image
          </button>
          <p>Drag and drop image here</p>
        </>
      )}
    </div>
  );
};

export default Cut;
