// // import React, { useState } from "react";
// // import { motion } from "framer-motion";

// // function Login() {
// //   const [email, setEmail] = useState("");
// //   const [password, setPassword] = useState("");

// //   const handleSubmit = (e) => {
// //     e.preventDefault();
// //     console.log("Email:", email, "Password:", password);
// //   };

// //   return (
// //     <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-900 via-indigo-900 to-black">
// //       <motion.div
// //         initial={{ opacity: 0, y: 50 }}
// //         animate={{ opacity: 1, y: 0 }}
// //         transition={{ duration: 0.8 }}
// //         className="bg-white/10 backdrop-blur-lg border border-white/20 rounded-2xl shadow-2xl p-8 w-[22rem]"
// //       >
// //         {/* Header */}
// //         <div className="text-center mb-8">
         
// //           <h2 className="text-3xl font-semibold text-white">
// //             Welcome Back
// //           </h2>
// //           <p className="text-indigo-300 text-sm">
// //             Sign in to continue your journey with <span className="font-semibold">NeuroFleetX</span>
// //           </p>
// //         </div>

// //         {/* Form */}
// //         <form onSubmit={handleSubmit} className="space-y-6">
// //           <div>
// //             <label className="block text-sm text-gray-300 mb-2">Email</label>
// //             <input
// //               type="email"
// //               placeholder="Enter your email"
// //               value={email}
// //               onChange={(e) => setEmail(e.target.value)}
// //               className="w-full px-4 py-2 rounded-lg bg-white/20 text-white placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-400 transition duration-200"
// //             />
// //           </div>

// //           <div>
// //             <label className="block text-sm text-gray-300 mb-2">Password</label>
// //             <input
// //               type="password"
// //               placeholder="Enter your password"
// //               value={password}
// //               onChange={(e) => setPassword(e.target.value)}
// //               className="w-full px-4 py-2 rounded-lg bg-white/20 text-white placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-400 transition duration-200"
// //             />
// //           </div>

// //           <button
// //             type="submit"
// //             className="w-full py-2 rounded-lg bg-indigo-500 hover:bg-indigo-600 text-white font-semibold tracking-wide transition-all duration-300 shadow-md hover:shadow-indigo-500/50"
// //           >
// //             Login
// //           </button>
// //         </form>

// //         {/* Footer */}
// //         <div className="text-center mt-6 text-gray-400 text-sm">
// //           Don’t have an account?{" "}
// //           <a href="/register" className="text-indigo-400 hover:text-indigo-300">
// //             Sign up
// //           </a>
// //         </div>
// //       </motion.div>
// //     </div>
// //   );
// // }

// // export default Login;



// import React, { useState } from "react";
// import axios from "axios";

// export default function Login() {
//   const [form, setForm] = useState({
//     email: "",
//     password: "",
//   });

//   const [error, setError] = useState("");

//   const handleChange = (e) => {
//     setForm({ ...form, [e.target.name]: e.target.value });
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();

//     try {
//       const res = await axios.post(
//         "http://localhost:8081/auth/login",
//         form
//       );

//       // Save token if backend returns it
//       localStorage.setItem("token", res.data.token);

//       alert("Login Successful!");
//       setError("");

//       window.location.href = "/dashboard"; // redirect
//     } catch (err) {
//       setError("Invalid email or password");
//     }
//   };

//   return (
//     <div className="flex justify-center items-center h-screen bg-gray-100">

//       <div className="w-96 bg-white shadow-xl p-6 rounded-xl">
//         <h2 className="text-2xl font-bold text-center mb-4">Login</h2>

//         {error && <p className="text-red-500 text-center">{error}</p>}

//         <form className="flex flex-col gap-4" onSubmit={handleSubmit}>

//           <input
//             type="email"
//             name="email"
//             placeholder="Enter Email"
//             className="border p-3 rounded"
//             onChange={handleChange}
//             required
//           />

//           <input
//             type="password"
//             name="password"
//             placeholder="Enter Password"
//             className="border p-3 rounded"
//             onChange={handleChange}
//             required
//           />

//           <button
//             type="submit"
//             className="bg-blue-600 text-white p-3 rounded hover:bg-blue-700"
//           >
//             Login
//           </button>

//         </form>
//       </div>
//     </div>
//   );
// }
