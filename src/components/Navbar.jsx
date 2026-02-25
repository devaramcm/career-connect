import { Link } from "react-router-dom";
import { useState, useEffect } from "react";


export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50); // trigger after scroll
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        scrolled
          ? "bg-white/70 backdrop-blur-md shadow"
          : "bg-white"
      }`}
    >
      <div className="flex justify-between items-center px-10 py-4">

        <h1 className="text-xl font-bold text-blue-600">
          Career<span className="text-orange-500">Connect</span>
        </h1>

        <div className="space-x-6 hidden md:flex">
          <Link to="/" className="hover:text-orange-500">Home</Link>
          <Link to="/events" className="hover:text-orange-500">Events</Link>
          <Link to="/about" className="hover:text-orange-500">About</Link>
          <Link to="/resources" className="hover:text-orange-500">Resources</Link>
        </div>

        <div className="space-x-3">
          <button className="px-4 py-2 border rounded">Sign In</button>
          <button className="px-4 py-2 bg-orange-500 text-white rounded">
            Register
          </button>
        </div>

      </div>
    </div>
  );
}