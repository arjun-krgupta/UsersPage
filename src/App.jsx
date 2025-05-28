import React, { useState } from 'react';
import LandingPage from './components/LandingPage';
import { ChevronLeft, ChevronRight, Home } from 'lucide-react';
import SignUp from './components/SignUp';
import Profile from './components/Profile';
import Login from './components/Login';

const App = () => {
  const [currentPage, setCurrentPage] = useState(0);

  const pages = [
    <LandingPage key="landing" />, 
    <Login key="login" />, 
    <SignUp key="signup" />, 
    <Profile key="profile" />
  ];

  const handleNext = () => {
    setCurrentPage((prev) => (prev < pages.length - 1 ? prev + 1 : prev));
  };

  const handlePrev = () => {
    setCurrentPage((prev) => (prev > 0 ? prev - 1 : prev));
  };

  const handleHome = () => {
    setCurrentPage(0);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 p-4">
      <div className="w-full max-w-md bg-white rounded-lg shadow-md p-6 relative">
        {pages[currentPage]}

        {/* Navigation Controls */}
        <div className="flex justify-center items-center mt-4 space-x-6">
          <button onClick={handleHome}>
            <Home className="text-gray-500 hover:text-gray-700" />
          </button>
          <button onClick={handlePrev}>
            <ChevronLeft className="text-gray-500 hover:text-gray-700" />
          </button>
          <p className="text-sm text-gray-500">{currentPage + 1} of 4</p>
          <button onClick={handleNext}>
            <ChevronRight className="text-gray-500 hover:text-gray-700" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default App;
