import React, { useRef } from 'react';

const GalleryImageGrid = ({ images, onScrollLeft, onScrollRight }) => {
  const wrapperRef = useRef(null);

  const scrollLeft = () => {
    if (wrapperRef.current) {
      wrapperRef.current.scrollLeft -= 170; // Incremental scroll left (image width 150px + gap 20px approx)
    }
  };

  const scrollRight = () => {
    if (wrapperRef.current) {
      wrapperRef.current.scrollLeft += 170; // Incremental scroll right
    }
  };

  // Pass the scroll functions to the parent via props
  if (onScrollLeft) onScrollLeft(scrollLeft);
  if (onScrollRight) onScrollRight(scrollRight);

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