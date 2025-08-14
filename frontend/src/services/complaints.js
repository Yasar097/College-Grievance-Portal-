import API from "./api";

// Student: create complaint
export const createComplaint = async (payload) => {
  // payload: {venue, roomNumber, type, description}
  const { data } = await API.post("/complaints", payload);
  return data;
};

// Student: my complaints
export const getMyComplaints = async () => {
  const { data } = await API.get("/complaints/my");
  return data;
};

// Admin: all complaints
export const getAllComplaints = async () => {
  const { data } = await API.get("/complaints");
  return data;
};

// Admin: update status
export const updateComplaintStatus = async (id, status) => {
  const { data } = await API.patch(`/complaints/${id}/status`, { status });
  return data;
};
