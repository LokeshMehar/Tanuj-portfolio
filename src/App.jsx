/* eslint-disable no-unused-vars */
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import {
  About,
  Contact,
  Experience,
  Navbar,
  Projects,
  StarsCanvas,
} from './components';

import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css';
import Preloader from './components/Pre';
import { useEffect, useState } from 'react';
import Home from './components/Home/Home';
import TechStackSections from './components/TechStackSections';
import Resume from './components/Resume';
import ContactSection from './components/ContactSection';

function App() {
  const [load, upadateLoad] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      upadateLoad(false);
    }, 1200);

    return () => clearTimeout(timer);
  }, []);

  

  return (
    <BrowserRouter>
      <Preloader load={load} />
      <div className="App" id={load ? "no-scroll" : "scroll"}>
        <Navbar/>
        
        <Routes>
          <Route path="/" element={
            <>
              <Home/>
              <About/>
              <Experience/>
              <Projects/>
              <TechStackSections/>
              <div className="relative z-0">
      <Contact/>
      <StarsCanvas/>
    </div>
            </>
          } />
          
          
          <Route path="/resume" element={
            <>
              <Resume/>
            </>
          } />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;