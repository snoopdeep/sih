// src/components/HomeScreen.jsx
import React from 'react';

const HomeScreen = ({ onStart }) => {
  return (
    <div className="flex flex-col items-center justify-center h-screen text-center bg-white shadow-lg p-8 rounded-lg mx-4 md:mx-auto max-w-2xl">
      <img src="/public/authentication.png" alt="Authentication" className="w-32 h-32 mb-4" /> {/* Image Placeholder */}
      <h2 className="text-3xl font-bold text-blue-700 mb-4">Welcome to Aadhaar Face Authentication</h2>
      <p className="mb-8 text-lg text-gray-600">
        Securely authenticate your identity using facial recognition technology. Click the button below to start the process. Ensure you have good lighting and your face is clearly visible.
      </p>
      <button
        className="bg-blue-600 text-white py-3 px-6 rounded-full hover:bg-blue-700 transition duration-300"
        onClick={onStart}
      >
        Start Face Authentication
      </button>
    </div>
  );
};

export default HomeScreen;
