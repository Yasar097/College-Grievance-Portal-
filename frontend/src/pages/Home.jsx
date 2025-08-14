import { Link } from "react-router-dom";

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center min-h-[80vh] text-center">
      <h1 className="text-4xl font-bold mb-6">College Complaint Portal</h1>
      <p className="mb-8 text-gray-600">Please choose your role to continue</p>

      <div className="flex flex-wrap gap-6">
        {/* Student Box */}
        <div className="bg-white p-6 rounded-lg shadow-md w-60">
          <h2 className="text-xl font-semibold mb-4">Student</h2>
          <Link
            to="/student/login"
            className="block bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
          >
            Login
          </Link>
          <Link
            to="/student/register"
            className="block mt-2 bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600"
          >
            Register
          </Link>
        </div>

        {/* Admin Box */}
        <div className="bg-white p-6 rounded-lg shadow-md w-60">
          <h2 className="text-xl font-semibold mb-4">Admin</h2>
          <Link
            to="/admin/login"
            className="block bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
          >
            Login
          </Link>
          <Link
            to="/admin/register"
            className="block mt-2 bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600"
          >
            Register
          </Link>
        </div>
      </div>
    </div>
  );
}
