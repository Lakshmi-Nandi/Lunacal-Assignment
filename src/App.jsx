import { useState, useRef, useEffect } from 'react';
import './index.css';

// --- New Components (will create below) ---
import GalleryHeader from './components/Gallery/GalleryHeader';
import GalleryImageGrid from './components/Gallery/GalleryImageGrid';
// ------------------------------------------

function App() {
  const [activeTab, setActiveTab] = useState('About Me');
  const navBarRef = useRef(null);
  const indicatorRef = useRef(null);

  // --- 1. LIFTED STATE ---
  // The image list now lives here, in the 'App' component.
  const [images, setImages] = useState([
    { id: 1, url: 'https://images.unsplash.com/photo-1511818966892-d7d671e672a2?w=600&h=600&fit=crop&q=80' },
    { id: 2, url: 'https://images.unsplash.com/photo-1511818966892-d7d671e672a2?w=600&h=600&fit=crop&q=80' },
    { id: 3, url: 'https://images.unsplash.com/photo-1511818966892-d7d671e672a2?w=600&h=600&fit=crop&q=80' },
    // { id: 4, url: 'https://via.placeholder.com/150/00FF00/000000?text=Image+3' },
  ]);

  // --- 2. HANDLER FUNCTION ---
  // This function will be passed down to the header button.
  const handleAddImage = () => {
    // Create a new dummy image
    const newId = images.length + 1;
    const randomColor = Math.floor(Math.random()*16777215).toString(16); // Random color
    
    const newImage = {
      id: newId,
      url: `https://via.placeholder.com/150/${randomColor}/FFFFFF?text=Image+${newId}`
    };

    // Add the new image to the state using the setter function
    setImages(prevImages => [...prevImages, newImage]);
  };

  useEffect(() => {
    const activeButton = navBarRef.current.querySelector('button.active');
    
    if (activeButton && indicatorRef.current) {
      const rect = activeButton.getBoundingClientRect();
      const parentRect = navBarRef.current.getBoundingClientRect();
      indicatorRef.current.style.left = `${rect.left - parentRect.left}px`;
    }
  }, [activeTab]); 

  const tabContent = {
    'About Me': (
      <>
        Hello! I'm Dave, your sales rep here from Salesforce. I've been
        working at this awesome company for 3 years now. <br />
        <br />
        I was born and raised in Albany, NY& have been living in Santa
        Carla for the past 10 years my wife Tiffany and my 4 year old twin
        daughters-Emma and Ella. Both of them are just starting school,
        so my calender is usually blocked between 9-10 AM. This is a...
      </>
    ),
    'Experiance': (
      <>
        Here is my **Experiance**. <br /><br /> I've worked in sales for 10 years,
        starting at a small startup and now happily at Salesforce.
        My main expertise is in cloud solutions.
      </>
    ),
    'Recommended': (
      <>
        Here are my **Recommended** links and articles. <br /><br />
        1. Salesforce Blog <br />
        2. Top 10 Sales Techniques <br />
        3. Cloud Computing Explained
      </>
    )
  };

  return (
    <div className="main-container">
      <div className="left-box">left box</div>
      <div className="right-box">
        <div className="info-container">
          
          <div className="nav-bar" ref={navBarRef}>
            <div className="indicator" ref={indicatorRef}></div>
            
            <button
              className={activeTab === 'About Me' ? 'active' : ''}
              onClick={() => setActiveTab('About Me')}
            >
              <span>About Me</span>
            </button>
            <button
              className={activeTab === 'Experiance' ? 'active' : ''}
              onClick={() => setActiveTab('Experiance')}
            >
              <span>Experiance</span>
            </button>
            <button
              className={activeTab === 'Recommended' ? 'active' : ''}
              onClick={() => setActiveTab('Recommended')}
            >
              <span>Recommended</span>
            </button>
          </div>
          
          <div className="info text-xl">
            {tabContent[activeTab]}
          </div>

        </div>
        <hr />
        
        {/* --- Updated gallery-container content --- */}
        <div className="gallery-container">
          {/* --- 3. PASS PROPS --- */}
          {/* Pass the handler function to the header */}
          <GalleryHeader onAddImage={handleAddImage} />
          
          {/* Pass the images list to the grid */}
          <GalleryImageGrid images={images} />
        </div>
        {/* ----------------------------------------- */}
        <hr />
      </div>
    </div>
  );
}

export default App;