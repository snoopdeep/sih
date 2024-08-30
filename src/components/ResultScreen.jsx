// src/components/ResultScreen.jsx
import React from 'react';

const ResultScreen = ({ success, onRetry }) => {
  return (
    <div className="flex flex-col items-center justify-center h-screen bg-white shadow-lg p-8 rounded-lg mx-4 md:mx-auto max-w-2xl text-center">
      {success ? (
        <>
          <img src="/public/success.png" alt="Success" className="w-32 h-32 mb-4" /> {/* Success Image Placeholder */}
          <h2 className="text-3xl font-bold text-green-600 mb-4">Face Authentication Successful!</h2>
          <p className="text-lg text-gray-600">You are now authenticated.</p>
        </>
      ) : (
        <>
          <img src="/public/failure.png" alt="Failure" className="w-32 h-32 mb-4" /> {/* Failure Image Placeholder */}
          <h2 className="text-3xl font-bold text-red-600 mb-4">Face Authentication Failed</h2>
          <p className="text-lg text-gray-600">Please try again.</p>
          <button
            className="mt-4 bg-yellow-600 text-white py-3 px-6 rounded-full hover:bg-yellow-700 transition duration-300"
            onClick={onRetry}
          >
            Retry
          </button>
        </>
      )}
    </div>
  );
};

export default ResultScreen;
