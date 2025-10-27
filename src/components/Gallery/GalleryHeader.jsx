import { BsQuestionCircle } from 'react-icons/bs'; // Question mark icon
import { CgMenuGridR } from 'react-icons/cg';    // Grid icon
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa'; // Arrow icons
import './Gallery.css'; // Import the shared CSS

function GalleryHeader({onAddImage}) {
  return (
    <div className="gallery-header">
      <div className="header-left">
        <div className="icon-wrapper">
          <BsQuestionCircle size={20} className="header-icon" />
        </div>
        <div className="gallery-title-button">
          Gallery
        </div>
      </div>

      <div className="header-right">
        <button className="add-image-button" onClick={onAddImage}>
          + ADD IMAGE
        </button>
        <div className="nav-arrows">
          <button className="arrow-button">
            <FaArrowLeft size={20} />
          </button>
          <button className="arrow-button">
            <FaArrowRight size={20} />
          </button>
        </div>
      </div>
    </div>
  );
}

export default GalleryHeader;