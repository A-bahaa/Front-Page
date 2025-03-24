import React from 'react';
import '../styles/cut-remover.css';

const CutRemover = ({ image, handleRemoveImage }) => {
  return image ? (
    <button
      className="cut-remover-btn"
      onClick={handleRemoveImage}
      title="remove-photo"
      aria-describedby="remove the lead photo of your journal"
    ></button>
  ) : null;
};
export default CutRemover;
