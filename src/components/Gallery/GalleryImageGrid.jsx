import React, { useRef } from 'react';

const GalleryImageGrid = ({ images }) => {
  const wrapperRef = useRef(null);

  const scrollLeft = () => {
    if (wrapperRef.current) {
      wrapperRef.current.scrollLeft -= 220; // Adjust based on image width + gap
    }
  };

  const scrollRight = () => {
    if (wrapperRef.current) {
      wrapperRef.current.scrollLeft += 220; // Adjust based on image width + gap
    }
  };

  return (
    <div className="gallery-image-grid">
      <div className="grid-icon-wrapper">
        {/* Add SVG or icon here if needed */}
      </div>
      <div className="image-slider-mask">
        <div className="image-cards-wrapper" ref={wrapperRef}>
          {images.map((image) => (
            <div key={image.id} className="gallery-image-card">
              <img src={image.url} alt={`gallery-${image.id}`} className="image-content" />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default GalleryImageGrid;