import React from 'react';

const GalleryHeader = ({ onAddImage }) => {
  return (
    <div className="gallery-header">
      <div className="header-left">
        <div className="icon-wrapper">
          {/* Add SVG or icon here if needed */}
        </div>
        <button className="gallery-title-button">Gallery</button>
      </div>
      <div className="header-right">
        <button className="add-image-button" onClick={onAddImage}>
          + ADD IMAGE
        </button>
        <div className="nav-arrows">
          <button className="arrow-button">&lt;</button>
          <button className="arrow-button">&gt;</button>
        </div>
      </div>
    </div>
  );
};

export default GalleryHeader;