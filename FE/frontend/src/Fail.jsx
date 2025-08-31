import React from "react";
import { useNavigate } from "react-router-dom";

const Fail = () => {
  const navigate = useNavigate();

  return (
    <div className="h-screen flex items-center justify-center bg-gradient-to-r from-red-800 via-red-900 to-black">
      <div className="bg-red-700/20 backdrop-blur-lg p-10 rounded-3xl shadow-xl text-center text-white w-full max-w-md">
        <h1 className="text-4xl font-bold text-red-400 mb-4">❌ Login Failed</h1>
        <p className="text-lg mb-6">Invalid credentials. Please try again.</p>
        <button
          onClick={() => navigate("/")}
          className="px-6 py-3 bg-red-600 hover:bg-red-700 rounded-lg font-semibold transition duration-300"
        >
          Try Again
        </button>
      </div>
    </div>
  );
};

export default Fail;
