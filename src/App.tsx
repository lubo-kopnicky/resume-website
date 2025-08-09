import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LandingPage from './components/LandingPage';
import Resume from './components/Resume'; // Your Resume component
import AboutMe from './components/AboutMe';

const App: React.FC = () => {
  return (
    <Router>
      <div className="app-main">
        <Routes>
          {/* Landing page route */}
          <Route path="/" element={<LandingPage />} />
          
          {/* The fully built resume page */}
          <Route path="/resume" element={<Resume />} />

          {/* Under construction pages */}
          <Route path="/portfolio" element={<AboutMe />} />
          <Route path="/blog" element={<AboutMe />} />
          <Route path="/contact" element={<AboutMe />} />
          
          {/* A catch-all for any other path */}
          <Route path="*" element={<h1>404: Page Not Found</h1>} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;