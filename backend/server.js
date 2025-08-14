const express = require("express");
const dotenv = require("dotenv");
const cors = require("cors");
const connectDB = require("./config/db");

// Load env variables
dotenv.config();

// Connect to MongoDB
connectDB();

const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// Test route
app.get("/api/test", (req, res) => {
  res.json({ message: "API running" });
});

// ===== Added Routes =====
app.use("/api/auth", require("./routes/authRoutes")); // NEW: Auth routes for register/login
app.use("/api/complaints", require("./routes/complaintRoutes")); // NEW: Complaint routes for student/admin


// Start server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running at http://localhost:${PORT}`));
