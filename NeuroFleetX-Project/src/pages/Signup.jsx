// import React, { useState } from "react";
// import axios from "axios";

// export default function Signup() {
//   const [form, setForm] = useState({
//     name: "",
//     email: "",
//     password: "",
//     role: "ADMIN", // ADMIN / DRIVER / CUSTOMER
//   });

//   const [error, setError] = useState("");
//   const [success, setSuccess] = useState("");

//   const handleChange = (e) => {
//     setForm({ ...form, [e.target.name]: e.target.value });
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();

//     try {
//       await axios.post("http://localhost:8081/auth/signup", form);
//       setSuccess("Account created successfully! Please login.");
//       setError("");
      
//       setForm({ name: "", email: "", password: "", role: "ADMIN" });

//       // Auto redirect after signup
//       setTimeout(() => {
//         window.location.href = "/login";
//       }, 1500);

//     } catch (err) {
//       console.error(err.response?.data);
//       setError(err.response?.data?.message || "Failed to register. Email may already exist.");
//     }
//   };

//   return (
//     <div className="flex justify-center items-center h-screen bg-gray-100">
//       <div className="w-96 bg-white shadow-xl p-6 rounded-xl">
//         <h2 className="text-2xl font-bold text-center mb-4">Create Account</h2>

//         {error && <p className="text-red-500 text-center">{error}</p>}
//         {success && <p className="text-green-600 text-center">{success}</p>}

//         <form className="flex flex-col gap-4" onSubmit={handleSubmit}>
//           <input
//             type="text"
//             name="name"
//             placeholder="Full Name"
//             value={form.name}
//             className="border p-3 rounded"
//             onChange={handleChange}
//             required
//             autoComplete="name"
//           />

//           <input
//             type="email"
//             name="email"
//             placeholder="Email Address"
//             value={form.email}
//             className="border p-3 rounded"
//             onChange={handleChange}
//             required
//             autoComplete="username"
//           />

//           <input
//             type="password"
//             name="password"
//             placeholder="Password"
//             value={form.password}
//             className="border p-3 rounded"
//             onChange={handleChange}
//             required
//             autoComplete="current-password"
//           />

//           {/* Role Dropdown */}
//           <select
//             name="role"
//             value={form.role}
//             onChange={handleChange}
//             className="border p-3 rounded"
//           >
//             <option value="ADMIN">Admin</option>
//             <option value="DRIVER">Driver</option>
//             <option value="CUSTOMER">Customer</option>
//           </select>

//           <button
//             type="submit"
//             className="bg-green-600 text-white p-3 rounded hover:bg-green-700"
//           >
//             Sign Up
//           </button>
//         </form>
//       </div>
//     </div>
//   );
// }

// import React, { useState } from "react";
// import axios from "axios";

// export default function Signup() {
//   const [form, setForm] = useState({
//     name: "",
//     email: "",
//     password: "",
//     role: "CUSTOMER",
//   });

//   const [error, setError] = useState("");
//   const [success, setSuccess] = useState("");

//   const handleChange = (e) => {
//     setForm({ ...form, [e.target.name]: e.target.value });
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();

//     try {
//       await axios.post("http://localhost:8081/auth/signup", form);
//       setSuccess("Account created successfully! Please login.");
//       setError("");

//       setTimeout(() => {
//         window.location.href = "/login";
//       }, 1500);

//       setForm({
//         name: "",
//         email: "",
//         password: "",
//         role: "CUSTOMER",
//       });
//     } catch (err) {
//       console.error(err.response?.data);
//       setError(
//         err.response?.data?.message ||
//           "Failed to register. Email may already exist."
//       );
//     }
//   };

//   return (
//     <div className="min-h-screen flex items-center justify-center bg-gray-100 px-4">
//       <div className="bg-white shadow-xl p-8 rounded-xl w-full max-w-md">

//         <h2 className="text-3xl font-bold text-center mb-2 text-gray-800">
//           Create Account
//         </h2>
//         <p className="text-center text-gray-500 mb-6">
//           Sign up to continue
//         </p>

//         {error && (
//           <p className="text-red-500 text-center font-medium mb-2">{error}</p>
//         )}
//         {success && (
//           <p className="text-green-600 text-center font-medium mb-2">
//             {success}
//           </p>
//         )}

//         <form className="flex flex-col gap-4" onSubmit={handleSubmit}>
          
//           {/* Name */}
//           <input
//             type="text"
//             name="name"
//             placeholder="Full Name"
//             value={form.name}
//             onChange={handleChange}
//             className="w-full border rounded-lg p-3 text-gray-700 focus:outline-none focus:ring-2 focus:ring-green-500"
//             required
//           />

