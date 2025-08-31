import React from "react";
import { useNavigate } from "react-router-dom";

const Success = () => {
  const navigate = useNavigate();

  return (
    <div className="h-screen flex items-center justify-center bg-gradient-to-r from-green-800 via-green-900 to-black">
      <div className="bg-green-700/20 backdrop-blur-lg p-10 rounded-3xl shadow-xl text-center text-white w-full max-w-md">
        <h1 className="text-4xl font-bold text-green-400 mb-4">✅ Login Successful</h1>
        <p className="text-lg mb-6">Welcome back! You have successfully logged in.</p>
        <button
          onClick={() => navigate("/")}
          className="px-6 py-3 bg-green-600 hover:bg-green-700 rounded-lg font-semibold transition duration-300"
        >
          Go Home
        </button>
      </div>
    </div>
  );
};

export default Success;
