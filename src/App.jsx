// src/App.jsx
import React, { useState } from 'react';
import Header from './components/Header';
import HomeScreen from './components/HomeScreen';
import FaceCaptureScreen from './components/FaceCaptureScreen';
import ResultScreen from './components/ResultScreen';
import './index.css';

function App() {
  const [step, setStep] = useState(1);
  const [authSuccess, setAuthSuccess] = useState(false);

  const handleStart = () => setStep(2);
  const handleComplete = (success) => {
    setAuthSuccess(success);
    setStep(3);
  };
  const handleRetry = () => setStep(1);

  return (
    <div>
      <Header />
      {step === 1 && <HomeScreen onStart={handleStart} />}
      {step === 2 && <FaceCaptureScreen onComplete={handleComplete} />}
      {step === 3 && <ResultScreen success={authSuccess} onRetry={handleRetry} />}
    </div>
  );
}

export default App;
