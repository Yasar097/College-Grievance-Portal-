import { useEffect, useState } from "react";

export default function AdminDashboard() {
  const [complaints, setComplaints] = useState([]);
  const token = localStorage.getItem("token");

  // Fetch all complaints
  const fetchComplaints = () => {
    fetch("http://localhost:5000/api/complaints", {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    })
      .then((res) => res.json())
      .then((data) => setComplaints(data))
      .catch((err) => console.error(err));
  };

  useEffect(() => {
    fetchComplaints();
  }, []);

  // Update complaint status
  const updateStatus = async (id, newStatus) => {
    const res = await fetch(
      `http://localhost:5000/api/complaints/${id}/status`,
      {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify({ status: newStatus }),
      }
    );

    if (res.ok) {
      alert("Status updated successfully");
      fetchComplaints();
    } else {
      const data = await res.json();
      alert(data.message || "Error updating status");
    }
  };

  return (
    <div>
      <h1 className="text-2xl font-bold mb-6">Admin Dashboard</h1>

      {complaints.length === 0 ? (
        <p>No complaints found.</p>
      ) : (
        <div className="space-y-4">
          {complaints.map((c) => (
            <div key={c._id} className="bg-white p-4 rounded shadow">
              <p>
                <strong>Student:</strong> {c.student?.name} ({c.student?.email})
              </p>
              <p>
                <strong>Venue:</strong> {c.venue}
              </p>
              <p>
                <strong>Room:</strong> {c.roomNumber}
              </p>
              <p>
                <strong>Type:</strong> {c.type}
              </p>
              <p>
                <strong>Description:</strong> {c.description}
              </p>
              <p>
                <strong>Status:</strong>{" "}
                <span
                  className={`${
                    c.status === "Pending"
                      ? "text-yellow-600"
                      : c.status === "In Progress"
                      ? "text-blue-600"
                      : "text-green-600"
                  }`}
                >
                  {c.status}
                </span>
              </p>

              {/* Status Update Dropdown */}
              <div className="mt-3">
                <select
                  defaultValue={c.status}
                  onChange={(e) => updateStatus(c._id, e.target.value)}
                  className="p-2 border rounded"
                >
                  <option value="Pending">Pending</option>
                  <option value="In Progress">In Progress</option>
                  <option value="Completed">Completed</option>
                </select>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
