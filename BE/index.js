// backend/index.js
const express = require("express");
const cors = require("cors");

const app = express();

app.use(cors({
  origin: "http://localhost:5173", // your frontend
  methods: ["GET", "POST"],
  credentials: true
}));
app.use(express.json());

// temporary in-memory user store
let users = [];

// Signup route
app.post("/signup", (req, res) => {
  const { username, password } = req.body;

  if (!username || !password) {
    return res.status(400).json({ success: false, message: "Missing username or password" });
  }

  const existingUser = users.find(u => u.username === username);
  if (existingUser) {
    return res.json({ success: false, message: "User already exists" });
  }

  users.push({ username, password });
  console.log("Users:", users); // 👀 just to see registered users in console
  return res.json({ success: true, message: "Signup successful" });
});

// Login route
app.post("/login", (req, res) => {
  const { username, password } = req.body;

  if (!username || !password) {
    return res.status(400).json({ success: false, message: "Missing username or password" });
  }

  const user = users.find(u => u.username === username && u.password === password);

  if (user) {
    return res.json({ success: true, message: "Login successful" });
  } else {
    return res.json({ success: false, message: "Invalid credentials" });
  }
});

const PORT = process.env.PORT || 3000; // Render will set PORT
app.listen(PORT, () => {
    console.log(`✅ Server started on http://localhost:${PORT}`);
});
