

// import React, { useState } from "react";
// import axios from "axios";
// import { useNavigate } from "react-router-dom";

// export default function Login() {
//   const [form, setForm] = useState({ email: "", password: "" });
//   const [error, setError] = useState("");
//   const navigate = useNavigate();

//   const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

// const handleSubmit = async (e) => {
//   e.preventDefault();
//   try {
//     const res = await axios.post("http://localhost:8081/auth/login", form);

//     // Save the full user object
//     localStorage.setItem("user", JSON.stringify({
//       id: res.data.id,
//       name: res.data.name,
//       email: res.data.email,
//       role: res.data.role
//     }));

//     localStorage.setItem("token", "dummy-token");
//     localStorage.setItem("role", res.data.role);

//     setError("");

//     if (res.data.role === "ADMIN") navigate("/add");
//     else if (res.data.role === "CUSTOMER") navigate("/book");
//     else if (res.data.role === "DRIVER") navigate("/driver");
//     else navigate("/dashboard");

//   } catch (err) {
//     setError("Invalid email or password");
//   }
// };

//   return (
//     <div className="flex justify-center items-center h-screen bg-gray-100">
//       <div className="w-96 bg-white shadow-xl p-6 rounded-xl">
//         <h2 className="text-2xl font-bold text-center mb-4">Login</h2>
//         {error && <p className="text-red-500 text-center">{error}</p>}
//         <form className="flex flex-col gap-4" onSubmit={handleSubmit}>
//           <input type="email" name="email" placeholder="Enter Email" className="border p-3 rounded" onChange={handleChange} required />
//           <input type="password" name="password" placeholder="Enter Password" className="border p-3 rounded" onChange={handleChange} required />
//           <button type="submit" className="bg-blue-600 text-white p-3 rounded hover:bg-blue-700">Login</button>
//         </form>
//       </div>
//     </div>
//   );
// }

import React, { useState } from "react";
import axios from "axios";
import { useNavigate, Link } from "react-router-dom";

export default function Login() {
  const [form, setForm] = useState({ email: "", password: "" });
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleChange = (e) =>
    setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post("http://localhost:8081/auth/login", form);

      localStorage.setItem(
        "user",
        JSON.stringify({
          id: res.data.id,
          name: res.data.name,
          email: res.data.email,
          role: res.data.role,
        })
      );

      localStorage.setItem("token", "dummy-token");
      localStorage.setItem("role", res.data.role);

      setError("");

      if (res.data.role === "ADMIN") navigate("/add");
      else if (res.data.role === "CUSTOMER") navigate("/book");
      else if (res.data.role === "DRIVER") navigate("/driver");
      else navigate("/dashboard");
    } catch (err) {
      setError("Invalid email or password");
    }
  };

  return (
    <div className="h-screen flex justify-center items-center bg-gradient-to-r from-blue-600 via-purple-600 to-pink-500 p-4">
      
      <div className="w-96 bg-white/20 backdrop-blur-xl shadow-2xl p-8 rounded-2xl text-white border border-white/30 animate-fadeIn">
        
        <h2 className="text-3xl font-extrabold text-center mb-6">
          Welcome Back 👋
        </h2>

        {error && (
          <p className="text-red-300 text-center font-semibold mb-3">{error}</p>
        )}

        <form className="flex flex-col gap-5" onSubmit={handleSubmit}>
          
          <div>
            <label className="text-sm font-semibold">Email</label>
            <input
              type="email"
              name="email"
              placeholder="example@email.com"
              className="border border-white/40 bg-white/20 placeholder-white/70 text-white p-3 rounded-lg w-full focus:outline-none focus:ring-2 focus:ring-pink-300 transition"
              onChange={handleChange}
              required
            />
          </div>

          <div>
            <label className="text-sm font-semibold">Password</label>
            <input
              type="password"
              name="password"
              placeholder="********"
              className="border border-white/40 bg-white/20 placeholder-white/70 text-white p-3 rounded-lg w-full focus:outline-none focus:ring-2 focus:ring-purple-300 transition"
              onChange={handleChange}
              required
            />
          </div>

          <button
            type="submit"
            className="bg-white text-blue-700 font-bold p-3 rounded-lg hover:bg-blue-100 transition-all shadow-lg hover:scale-[1.03]"
          >
            Login
          </button>
        </form>

        {/* Signup Navigation */}
        <p className="mt-5 text-center text-white/90">
          Don’t have an account?{" "}
          <Link
            to="/signup"
            className="font-bold underline hover:text-yellow-200 transition"
          >
            Create one
          </Link>
        </p>
      </div>
    </div>
  );
}
