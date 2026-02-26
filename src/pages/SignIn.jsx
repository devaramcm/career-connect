import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function SignIn() {
  const [name, setName] = useState("");
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault(); // 🔥 prevents page reload

    if (name.trim() === "") return alert("Enter your name");

    localStorage.setItem("user", name.trim());

    navigate("/events");
    window.location.reload();
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-50">
      
      {/* FORM */}
      <form
        onSubmit={handleLogin} // 🔥 IMPORTANT
        className="bg-white p-8 rounded-lg shadow w-80"
      >

        <h2 className="text-2xl font-bold mb-6 text-center">Sign In</h2>

        <input
          type="text"
          placeholder="Enter your name"
          className="w-full p-3 border rounded mb-4"
          value={name}
          onChange={(e) => setName(e.target.value)}
          autoFocus
        />

        <button
          type="submit" // 🔥 IMPORTANT
          className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700"
        >
          Sign In
        </button>

      </form>

    </div>
  );
}