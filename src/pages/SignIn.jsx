import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function SignIn() {
  const [form, setForm] = useState({
    email: "",
    password: "",
  });

  const navigate = useNavigate();

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleLogin = async (e) => {
    e.preventDefault();

    if (!form.email || !form.password) {
      return alert("Please fill all fields");
    }

    try {
      const res = await fetch("https://career-connect-lk0b.onrender.com/api/auth/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(form),
      });

      // 🔥 safer parsing (prevents crash)
      const text = await res.text();
      let data;

      try {
        data = JSON.parse(text);
      } catch {
        data = text;
      }

      if (res.ok && data && data.name) {
        localStorage.setItem("user", data.name);
        navigate("/events");
        window.location.reload();
      } else {
        alert(data || "Invalid credentials");
      }

    } catch (error) {
      console.error("Login error:", error);
      alert("Server not reachable");
    }
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-50">

      <form
        onSubmit={handleLogin}
        className="bg-white p-8 rounded-lg shadow w-80"
      >

        <h2 className="text-2xl font-bold mb-6 text-center">
          Sign In
        </h2>

        {/* EMAIL */}
        <input
          type="email"
          name="email"
          placeholder="Enter your email"
          className="w-full p-3 border rounded mb-3"
          value={form.email}
          onChange={handleChange}
          autoFocus
        />

        {/* PASSWORD */}
        <input
          type="password"
          name="password"
          placeholder="Enter your password"
          className="w-full p-3 border rounded mb-4"
          value={form.password}
          onChange={handleChange}
        />

        <button
          type="submit"
          className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700 transition"
        >
          Sign In
        </button>

      </form>

    </div>
  );
}