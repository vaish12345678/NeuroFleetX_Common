// import React from "react";
// import {
//   BarChart,
//   Bar,
//   XAxis,
//   YAxis,
//   CartesianGrid,
//   Tooltip,
//   ResponsiveContainer,
//   LineChart,
//   Line,
//   PieChart,
//   Pie,
//   Cell,
// } from "recharts";
// import { motion } from "framer-motion";
// import { Brain, TrendingUp, Zap } from "lucide-react";

// const barData = [
//   { type: "Bus", fuelConsumption: 12 },
//   { type: "Truck", fuelConsumption: 8.5 },
//   { type: "Taxi", fuelConsumption: 6 },
//   { type: "EV", fuelConsumption: 0 },
// ];

// const lineData = [
//   { month: "Jan", fuel: 220 },
//   { month: "Feb", fuel: 190 },
//   { month: "Mar", fuel: 250 },
//   { month: "Apr", fuel: 200 },
//   { month: "May", fuel: 270 },
//   { month: "Jun", fuel: 230 },
// ];

// const COLORS = ["#6366f1", "#8b5cf6", "#3b82f6", "#14b8a6"];

// export default function AnalyticsSection() {
//   return (
//     <div className="min-h-screen bg-gradient-to-br from-indigo-50 via-blue-50 to-white p-10">
//       <motion.h2
//         initial={{ opacity: 0, y: 20 }}
//         animate={{ opacity: 1, y: 0 }}
//         transition={{ duration: 0.6 }}
//         className="text-4xl font-extrabold text-center mb-10 bg-gradient-to-r from-indigo-700 to-blue-600 bg-clip-text text-transparent"
//       >
//         ⚙️ Fleet Performance & AI Insights
//       </motion.h2>

//       {/* Charts Grid */}
//       <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
//         {/* Fuel by Vehicle Type */}
//         <motion.div
//           initial={{ opacity: 0, y: 30 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.6 }}
//           className="bg-white rounded-2xl shadow-xl p-6 border border-indigo-100 hover:shadow-2xl transition-all"
//         >
//           <h3 className="text-xl font-semibold text-indigo-700 mb-4 flex items-center gap-2">
//             <Zap className="text-yellow-400" />
//             Fuel Efficiency by Type
//           </h3>
//           <ResponsiveContainer width="100%" height={250}>
//             <BarChart data={barData}>
//               <CartesianGrid strokeDasharray="3 3" stroke="#e0e7ff" />
//               <XAxis dataKey="type" />
//               <YAxis />
//               <Tooltip />
//               <Bar dataKey="fuelConsumption" radius={10}>
//                 {barData.map((_, index) => (
//                   <Cell key={index} fill={COLORS[index % COLORS.length]} />
//                 ))}
//               </Bar>
//             </BarChart>
//           </ResponsiveContainer>
//         </motion.div>

//         {/* Monthly Fuel Trends */}
//         <motion.div
//           initial={{ opacity: 0, y: 30 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.8 }}
//           className="bg-white rounded-2xl shadow-xl p-6 border border-indigo-100 hover:shadow-2xl transition-all"
//         >
//           <h3 className="text-xl font-semibold text-indigo-700 mb-4 flex items-center gap-2">
//             <TrendingUp className="text-green-500" />
//             Monthly Fuel Usage Trend
//           </h3>
//           <ResponsiveContainer width="100%" height={250}>
//             <LineChart data={lineData}>
//               <CartesianGrid strokeDasharray="3 3" stroke="#e0e7ff" />
//               <XAxis dataKey="month" />
//               <YAxis />
//               <Tooltip />
//               <Line
//                 type="monotone"
//                 dataKey="fuel"
//                 stroke="#6366f1"
//                 strokeWidth={3}
//                 dot={{ fill: "#6366f1", r: 5 }}
//               />
//             </LineChart>
//           </ResponsiveContainer>
//         </motion.div>

