import React from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';

// Import your pages
import LandingPage from './App'; 
import HomePage from './pages/Home';       
import AboutMe from './pages/AboutMe';    
import Achievement from './pages/Achievement'; 
import Thankyou from './pages/Thankyou';
import Future1 from './pages/Future1';

import PageWrapper from './assets/PaperWrapper';
import DraftroomDetails from './pages/Future2';
import Extracurricular from './pages/Extracurricular';

const AnimatedRoutes: React.FC = () => {
  const location = useLocation();

  return (
    // mode="wait" ensures the old page finishes exiting before the new one enters
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        
        {/* Wrap each route's element with PageWrapper */}
        <Route 
          path="/" 
          element={
            <PageWrapper><LandingPage /></PageWrapper>
          } 
        />
        
        <Route 
          path="/home" 
          element={
            <PageWrapper><HomePage /></PageWrapper>
          } 
        />
        
        <Route 
          path="/about" 
          element={
            <PageWrapper><AboutMe /></PageWrapper>
          } 
        />
        
        <Route 
          path="/achievement" 
          element={
            <PageWrapper><Achievement /></PageWrapper>
          } 
        />
        
        <Route 
          path="/thankyou" 
          element={
            <PageWrapper><Thankyou /></PageWrapper>
          } 
        />
        
        <Route 
          path="/future" 
          element={
            <PageWrapper><Future1 /></PageWrapper>
          } 
        />

        <Route 
          path="/draftroom-details" 
          element={
            <PageWrapper><DraftroomDetails /></PageWrapper>
          } 
        />

        <Route
          path="/extracurricular"
          element={
            <PageWrapper><Extracurricular /></PageWrapper>
          }
        />
        {/* Add your other routes here following the same pattern */}
        
      </Routes>
    </AnimatePresence>
  );
};

export default AnimatedRoutes;