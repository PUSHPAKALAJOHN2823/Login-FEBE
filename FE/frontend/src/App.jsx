import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const App = () => {
  const [isLogin, setIsLogin] = useState(false); // default to signup first
  const [user, setUser] = useState("");
  const [pass, setPass] = useState("");
  const [message, setMessage] = useState("");
  const navigate = useNavigate();

  async function handleSubmit() {
    try {
      const url = isLogin
        ? "http://localhost:3000/login"
        : "http://localhost:3000/signup";

      const res = await axios.post(url, { username: user, password: pass });
      setMessage(res.data.message);

      if (res.data.success && isLogin) {
        navigate("/sucess");
      } else if (!res.data.success && isLogin) {
        navigate("/fail");
      }
    } catch (error) {
      console.error("Error:", error);
      setMessage("Something went wrong!");
    }
  }

  return (
    <div className="bg-gradient-to-br from-indigo-900 via-gray-900 to-black h-screen flex items-center justify-center">
      <div className="bg-gray-800/90 backdrop-blur-lg text-white p-10 rounded-3xl shadow-2xl w-full max-w-md transition-transform hover:scale-[1.02]">
        <h2 className="text-4xl font-extrabold mb-8 text-center text-indigo-400 drop-shadow-lg">
          {isLogin ? "Welcome Back" : "Create Account"}
        </h2>

        <input
          type="text"
          value={user}
          placeholder="Enter username"
          className="w-full p-3 mb-6 rounded-lg bg-gray-700/60 placeholder-gray-400 text-white focus:outline-none focus:ring-2 focus:ring-indigo-500"
          onChange={(e) => setUser(e.target.value)}
        />
        <input
          type="password"
          value={pass}
          placeholder="Enter password"
          className="w-full p-3 mb-6 rounded-lg bg-gray-700/60 placeholder-gray-400 text-white focus:outline-none focus:ring-2 focus:ring-indigo-500"
          onChange={(e) => setPass(e.target.value)}
        />

        <button
          onClick={handleSubmit}
          className="w-full py-3 bg-indigo-600 hover:bg-indigo-700 rounded-lg text-xl font-semibold shadow-lg transition-all duration-300"
        >
          {isLogin ? "Login" : "Signup"}
        </button>

        {message && (
          <p
            className={`mt-4 text-center text-sm font-medium ${
              message.includes("success") ? "text-green-400" : "text-red-400"
            }`}
          >
            {message}
          </p>
        )}

        <p className="mt-6 text-center text-sm text-gray-300">
          {isLogin ? "New user?" : "Already registered?"}
          <button
            onClick={() => {
              setIsLogin(!isLogin);
              setMessage("");
              setUser("");
              setPass("");
            }}
            className="ml-2 text-indigo-400 hover:text-indigo-300 font-semibold"
          >
            {isLogin ? "Signup" : "Login"}
          </button>
        </p>
      </div>
    </div>
  );
};

export default App;
