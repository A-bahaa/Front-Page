import React, { useState, useRef } from 'react';
import '../styles/cut.css';

const Cut = () => {
  const [image, setImage] = useState(null);
  const fileInputRef = useRef(null);

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

  const handleRemoveImage = () => {
    setImage(null);
    if (fileInputRef.current) {
      fileInputRef.current.value = null; // Clear the input value
    }
  };
  return (
    <div
      className="page-cut-wrap"
      style={{
        border: '2px dashed navy',
        textAlign: 'center',
      }}
      onDrop={handleDrop}
      onDragOver={handleDragOver}
    >
      {/*<img src="testImgs/tes3.jpg" className="page-cut" />*/}
      {image ? (
        <>
          <img src={image} alt="hero-shot" className="page-cut" />
          <button
            style={{
              position: 'absolute',
              top: '5px',
              right: '5px',
              background: 'red',
              color: 'white',
              border: 'none',
              borderRadius: '50%',
              width: '25px',
              height: '25px',
              cursor: 'pointer',
              zIndex: 2,
            }}
            onClick={handleRemoveImage}
          >
            X
          </button>
        </>
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