//         {/* Fleet Composition */}
//         <motion.div
//           initial={{ opacity: 0, y: 30 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ duration: 1 }}
//           className="bg-white rounded-2xl shadow-xl p-6 border border-indigo-100 hover:shadow-2xl transition-all"
//         >
//           <h3 className="text-xl font-semibold text-indigo-700 mb-4 flex items-center gap-2">
//             <Brain className="text-indigo-500" />
//             Fleet Composition
//           </h3>
//           <ResponsiveContainer width="100%" height={250}>
//             <PieChart>
//               <Pie
//                 data={barData}
//                 dataKey="fuelConsumption"
//                 nameKey="type"
//                 cx="50%"
//                 cy="50%"
//                 outerRadius={80}
//                 fill="#8884d8"
//                 label
//               >
//                 {barData.map((_, index) => (
//                   <Cell key={index} fill={COLORS[index % COLORS.length]} />
//                 ))}
//               </Pie>
//               <Tooltip />
//             </PieChart>
//           </ResponsiveContainer>
//         </motion.div>
//       </div>

//       {/* AI Insights Section */}
//       <motion.div
//         initial={{ opacity: 0, y: 40 }}
//         animate={{ opacity: 1, y: 0 }}
//         transition={{ duration: 1 }}
//         className="mt-12 bg-gradient-to-r from-indigo-600 to-blue-500 text-white rounded-2xl shadow-2xl p-8"
//       >
//         <h3 className="text-2xl font-semibold mb-4 flex items-center gap-3">
//           <Brain className="text-yellow-300" />
//           AI-Driven Insights 🧠
//         </h3>
//         <ul className="space-y-3 text-base leading-relaxed">
//           <li>🔋 <strong>Truck MH12AB1234</strong> shows 20% higher fuel usage — maintenance recommended.</li>
//           <li>🧭 <strong>Bus MH142345</strong> could optimize route 2 for 8% fuel savings.</li>
//           <li>⚙️ Fleet efficiency improved by <strong>5.4%</strong> compared to last quarter.</li>
//           <li>🚗 EV adoption increased by <strong>18%</strong> this month — great sustainability impact!</li>
//         </ul>
//       </motion.div>
//     </div>
//   );
// }


// // import React, { useEffect, useState } from "react";
// // import axios from "axios";
// // import {
// //   BarChart,
// //   Bar,
// //   XAxis,
// //   YAxis,
// //   CartesianGrid,
// //   Tooltip,
// //   ResponsiveContainer,
// //   LineChart,
// //   Line,
// //   PieChart,
// //   Pie,
// //   Cell,
// // } from "recharts";
// // import { motion } from "framer-motion";
// // import { Brain, TrendingUp, Zap } from "lucide-react";

// // const COLORS = ["#6366f1", "#8b5cf6", "#3b82f6", "#14b8a6"];

// // export default function AnalyticsSection() {
// //   const [barData, setBarData] = useState([]);
// //   const [lineData, setLineData] = useState([]);
// //   const [aiInsights, setAiInsights] = useState([]);

// //   useEffect(() => {
// //     // Fetch Vehicle Data
// //     axios.get("/api/vehicles").then((res) => setBarData(res.data));

// //     // Fetch Monthly Fuel Trends
// //     axios.get("/api/fuel-trends").then((res) => setLineData(res.data));

// //     // Fetch AI Insights
// //     axios.get("/api/ai-insights").then((res) => setAiInsights(res.data));
// //   }, []);

// //   return (
// //     <div className="min-h-screen bg-gradient-to-br from-indigo-50 via-blue-50 to-white p-10">
// //       <motion.h2
// //         initial={{ opacity: 0, y: 20 }}
// //         animate={{ opacity: 1, y: 0 }}
// //         transition={{ duration: 0.6 }}
// //         className="text-4xl font-extrabold text-center mb-10 bg-gradient-to-r from-indigo-700 to-blue-600 bg-clip-text text-transparent"
// //       >
// //         ⚙️ Fleet Performance & AI Insights
// //       </motion.h2>

// //       {/* Charts Grid */}
// //       <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
// //         {/* Fuel by Vehicle Type */}
// //         <motion.div
// //           initial={{ opacity: 0, y: 30 }}
// //           animate={{ opacity: 1, y: 0 }}
// //           transition={{ duration: 0.6 }}
// //           className="bg-white rounded-2xl shadow-xl p-6 border border-indigo-100 hover:shadow-2xl transition-all"
// //         >
// //           <h3 className="text-xl font-semibold text-indigo-700 mb-4 flex items-center gap-2">
// //             <Zap className="text-yellow-400" />
// //             Fuel Efficiency by Type
// //           </h3>
// //           <ResponsiveContainer width="100%" height={250}>
// //             <BarChart data={barData}>
// //               <CartesianGrid strokeDasharray="3 3" stroke="#e0e7ff" />
// //               <XAxis dataKey="type" />
// //               <YAxis />
// //               <Tooltip />
// //               <Bar dataKey="fuelConsumption" radius={10}>
// //                 {barData.map((_, index) => (
// //                   <Cell key={index} fill={COLORS[index % COLORS.length]} />
// //                 ))}
// //               </Bar>
// //             </BarChart>
// //           </ResponsiveContainer>
// //         </motion.div>