//           {/* Email */}
//           <input
//             type="email"
//             name="email"
//             placeholder="Email Address"
//             value={form.email}
//             onChange={handleChange}
//             className="w-full border rounded-lg p-3 text-gray-700 focus:outline-none focus:ring-2 focus:ring-green-500"
//             required
//           />

//           {/* Password */}
//           <input
//             type="password"
//             name="password"
//             placeholder="Password"
//             value={form.password}
//             onChange={handleChange}
//             className="w-full border rounded-lg p-3 text-gray-700 focus:outline-none focus:ring-2 focus:ring-green-500"
//             required
//           />

//           {/* Role */}
//           <select
//             name="role"
//             value={form.role}
//             onChange={handleChange}
//             className="w-full border rounded-lg p-3 text-gray-700 focus:outline-none focus:ring-2 focus:ring-green-500"
//           >
//             <option value="ADMIN">Admin</option>
//             <option value="DRIVER">Driver</option>
//             <option value="CUSTOMER">Customer</option>
//           </select>

//           {/* Button */}
//           <button
//             type="submit"
//             className="bg-green-600 text-white p-3 rounded-lg mt-2 hover:bg-green-700 transition-all font-semibold"
//           >
//             Create Account
//           </button>

//           <p className="text-center text-gray-600 mt-2">
//             Already have an account?{" "}
//             <span
//               className="text-green-600 font-medium cursor-pointer hover:underline"
//               onClick={() => (window.location.href = "/login")}
//             >
//               Login
//             </span>
//           </p>
//         </form>
//       </div>
//     </div>
//   );
// }


import React, { useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

export default function Signup() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    password: "",
    role: "ADMIN",
  });

  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post("http://localhost:8081/auth/signup", form);

      setSuccess("Account created successfully! Redirecting...");
      setError("");

      setTimeout(() => {
        window.location.href = "/login";
      }, 1500);

    } catch (err) {
      setError(err.response?.data?.message || "Failed to register.");
    }
  };

  return (
    <div className="min-h-screen flex justify-center items-center bg-gradient-to-r from-blue-600 via-purple-600 to-pink-500 p-4">
      <div className="bg-white/20 backdrop-blur-xl border border-white/30 shadow-2xl w-full max-w-md p-8 rounded-2xl text-white">

        <h2 className="text-3xl font-extrabold text-center mb-6 tracking-wide">
          Create Your Account
        </h2>

        {error && <p className="text-red-300 text-center font-semibold">{error}</p>}
        {success && <p className="text-green-300 text-center font-semibold">{success}</p>}

        <form onSubmit={handleSubmit} className="flex flex-col gap-4 mt-4">

          <input
            type="text"
            name="name"
            value={form.name}
            onChange={handleChange}
            placeholder="Full Name"
            className="p-3 rounded-lg bg-white/20 border border-white/40 placeholder-white/70 text-white focus:ring-2 focus:ring-pink-300 outline-none"
            required
          />

          <input
            type="email"
            name="email"
            value={form.email}
            onChange={handleChange}
            placeholder="Email Address"
            className="p-3 rounded-lg bg-white/20 border border-white/40 placeholder-white/70 text-white focus:ring-2 focus:ring-pink-300 outline-none"
            required
          />

          <input
            type="password"
            name="password"
            value={form.password}
            onChange={handleChange}
            placeholder="Password"
            className="p-3 rounded-lg bg-white/20 border border-white/40 placeholder-white/70 text-white focus:ring-2 focus:ring-pink-300 outline-none"
            required
          />

          <select
            name="role"
            value={form.role}
            onChange={handleChange}
            className="p-3 rounded-lg bg-white/20 border border-white/40 text-white focus:ring-2 focus:ring-pink-300 outline-none cursor-pointer"
          >
            <option className="text-black" value="ADMIN">Admin</option>
            <option className="text-black" value="DRIVER">Driver</option>
            <option className="text-black" value="CUSTOMER">Customer</option>
          </select>

          <button
            type="submit"
            className="mt-3 bg-white text-blue-600 font-bold py-3 rounded-lg shadow-lg hover:bg-gray-100 transition-all"
          >
            Sign Up
          </button>

          <p className="text-center text-white/80 mt-2">
            Already have an account?{" "}
            <Link to="/login" className="text-yellow-300 underline hover:text-yellow-200">
              Login Here
            </Link>
          </p>
        </form>
      </div>
    </div>
  );
}
