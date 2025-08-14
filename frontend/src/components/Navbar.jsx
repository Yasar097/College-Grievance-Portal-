import { Link, useLocation } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

export default function Navbar() {
  const { user, logout } = useAuth();
  const loc = useLocation();

  return (
    <nav className="bg-white border-b">
      <div className="max-w-6xl mx-auto px-4 py-3 flex items-center justify-between">
        <Link to="/" className="text-lg font-semibold text-blue-600">
          College Complaint Portal
        </Link>

        <div className="flex items-center gap-3">
          {!user && (
            <>
              <Link to="/student/login" className="px-3 py-1.5 rounded hover:bg-gray-100">
                Student Login
              </Link>
              <Link to="/admin/login" className="px-3 py-1.5 rounded hover:bg-gray-100">
                Admin Login
              </Link>
            </>
          )}

          {user && (
            <>
              <span className="text-sm text-gray-600">
                {user.name} • <span className="uppercase">{user.role}</span>
              </span>
              <Link
                to={user.role === "admin" ? "/admin/dashboard" : "/student/dashboard"}
                className="px-3 py-1.5 rounded bg-blue-600 text-white hover:bg-blue-700"
              >
                Dashboard
              </Link>
              <button
                onClick={logout}
                className="px-3 py-1.5 rounded border hover:bg-gray-50"
              >
                Logout
              </button>
            </>
          )}
        </div>
      </div>

      {/* simple breadcrumb-ish secondary bar */}
      <div className="bg-gray-50 border-t">
        <div className="max-w-6xl mx-auto px-4 py-2 text-sm text-gray-500 truncate">
          {loc.pathname}
        </div>
      </div>
    </nav>
  );
}
