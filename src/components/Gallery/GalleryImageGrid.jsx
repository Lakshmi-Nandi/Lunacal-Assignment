import GalleryImageCard from './GalleryImageCard';
import './Gallery.css'; // Import the shared CSS
import { CgMenuGridR } from 'react-icons/cg'; // <-- ADD THIS LINE

function GalleryImageGrid({images}) {

  return (
    <div className="gallery-image-grid">
      {/* Grid Icon on the left */}
      <div className="grid-icon-wrapper">
        <CgMenuGridR size={20} className="header-icon" /> {/* This will now work */}
      </div>

      {/* Actual image cards */}
      <div className="image-cards-wrapper">
        {images.map(image => (
          <GalleryImageCard key={image.id} imageUrl={image.url} />
        ))}
      </div>
    </div>
  );
}

export default GalleryImageGrid;