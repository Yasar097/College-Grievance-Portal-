const Complaint = require("../models/Complaint");

// @desc Create a new complaint (Student)
// @route POST /api/complaints
// @access Private (Student)
const createComplaint = async (req, res) => {
  try {
    const { venue, roomNumber, type, description } = req.body;

    if (!venue || !roomNumber || !type || !description) {
      return res.status(400).json({ message: "Please fill all fields" });
    }

    const complaint = await Complaint.create({
      student: req.user._id,
      venue,
      roomNumber,
      type,
      description,
    });

    res.status(201).json(complaint);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// @desc Get my complaints (Student)
// @route GET /api/complaints/my
// @access Private (Student)
const getMyComplaints = async (req, res) => {
  try {
    const complaints = await Complaint.find({ student: req.user._id });
    res.json(complaints);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// @desc Get all complaints (Admin)
// @route GET /api/complaints
// @access Private (Admin)
const getAllComplaints = async (req, res) => {
  try {
    const complaints = await Complaint.find().populate("student", "name email");
    res.json(complaints);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// @desc Update complaint status (Admin)
// @route PATCH /api/complaints/:id/status
// @access Private (Admin)
const updateComplaintStatus = async (req, res) => {
  try {
    const { status } = req.body;
    const complaint = await Complaint.findById(req.params.id);

    if (!complaint) {
      return res.status(404).json({ message: "Complaint not found" });
    }

    complaint.status = status || complaint.status;
    await complaint.save();

    res.json(complaint);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

module.exports = {
  createComplaint,
  getMyComplaints,
  getAllComplaints,
  updateComplaintStatus,
};
