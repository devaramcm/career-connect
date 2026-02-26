import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function SignIn() {
  const [name, setName] = useState("");
  const navigate = useNavigate();

  const handleLogin = () => {
    if (name.trim() === "") return alert("Enter your name");

    // Save user (temporary)
    localStorage.setItem("user", name);

    // Go to dashboard
    navigate("/events");
    window.location.reload();
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-50">
      <div className="bg-white p-8 rounded-lg shadow w-80">

        <h2 className="text-2xl font-bold mb-6 text-center">Sign In</h2>

        <input
          type="text"
          placeholder="Enter your name"
          className="w-full p-3 border rounded mb-4"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />

        <button
          onClick={handleLogin}
          className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700"
        >
          Sign In
        </button>

      </div>
    </div>
  );
}