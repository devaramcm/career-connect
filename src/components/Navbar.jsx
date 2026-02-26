import { Link, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [user, setUser] = useState(null);

  const navigate = useNavigate();

  // 📜 Scroll effect
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // 👤 Get user from localStorage
  useEffect(() => {
    const storedUser = localStorage.getItem("user");
    setUser(storedUser);
  }, []);

  // 🚪 Logout
  const handleLogout = () => {
    localStorage.removeItem("user");
    setUser(null);
    navigate("/");
  };

  return (
    <div
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        scrolled
          ? "bg-white/70 backdrop-blur-md shadow"
          : "bg-white"
      }`}
    >
      <div className="flex justify-between items-center px-10 py-4">

        {/* LOGO */}
        <h1 className="text-xl font-bold text-blue-600">
          Career<span className="text-orange-500">Connect</span>
        </h1>

        {/* NAV LINKS */}
        <div className="space-x-6 hidden md:flex">
          <Link to="/" className="hover:text-orange-500">Home</Link>
          <Link to="/events" className="hover:text-orange-500">Events</Link>
          <Link to="/about" className="hover:text-orange-500">About</Link>
          <Link to="/resources" className="hover:text-orange-500">Resources</Link>
        </div>

        {/* RIGHT SIDE BUTTONS */}
        <div className="space-x-3 flex items-center">

          {user ? (
            <>
              {/* 👤 Dashboard */}
              <button
                onClick={() => navigate("/dashboard")}
                className="px-4 py-2 border rounded"
              >
                Dashboard
              </button>

              {/* 🚪 Logout */}
              <button
                onClick={handleLogout}
                className="px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600"
              >
                Logout
              </button>
            </>
          ) : (
            <>
              {/* 🔑 Sign In */}
              <button
                onClick={() => navigate("/signin")}
                className="px-4 py-2 border rounded"
              >
                Sign In
              </button>

              {/* 📝 Register */}
              <button
                onClick={() => alert("Registration coming soon")}
                className="px-4 py-2 bg-orange-500 text-white rounded hover:bg-orange-600 transition"
              >
                Register
              </button>
            </>
          )}

        </div>

      </div>
    </div>
  );
}