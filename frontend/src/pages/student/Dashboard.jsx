import { useState, useEffect } from "react";

export default function StudentDashboard() {
  const [form, setForm] = useState({
    venue: "",
    roomNumber: "",
    type: "",
    description: "",
  });
  const [complaints, setComplaints] = useState([]);
  const token = localStorage.getItem("token");

  // Fetch complaints on load
  useEffect(() => {
    fetch("http://localhost:5000/api/complaints/my", {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    })
      .then((res) => res.json())
      .then((data) => setComplaints(data))
      .catch((err) => console.error(err));
  }, [token]);

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const res = await fetch("http://localhost:5000/api/complaints", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify(form),
    });

    const data = await res.json();
    if (res.ok) {
      alert("Complaint submitted successfully!");
      setComplaints((prev) => [...prev, data]);
      setForm({
        venue: "",
        roomNumber: "",
        type: "",
        description: "",
      });
    } else {
      alert(data.message || "Error submitting complaint");
    }
  };

  return (
    <div>
      <h1 className="text-2xl font-bold mb-6">Student Dashboard</h1>

      {/* Complaint Form */}
      <form
        onSubmit={handleSubmit}
        className="bg-white p-6 rounded shadow mb-8"
      >
        <div className="mb-4">
          <input
            type="text"
            name="venue"
            value={form.venue}
            onChange={handleChange}
            placeholder="Venue (e.g. Hostel Room, Classroom)"
            className="w-full p-2 border rounded"
            required
          />
        </div>

        <div className="mb-4">
          <input
            type="text"
            name="roomNumber"
            value={form.roomNumber}
            onChange={handleChange}
            placeholder="Room Number"
            className="w-full p-2 border rounded"
            required
          />
        </div>

        <div className="mb-4">
          <select
            name="type"
            value={form.type}
            onChange={handleChange}
            className="w-full p-2 border rounded"
            required
          >
            <option value="">Type of Complaint</option>
            <option value="plumber">Plumber</option>
            <option value="maid">Maid</option>
            <option value="carpenter">Carpenter</option>
            <option value="electrician">Electrician</option>
          </select>
        </div>

        <div className="mb-4">
          <textarea
            name="description"
            value={form.description}
            onChange={handleChange}
            placeholder="Describe the issue"
            className="w-full p-2 border rounded"
            required
          />
        </div>

        <button
          type="submit"
          className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
        >
          Submit Complaint
        </button>
      </form>

      {/* Complaint History */}
      <h2 className="text-xl font-semibold mb-4">My Complaints</h2>
      <div className="space-y-4">
        {complaints.length > 0 ? (
          complaints.map((c) => (
            <div key={c._id} className="bg-white p-4 rounded shadow">
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
            </div>
          ))
        ) : (
          <p>No complaints submitted yet.</p>
        )}
      </div>
    </div>
  );
}
