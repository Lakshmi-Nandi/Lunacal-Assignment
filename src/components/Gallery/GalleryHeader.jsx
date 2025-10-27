import React from 'react';

const GalleryHeader = ({ onAddImage, onScrollLeft, onScrollRight }) => {
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
          <button className="arrow-button" onClick={onScrollLeft}>&lt;</button>
          <button className="arrow-button" onClick={onScrollRight}>&gt;</button>
        </div>
      </div>
    </div>
  );
};

export default GalleryHeader;