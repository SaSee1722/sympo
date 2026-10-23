import React from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import ScrollToTop from './components/ScrollToTop';
import { ThemeProvider } from './context/ThemeContext';

import Home from './pages/Home';
import PromptX from './pages/PromptX';
import DesignXpo from './pages/DesignXpo';
import ClueX from './pages/ClueX';
import Schedule from './pages/Schedule';
import About from './pages/About';
import RegisterPromptX from './pages/RegisterPromptX';
import RegisterDesignXpo from './pages/RegisterDesignXpo';
import RegisterClueX from './pages/RegisterClueX';
import NotFound from './pages/NotFound';

import './styles/global.css';
import './styles/animations.css';
import './styles/components.css';

export default function App() {
  return (
    <ThemeProvider>
      <BrowserRouter>
        <ScrollToTop />
        <div className="site-wrapper" style={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
          <Navbar />
          <div style={{ flexGrow: 1 }}>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/events/promptx" element={<PromptX />} />
              <Route path="/events/designxpo" element={<DesignXpo />} />
              <Route path="/events/cluex" element={<ClueX />} />
              <Route path="/schedule" element={<Schedule />} />
              <Route path="/about" element={<About />} />
              <Route path="/register" element={<Navigate to="/register/promptx" replace />} />
              <Route path="/register/promptx" element={<RegisterPromptX />} />
              <Route path="/register/designxpo" element={<RegisterDesignXpo />} />
              <Route path="/register/cluex" element={<RegisterClueX />} />
              <Route path="*" element={<NotFound />} />
            </Routes>
          </div>
          <Footer />
        </div>
      </BrowserRouter>
    </ThemeProvider>
  );
}