// //         {/* Monthly Fuel Trends */}
// //         <motion.div
// //           initial={{ opacity: 0, y: 30 }}
// //           animate={{ opacity: 1, y: 0 }}
// //           transition={{ duration: 0.8 }}
// //           className="bg-white rounded-2xl shadow-xl p-6 border border-indigo-100 hover:shadow-2xl transition-all"
// //         >
// //           <h3 className="text-xl font-semibold text-indigo-700 mb-4 flex items-center gap-2">
// //             <TrendingUp className="text-green-500" />
// //             Monthly Fuel Usage Trend
// //           </h3>
// //           <ResponsiveContainer width="100%" height={250}>
// //             <LineChart data={lineData}>
// //               <CartesianGrid strokeDasharray="3 3" stroke="#e0e7ff" />
// //               <XAxis dataKey="month" />
// //               <YAxis />
// //               <Tooltip />
// //               <Line
// //                 type="monotone"
// //                 dataKey="fuel"
// //                 stroke="#6366f1"
// //                 strokeWidth={3}
// //                 dot={{ fill: "#6366f1", r: 5 }}
// //               />
// //             </LineChart>
// //           </ResponsiveContainer>
// //         </motion.div>

// //         {/* Fleet Composition */}
// //         <motion.div
// //           initial={{ opacity: 0, y: 30 }}
// //           animate={{ opacity: 1, y: 0 }}
// //           transition={{ duration: 1 }}
// //           className="bg-white rounded-2xl shadow-xl p-6 border border-indigo-100 hover:shadow-2xl transition-all"
// //         >
// //           <h3 className="text-xl font-semibold text-indigo-700 mb-4 flex items-center gap-2">
// //             <Brain className="text-indigo-500" />
// //             Fleet Composition
// //           </h3>
// //           <ResponsiveContainer width="100%" height={250}>
// //             <PieChart>
// //               <Pie
// //                 data={barData}
// //                 dataKey="fuelConsumption"
// //                 nameKey="type"
// //                 cx="50%"
// //                 cy="50%"
// //                 outerRadius={80}
// //                 label
// //               >
// //                 {barData.map((_, index) => (
// //                   <Cell key={index} fill={COLORS[index % COLORS.length]} />
// //                 ))}
// //               </Pie>
// //               <Tooltip />
// //             </PieChart>
// //           </ResponsiveContainer>
// //         </motion.div>
// //       </div>

// //       {/* AI Insights Section */}
// //       <motion.div
// //         initial={{ opacity: 0, y: 40 }}
// //         animate={{ opacity: 1, y: 0 }}
// //         transition={{ duration: 1 }}
// //         className="mt-12 bg-gradient-to-r from-indigo-600 to-blue-500 text-white rounded-2xl shadow-2xl p-8"
// //       >
// //         <h3 className="text-2xl font-semibold mb-4 flex items-center gap-3">
// //           <Brain className="text-yellow-300" />
// //           AI-Driven Insights 🧠
// //         </h3>
// //         <ul className="space-y-3 text-base leading-relaxed">
// //           {aiInsights.map((insight, idx) => (
// //             <li key={idx}>🔹 {insight}</li>
// //           ))}
// //         </ul>
// //       </motion.div>
// //     </div>
// //   );
// // }


import AdminBookings from "../pages/AdminBookings"
import DriverTrips from "../pages/DriverTrips"
import CustomerBooking from "../pages/Booking";

const Dashboard = () => {
  const user = JSON.parse(localStorage.getItem("user"));  
  const role = user?.role;

  if (!role) return <h2>No role detected</h2>;

  if (role === "ADMIN") return <AdminBookings />;
  if (role === "DRIVER") return <DriverTrips driverId={user.id} />;
  if (role === "CUSTOMER") return <CustomerBooking />;

  return <h2>Invalid role</h2>;
};

export default Dashboard;
