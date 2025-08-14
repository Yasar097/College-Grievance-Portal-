const express = require("express");
const {
  createComplaint,
  getMyComplaints,
  getAllComplaints,
  updateComplaintStatus,
} = require("../controllers/complaintController");

const { protect, adminOnly } = require("../middleware/authMiddleware");

const router = express.Router();

// Student routes
router.post("/", protect, createComplaint);
router.get("/my", protect, getMyComplaints);

// Admin routes
router.get("/", protect, adminOnly, getAllComplaints);
router.patch("/:id/status", protect, adminOnly, updateComplaintStatus);

module.exports = router;
