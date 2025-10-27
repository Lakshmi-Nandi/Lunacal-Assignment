import { useState, useRef, useEffect } from 'react';
import './index.css';
import GalleryHeader from './components/Gallery/GalleryHeader';
import GalleryImageGrid from './components/Gallery/GalleryImageGrid';

function App() {
  const [activeTab, setActiveTab] = useState('About Me');
  const navBarRef = useRef(null);
  const indicatorRef = useRef(null);
  const [images, setImages] = useState([
    { id: 1, url: 'https://images.unsplash.com/photo-1511818966892-d7d671e672a2?w=600&h=600&fit=crop&q=80' },
    { id: 2, url: 'https://images.unsplash.com/photo-1511818966892-d7d671e672a2?w=600&h=600&fit=crop&q=80' },
    { id: 3, url: 'https://images.unsplash.com/photo-1511818966892-d7d671e672a2?w=600&h=600&fit=crop&q=80' },
    { id: 4, url: 'https://images.unsplash.com/photo-1511818966892-d7d671e672a2?w=600&h=600&fit=crop&q=80' },
  ]);

  const handleAddImage = () => {
    const input = document.createElement('input');
    input.type = 'file';
    input.accept = 'image/*';
    input.onchange = (e) => {
      const file = e.target.files[0];
      if (file) {
        const url = URL.createObjectURL(file);
        setImages((prev) => [...prev, { id: prev.length + 1, url }]);
      }
    };
    input.click();
  };

  useEffect(() => {
    const activeButton = navBarRef.current?.querySelector('button.active');
    if (activeButton && indicatorRef.current) {
      const rect = activeButton.getBoundingClientRect();
      const parentRect = navBarRef.current.getBoundingClientRect();
      indicatorRef.current.style.left = `${rect.left - parentRect.left}px`;
      indicatorRef.current.style.width = `${rect.width}px`;
    }
  }, [activeTab]);

  const tabContent = {
    'About Me': (
      <>
        Hello! I'm Dave, your sales rep here from Salesforce. I've been
        working at this awesome company for 3 years now. <br />
        <br />
        I was born and raised in Albany, NY & have been living in Santa
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
          <div className="info">
            {tabContent[activeTab]}
          </div>
        </div>
        <hr />
        <div className="gallery-container">
          <GalleryHeader onAddImage={handleAddImage} />
          <GalleryImageGrid images={images} />
        </div>
        <hr />
      </div>
    </div>
  );
}

export default App;