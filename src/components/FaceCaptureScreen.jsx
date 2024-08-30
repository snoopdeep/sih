// src/components/FaceCaptureScreen.jsx
import React, { useRef, useState } from 'react';
import Webcam from 'react-webcam';

const FaceCaptureScreen = ({ onComplete }) => {
  const webcamRef = useRef(null);
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState('Align your face within the frame.');

  const handleCapture = () => {
    setLoading(true);
    setMessage('Analyzing liveness...');
    // Simulate model processing delay
    setTimeout(() => {
      setLoading(false);
      onComplete(true); // Simulate success
    }, 2000);
  };

  return (
    <div className="flex flex-col items-center justify-center h-screen bg-white shadow-lg p-8 rounded-lg mx-4 md:mx-auto max-w-2xl">
      <Webcam
        audio={false}
        ref={webcamRef}
        screenshotFormat="image/jpeg"
        className="border-4 border-blue-600 rounded-lg mb-4"
        videoConstraints={{
          facingMode: 'user',
        }}
      />
      <p className="mt-4 text-xl font-semibold text-gray-700">{message}</p>
      {loading ? (
        <div className="mt-4 text-blue-700 font-bold">Processing...</div>
      ) : (
        <button
          className="mt-4 bg-red-600 text-white py-3 px-6 rounded-full hover:bg-red-700 transition duration-300"
          onClick={handleCapture}
        >
          Verify Liveness
        </button>
      )}
    </div>
  );
};

export default FaceCaptureScreen;
