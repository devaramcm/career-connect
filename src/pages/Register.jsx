import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Register() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    password: "",
  });

  const navigate = useNavigate();

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleRegister = async (e) => {
    e.preventDefault();

    if (!form.name || !form.email || !form.password) {
      return alert("Please fill all fields");
    }

    try {
      const res = await fetch("http://localhost:5000/api/auth/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(form),
      });

      const text = await res.text();
      let data;

      try {
        data = JSON.parse(text);
      } catch {
        data = text;
      }

      if (res.ok) {
        alert(data.message || "Registered successfully!");
        navigate("/signin");
      } else {
        alert(data || "Registration failed");
      }

    } catch (error) {
      console.error("Register error:", error);
      alert("Server not reachable");
    }
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-50">

      <form
        onSubmit={handleRegister}
        className="bg-white p-8 rounded-lg shadow w-80"
      >

        <h2 className="text-2xl font-bold mb-6 text-center">
          Register
        </h2>

        {/* NAME */}
        <input
          type="text"
          name="name"
          placeholder="Enter your name"
          className="w-full p-3 border rounded mb-3"
          value={form.name}
          onChange={handleChange}
          autoFocus
        />

        {/* EMAIL */}
        <input
          type="email"
          name="email"
          placeholder="Enter your email"
          className="w-full p-3 border rounded mb-3"
          value={form.email}
          onChange={handleChange}
        />

        {/* PASSWORD */}
        <input
          type="password"
          name="password"
          placeholder="Create a password"
          className="w-full p-3 border rounded mb-4"
          value={form.password}
          onChange={handleChange}
        />

        <button
          type="submit"
          className="w-full bg-orange-500 text-white py-2 rounded hover:bg-orange-600 transition"
        >
          Register
        </button>

      </form>

    </div>
  );
}