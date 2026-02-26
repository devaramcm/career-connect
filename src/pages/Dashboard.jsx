import { useNavigate } from "react-router-dom";

export default function Dashboard() {
  const navigate = useNavigate();
  const user = localStorage.getItem("user");

  const handleLogout = () => {
    localStorage.removeItem("user");
    navigate("/");
    window.location.reload();
  };

  return (
    <div className="bg-gray-50 min-h-screen px-10 py-16">

      {/* HEADER */}
      <div className="mb-10">
        <h1 className="text-3xl font-bold">
          Welcome, {user || "User"} 👋
        </h1>
        <p className="text-gray-500 mt-2">
          Manage your profile and explore opportunities
        </p>
      </div>

      {/* STATS */}
      <div className="grid md:grid-cols-3 gap-6 mb-10">

        <div className="bg-white p-6 rounded-lg shadow hover:shadow-xl transition">
          <h2 className="text-2xl font-bold text-blue-600">5</h2>
          <p className="text-gray-500">Events Registered</p>
        </div>

        <div className="bg-white p-6 rounded-lg shadow hover:shadow-xl transition">
          <h2 className="text-2xl font-bold text-green-600">3</h2>
          <p className="text-gray-500">Interviews Scheduled</p>
        </div>

        <div className="bg-white p-6 rounded-lg shadow hover:shadow-xl transition">
          <h2 className="text-2xl font-bold text-orange-500">2</h2>
          <p className="text-gray-500">Offers Received</p>
        </div>

      </div>

      {/* ACTIONS */}
      <div className="mb-10 flex gap-4">
        <button
          onClick={() => navigate("/events")}
          className="bg-blue-600 text-white px-6 py-3 rounded hover:bg-blue-700 transition"
        >
          Browse Events
        </button>

        <button
          onClick={() => alert("Profile feature coming soon")}
          className="border px-6 py-3 rounded hover:bg-gray-100"
        >
          Edit Profile
        </button>
      </div>

      {/* UPCOMING EVENTS */}
      <div>
        <h2 className="text-2xl font-semibold mb-6">Upcoming Events</h2>

        <div className="grid md:grid-cols-3 gap-6">

          <div className="bg-white p-5 rounded-lg shadow hover:shadow-xl transition">
            <h3 className="font-semibold">Tech Expo 2026</h3>
            <p className="text-gray-500 mt-2">May 18 • San Francisco</p>
            <button className="mt-4 text-blue-600">View Details</button>
          </div>

          <div className="bg-white p-5 rounded-lg shadow hover:shadow-xl transition">
            <h3 className="font-semibold">Business Fair</h3>
            <p className="text-gray-500 mt-2">June 5 • New York</p>
            <button className="mt-4 text-blue-600">View Details</button>
          </div>

          <div className="bg-white p-5 rounded-lg shadow hover:shadow-xl transition">
            <h3 className="font-semibold">Startup Meetup</h3>
            <p className="text-gray-500 mt-2">August 15 • Bangalore</p>
            <button className="mt-4 text-blue-600">View Details</button>
          </div>

        </div>
      </div>

      {/* LOGOUT */}
      <div className="mt-12">
        <button
          onClick={handleLogout}
          className="bg-red-500 text-white px-6 py-3 rounded hover:bg-red-600"
        >
          Logout
        </button>
      </div>

    </div>
  );
}