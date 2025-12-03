// import React, { useEffect, useState } from "react";
// import { getBookings } from "../api/bookingService";

// export default function BookingList() {
//   const [bookings, setBookings] = useState([]);

//   useEffect(() => {
//     getBookings().then((res) => setBookings(res.data));
//   }, []);

//   return (
//     <div className="max-w-4xl mx-auto mt-6">
//       <h2 className="text-xl font-bold mb-4">All Bookings</h2>
//       <table className="min-w-full border">
//         <thead>
//           <tr className="bg-gray-200">
//             <th className="border px-2 py-1">#</th>
//             <th className="border px-2 py-1">User</th>
//             <th className="border px-2 py-1">Vehicle</th>
//             <th className="border px-2 py-1">Source</th>
//             <th className="border px-2 py-1">Destination</th>
//             <th className="border px-2 py-1">Date</th>
//             <th className="border px-2 py-1">Status</th>
//           </tr>
//         </thead>
//         <tbody>
//           {bookings.map((b, i) => (
//             <tr key={b.id}>
//               <td className="border px-2 py-1">{i + 1}</td>
//               <td className="border px-2 py-1">{b.userName}</td>
//               <td className="border px-2 py-1">{b.vehicleNumber}</td>
//               <td className="border px-2 py-1">{b.source}</td>
//               <td className="border px-2 py-1">{b.destination}</td>
//               <td className="border px-2 py-1">{b.date}</td>
//               <td className="border px-2 py-1">{b.status}</td>
//             </tr>
//           ))}
//         </tbody>
//       </table>
//     </div>
//   );
// }

// import React, { useEffect, useState } from "react";
// import { getBookings } from "../api/bookingService";
// import { motion } from "framer-motion";

// export default function BookingList() {
//   const [bookings, setBookings] = useState([]);

//   useEffect(() => {
//     getBookings()
//       .then((res) => setBookings(res.data))
//       .catch((err) => console.error(err));
//   }, []);

//   return (
//     <div className="min-h-screen bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-100 p-6">
//       <motion.h2
//         initial={{ opacity: 0, y: -20 }}
//         animate={{ opacity: 1, y: 0 }}
//         transition={{ duration: 0.6 }}
//         className="text-3xl font-extrabold mb-8 text-center bg-gradient-to-r from-blue-700 via-indigo-600 to-purple-600 bg-clip-text text-transparent"
//       >
//         📋 All Bookings
//       </motion.h2>

//       <div className="overflow-x-auto max-w-6xl mx-auto">
//         <table className="min-w-full bg-white/90 backdrop-blur-xl rounded-3xl shadow-2xl border border-indigo-100 overflow-hidden">
//           <thead className="bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 text-white">
//             <tr>
//               <th className="py-3 px-4 font-semibold text-left">#</th>
//               <th className="py-3 px-4 font-semibold text-left">User</th>
//               <th className="py-3 px-4 font-semibold text-left">Vehicle</th>
//               <th className="py-3 px-4 font-semibold text-left">Source</th>
//               <th className="py-3 px-4 font-semibold text-left">Destination</th>
//               <th className="py-3 px-4 font-semibold text-left">Date</th>
//               <th className="py-3 px-4 font-semibold text-left">Status</th>
//             </tr>
//           </thead>
//           <tbody>
//             {bookings.length === 0 ? (
//               <tr>
//                 <td colSpan="7" className="text-center py-8 text-gray-500 italic">
//                   No bookings found 📭
//                 </td>
//               </tr>
//             ) : (
//               bookings.map((b, i) => (
//                 <motion.tr
//                   key={b.id}
//                   whileHover={{ scale: 1.02, backgroundColor: "#f0f4ff" }}
//                   transition={{ duration: 0.2 }}
//                   className={`border-b border-indigo-100 ${i % 2 === 0 ? "bg-white/80" : "bg-white/60"} transition-all`}
//                 >
//                   <td className="py-3 px-4">{i + 1}</td>
//                   <td className="py-3 px-4 font-medium text-indigo-700">{b.userName}</td>
//                   <td className="py-3 px-4">{b.vehicleNumber}</td>
//                   <td className="py-3 px-4">{b.source}</td>
//                   <td className="py-3 px-4">{b.destination}</td>
//                   <td className="py-3 px-4">{b.date}</td>
//                   <td className={`py-3 px-4 font-semibold ${
//                     b.status === "Pending"
//                       ? "text-yellow-600"
//                       : b.status === "Approved"
//                       ? "text-green-600"
//                       : "text-red-600"
//                   }`}>
//                     {b.status}
//                   </td>
//                 </motion.tr>
//               ))
//             )}
//           </tbody>
//         </table>
//       </div>
//     </div>
//   );
//  }

// import React, { useEffect, useState } from "react";
// import axios from "axios";
// import { motion } from "framer-motion";

// export default function BookingList() {
//   const [bookings, setBookings] = useState([]);

//   useEffect(() => {
//     fetchBookings();
//   }, []);

//   const fetchBookings = () => {
//     axios
//       .get("http://localhost:8081/bookings")
//       .then((res) => setBookings(res.data))
//       .catch((err) => console.error("Error fetching bookings:", err));
//   };

//   return (
//     <div className="min-h-screen bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-100 p-6">
//       <motion.h2
//         initial={{ opacity: 0, y: -20 }}
//         animate={{ opacity: 1, y: 0 }}
//         transition={{ duration: 0.6 }}
//         className="text-3xl font-extrabold mb-8 text-center bg-gradient-to-r from-blue-700 via-indigo-600 to-purple-600 bg-clip-text text-transparent"
//       >
//         📋 All Bookings
//       </motion.h2>

//       <div className="overflow-x-auto max-w-6xl mx-auto">
//         <table className="min-w-full bg-white/90 backdrop-blur-xl rounded-3xl shadow-2xl border border-indigo-100 overflow-hidden">
//           <thead className="bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 text-white">
//             <tr>
//               <th className="py-3 px-4 font-semibold text-left">#</th>
//               <th className="py-3 px-4 font-semibold text-left">User</th>
//               <th className="py-3 px-4 font-semibold text-left">Vehicle</th>
//               <th className="py-3 px-4 font-semibold text-left">Driver</th>
//               <th className="py-3 px-4 font-semibold text-left">From</th>
//               <th className="py-3 px-4 font-semibold text-left">To</th>
//               <th className="py-3 px-4 font-semibold text-left">Trip Time</th>
//               <th className="py-3 px-4 font-semibold text-left">Status</th>
//             </tr>
//           </thead>

//           <tbody>
//             {bookings.length === 0 ? (
//               <tr>
//                 <td colSpan="8" className="text-center py-8 text-gray-500 italic">
//                   No bookings found 📭
//                 </td>
//               </tr>
//             ) : (
//               bookings.map((b, i) => (
//                 <motion.tr
//                   key={b.id}
//                   whileHover={{ scale: 1.02, backgroundColor: "#f0f4ff" }}
//                   transition={{ duration: 0.2 }}
//                   className={`border-b border-indigo-100 ${
//                     i % 2 === 0 ? "bg-white/80" : "bg-white/60"
//                   } transition-all`}
//                 >
//                   <td className="py-3 px-4">{i + 1}</td>

//                   {/* User Name */}
//                <td className="py-3 px-4 font-medium text-indigo-700">
//   {b.user?.name || "Unknown User"}
// </td>


//                   {/* Vehicle */}
//                   <td className="py-3 px-4">
//                     {b.vehicle?.vehicleNumber || "Unknown Vehicle"}
//                   </td>

//                   {/* Driver (admin assigns later) */}
//                   <td className="py-3 px-4">
//                     {b.driver?.name || "Not Assigned"}
//                   </td>

//                   <td className="py-3 px-4">{b.fromLocation}</td>
//                   <td className="py-3 px-4">{b.toLocation}</td>

//                   {/* Trip Time */}
//                   <td className="py-3 px-4">
//                     {new Date(b.tripTime).toLocaleString()}
//                   </td>

//                   {/* STATUS (auto updates when admin assigns) */}
//                   <td
//                     className={`py-3 px-4 font-semibold ${
//                       b.status === "Pending"
//                         ? "text-yellow-600"
//                         : b.status === "Approved"
//                         ? "text-green-600"
//                         : b.status === "Rejected"
//                         ? "text-red-600"
//                         : "text-gray-600"
//                     }`}
//                   >
//                     {b.status || "Pending"}
//                   </td>
//                 </motion.tr>
//               ))
//             )}
//           </tbody>
//         </table>
//       </div>
//     </div>
//   );
// }


// import React, { useEffect, useState } from "react";
// import axios from "axios";
// import { motion } from "framer-motion";
// import { FaCarSide, FaUser, FaMapMarkedAlt, FaClock, FaCheckCircle } from "react-icons/fa";

// export default function BookingList() {
//   const [bookings, setBookings] = useState([]);

//   useEffect(() => {
//     fetchBookings();
//   }, []);

//   const fetchBookings = () => {
//     axios
//       .get("http://localhost:8081/bookings")
//       .then((res) => setBookings(res.data))
//       .catch((err) => console.error("Error fetching bookings:", err));
//   };

//   return (
//     <div className="min-h-screen bg-gradient-to-r from-blue-500 via-purple-600 to-pink-200 p-6">
//       <motion.h2
//         initial={{ opacity: 0, y: -20 }}
//         animate={{ opacity: 1, y: 0 }}
//         transition={{ duration: 0.6 }}
//         className="text-4xl font-extrabold text-center text-white drop-shadow mb-10"
//       >
//         🚗 All Bookings Overview
//       </motion.h2>

//       <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
//         {bookings.length === 0 ? (
//           <p className="text-center text-white/90 text-xl w-full italic">
//             No bookings found 📭
//           </p>
//         ) : (
//           bookings.map((b, i) => (
//             <motion.div
//               key={b.id}
//               initial={{ opacity: 0, y: 30 }}
//               animate={{ opacity: 1, y: 0 }}
//               transition={{ duration: 0.4, delay: i * 0.1 }}
//               whileHover={{ scale: 1.04 }}
//               className="bg-white/20 backdrop-blur-xl border border-white/40 p-5 rounded-2xl shadow-xl text-white"
//             >
//               {/* Header */}
//               <div className="flex justify-between items-center mb-3">
//                 <span className="text-lg font-bold">
//                   Booking #{i + 1}
//                 </span>

//                 <span
//                   className={`px-3 py-1 rounded-full text-sm font-semibold ${
//                     b.status === "Pending"
//                       ? "bg-yellow-500/80"
//                       : b.status === "Approved"
//                       ? "bg-green-500/80"
//                       : b.status === "Rejected"
//                       ? "bg-red-500/80"
//                       : "bg-gray-500/60"
//                   }`}
//                 >
//                   {b.status || "Pending"}
//                 </span>
//               </div>

//               <div className="space-y-3">

//                 {/* User */}
//                 <div className="flex items-center gap-3">
//                   <FaUser className="text-yellow-300 text-xl" />
//                   <p className="font-semibold">
//                     {b.user?.name || "Unknown User"}
//                   </p>
//                 </div>

//                 {/* Vehicle */}
//                 <div className="flex items-center gap-3">
//                   <FaCarSide className="text-blue-300 text-xl" />
//                   <p>{b.vehicle?.vehicleNumber || "Unknown Vehicle"}</p>
//                 </div>

//                 {/* Driver */}
//                 <div className="flex items-center gap-3">
//                   <FaCheckCircle className="text-green-300 text-xl" />
//                   <p>{b.driver?.name || "Not Assigned"}</p>
//                 </div>

//                 <hr className="border-white/20" />

//                 {/* From & To */}
//                 <div className="flex items-center gap-3">
//                   <FaMapMarkedAlt className="text-pink-300 text-xl" />
//                   <div>
//                     <p className="text-sm opacity-80">From:</p>
//                     <p className="font-semibold">{b.fromLocation}</p>
//                   </div>
//                 </div>

//                 <div className="flex items-center gap-3">
//                   <FaMapMarkedAlt className="text-purple-300 text-xl" />
//                   <div>
//                     <p className="text-sm opacity-80">To:</p>
//                     <p className="font-semibold">{b.toLocation}</p>
//                   </div>
//                 </div>

//                 {/* Trip Time */}
//                 <div className="flex items-center gap-3 mt-2">
//                   <FaClock className="text-white text-xl" />
//                   <p>{new Date(b.tripTime).toLocaleString()}</p>
//                 </div>

//               </div>
//             </motion.div>
//           ))
//         )}
//       </div>
//     </div>
//   );
// }


// import React, { useEffect, useState } from "react";
// import axios from "axios";
// import { motion } from "framer-motion";
// import { FaCarSide, FaUser, FaMapMarkedAlt, FaClock, FaCheckCircle } from "react-icons/fa";

// export default function BookingList() {
//   const [bookings, setBookings] = useState([]);

//   useEffect(() => {
//     fetchBookings();
//   }, []);

//   const fetchBookings = () => {
//     axios
//       .get("http://localhost:8081/bookings")
//       .then((res) => setBookings(res.data))
//       .catch((err) => console.error("Error fetching bookings:", err));
//   };

//   return (
//     <div className="min-h-screen bg-gray-100 p-6">
//       <motion.h2
//         initial={{ opacity: 0, y: -20 }}
//         animate={{ opacity: 1, y: 0 }}
//         transition={{ duration: 0.6 }}
//         className="text-4xl font-extrabold text-center text-gray-800 mb-10"
//       >
//         🚗 All Bookings Overview
//       </motion.h2>

//       <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
//         {bookings.length === 0 ? (
//           <p className="text-center text-gray-500 text-xl w-full italic">
//             No bookings found 📭
//           </p>
//         ) : (
//           bookings.map((b, i) => (
//             <motion.div
//               key={b.id}
//               initial={{ opacity: 0, y: 30 }}
//               animate={{ opacity: 1, y: 0 }}
//               transition={{ duration: 0.4, delay: i * 0.1 }}
//               whileHover={{ scale: 1.04 }}
//               className="bg-white shadow-xl border border-gray-200 p-5 rounded-2xl"
//             >
//               {/* Header */}
//               <div className="flex justify-between items-center mb-3">
//                 <span className="text-lg font-bold text-gray-800">
//                   Booking #{i + 1}
//                 </span>

//                 <span
//                   className={`px-3 py-1 rounded-full text-sm font-semibold text-white ${
//                     b.status === "Pending"
//                       ? "bg-yellow-500"
//                       : b.status === "Approved"
//                       ? "bg-green-600"
//                       : b.status === "Rejected"
//                       ? "bg-red-600"
//                       : "bg-gray-600"
//                   }`}
//                 >
//                   {b.status || "Pending"}
//                 </span>
//               </div>

//               <div className="space-y-3">

//                 {/* User */}
//                 <div className="flex items-center gap-3">
//                   <FaUser className="text-blue-600 text-xl" />
//                   <p className="font-semibold text-gray-800">
//                     {b.user?.name || "Unknown User"}
//                   </p>
//                 </div>

//                 {/* Vehicle */}
//                 <div className="flex items-center gap-3">
//                   <FaCarSide className="text-indigo-600 text-xl" />
//                   <p className="text-gray-700">
//                     {b.vehicle?.vehicleNumber || "Unknown Vehicle"}
//                   </p>
//                 </div>

//                 {/* Driver */}
//                 <div className="flex items-center gap-3">
//                   <FaCheckCircle className="text-green-600 text-xl" />
//                   <p className="text-gray-700">{b.driver?.name || "Not Assigned"}</p>
//                 </div>

//                 <hr className="border-gray-300" />

//                 {/* From */}
//                 <div className="flex items-center gap-3">
//                   <FaMapMarkedAlt className="text-pink-600 text-xl" />
//                   <div>
//                     <p className="text-sm text-gray-500">From:</p>
//                     <p className="font-semibold text-gray-800">{b.fromLocation}</p>
//                   </div>
//                 </div>

//                 {/* To */}
//                 <div className="flex items-center gap-3">
//                   <FaMapMarkedAlt className="text-purple-600 text-xl" />
//                   <div>
//                     <p className="text-sm text-gray-500">To:</p>
//                     <p className="font-semibold text-gray-800">{b.toLocation}</p>
//                   </div>
//                 </div>

//                 {/* Trip Time */}
//                 <div className="flex items-center gap-3 mt-2">
//                   <FaClock className="text-gray-700 text-xl" />
//                   <p className="text-gray-700">
//                     {new Date(b.tripTime).toLocaleString()}
//                   </p>
//                 </div>
//               </div>
//             </motion.div>
//           ))
//         )}
//       </div>
//     </div>
//   );
// }


// import React, { useEffect, useState } from "react";
// import axios from "axios";
// import { motion } from "framer-motion";
// import { FaCarSide, FaUser, FaMapMarkedAlt, FaClock, FaCheckCircle } from "react-icons/fa";

// export default function BookingList() {
//   const [bookings, setBookings] = useState([]);

//   useEffect(() => {
//     fetchBookings();
//   }, []);

//   const fetchBookings = () => {
//     axios
//       .get("http://localhost:8081/bookings")
//       .then((res) => setBookings(res.data))
//       .catch((err) => console.error("Error fetching bookings:", err));
//   };

//   return (
//     <div className="min-h-screen bg-gray-100 p-6">
//       <motion.h2
//         initial={{ opacity: 0, y: -20 }}
//         animate={{ opacity: 1, y: 0 }}
//         transition={{ duration: 0.6 }}
//         className="text-4xl font-extrabold text-center text-gray-900 mb-10"
//       >
//         🚗 All Bookings Overview
//       </motion.h2>

//       <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
//         {bookings.length === 0 ? (
//           <p className="text-center text-gray-500 text-xl w-full italic">
//             No bookings found 📭
//           </p>
//         ) : (
//           bookings.map((b, i) => (
//             <motion.div
//               key={b.id}
//               initial={{ opacity: 0, y: 30 }}
//               animate={{ opacity: 1, y: 0 }}
//               transition={{ duration: 0.4, delay: i * 0.1 }}
//               whileHover={{ scale: 1.05 }}
//               className="rounded-2xl p-[2px] shadow-2xl bg-gradient-to-br from-blue-600 via-purple-600 to-pink-500"
//             >
//               {/* Inner white content */}
//               <div className="bg-white rounded-2xl p-5 h-full">
//                 {/* Header */}
//                 <div className="flex justify-between items-center mb-3">
//                   <span className="text-lg font-bold text-gray-800">
//                     Booking #{i + 1}
//                   </span>

//                   <span
//                     className={`px-3 py-1 rounded-full text-sm font-semibold text-white ${
//                       b.status === "Pending"
//                         ? "bg-yellow-500"
//                         : b.status === "Approved"
//                         ? "bg-green-600"
//                         : b.status === "Rejected"
//                         ? "bg-red-600"
//                         : "bg-gray-600"
//                     }`}
//                   >
//                     {b.status || "Pending"}
//                   </span>
//                 </div>

//                 <div className="space-y-3">

//                   {/* User */}
//                   <div className="flex items-center gap-3">
//                     <FaUser className="text-blue-600 text-xl" />
//                     <p className="font-semibold text-gray-800">
//                       {b.user?.name || "Unknown User"}
//                     </p>
//                   </div>

//                   {/* Vehicle */}
//                   <div className="flex items-center gap-3">
//                     <FaCarSide className="text-indigo-600 text-xl" />
//                     <p className="text-gray-700">
//                       {b.vehicle?.vehicleNumber || "Unknown Vehicle"}
//                     </p>
//                   </div>

//                   {/* Driver */}
//                   <div className="flex items-center gap-3">
//                     <FaCheckCircle className="text-green-600 text-xl" />
//                     <p className="text-gray-700">
//                       {b.driver?.name || "Not Assigned"}
//                     </p>
//                   </div>

//                   <hr className="border-gray-300" />

//                   {/* From */}
//                   <div className="flex items-center gap-3">
//                     <FaMapMarkedAlt className="text-pink-600 text-xl" />
//                     <div>
//                       <p className="text-sm text-gray-500">From:</p>
//                       <p className="font-semibold text-gray-800">
//                         {b.fromLocation}
//                       </p>
//                     </div>
//                   </div>

//                   {/* To */}
//                   <div className="flex items-center gap-3">
//                     <FaMapMarkedAlt className="text-purple-600 text-xl" />
//                     <div>
//                       <p className="text-sm text-gray-500">To:</p>
//                       <p className="font-semibold text-gray-800">
//                         {b.toLocation}
//                       </p>
//                     </div>
//                   </div>

//                   {/* Trip Time */}
//                   <div className="flex items-center gap-3 mt-2">
//                     <FaClock className="text-gray-700 text-xl" />
//                     <p className="text-gray-700">
//                       {new Date(b.tripTime).toLocaleString()}
//                     </p>
//                   </div>
//                 </div>
//               </div>
//             </motion.div>
//           ))
//         )}
//       </div>
//     </div>
//   );
// }

import React, { useEffect, useState } from "react";
import axios from "axios";
import { motion } from "framer-motion";
import { 
  FaCarSide, 
  FaUser, 
  FaMapMarkedAlt, 
  FaClock, 
  FaCheckCircle,
  FaIdCard,
  FaStar,
  FaFilter,
  FaSearch
} from "react-icons/fa";

export default function BookingList() {
  const [bookings, setBookings] = useState([]);
  const [loading, setLoading] = useState(true);
  const [selectedStatus, setSelectedStatus] = useState("all");
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    fetchBookings();
  }, []);

  const fetchBookings = () => {
    axios
      .get("http://localhost:8081/bookings")
      .then((res) => {
        setBookings(res.data);
        setLoading(false);
      })
      .catch((err) => {
        console.error("Error fetching bookings:", err);
        setLoading(false);
      });
  };

  const filteredBookings = bookings.filter(booking => {
    const matchesStatus = selectedStatus === "all" || booking.status === selectedStatus;
    const matchesSearch = 
      booking.user?.name?.toLowerCase().includes(searchTerm.toLowerCase()) ||
      booking.vehicle?.vehicleNumber?.toLowerCase().includes(searchTerm.toLowerCase()) ||
      booking.driver?.name?.toLowerCase().includes(searchTerm.toLowerCase()) ||
      booking.fromLocation?.toLowerCase().includes(searchTerm.toLowerCase()) ||
      booking.toLocation?.toLowerCase().includes(searchTerm.toLowerCase());
    
    return matchesStatus && matchesSearch;
  });

  const getStatusColor = (status) => {
    const colors = {
      "Pending": "bg-yellow-100 text-yellow-800 border-yellow-200",
      "Approved": "bg-green-100 text-green-800 border-green-200",
      "Rejected": "bg-red-100 text-red-800 border-red-200",
      "Completed": "bg-blue-100 text-blue-800 border-blue-200",
      "In Progress": "bg-purple-100 text-purple-800 border-purple-200"
    };
    return colors[status] || "bg-gray-100 text-gray-800 border-gray-200";
  };

  const getStatusIcon = (status) => {
    const icons = {
      "Pending": "⏳",
      "Approved": "✅",
      "Rejected": "❌",
      "Completed": "🎉",
      "In Progress": "🚗"
    };
    return icons[status] || "📋";
  };

  const statusCounts = {
    all: bookings.length,
    Pending: bookings.filter(b => b.status === "Pending").length,
    Approved: bookings.filter(b => b.status === "Approved").length,
    Rejected: bookings.filter(b => b.status === "Rejected").length,
    Completed: bookings.filter(b => b.status === "Completed").length,
    "In Progress": bookings.filter(b => b.status === "In Progress").length,
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-white flex items-center justify-center">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="text-center"
        >
          <div className="w-16 h-16 border-4 border-blue-500 border-t-transparent rounded-full animate-spin mx-auto mb-4"></div>
          <p className="text-gray-600 text-xl font-semibold">Loading bookings...</p>
        </motion.div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 p-6">
      {/* Header Section */}
      <motion.div
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-center mb-12"
      >
        <h1 className="text-4xl font-bold text-gray-800 mb-4">
          🚗 Booking Dashboard
        </h1>
        <p className="text-gray-600 text-lg max-w-2xl mx-auto">
          Manage and track all your vehicle bookings in one place
        </p>
      </motion.div>

      {/* Search and Filter Section */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        className="max-w-6xl mx-auto mb-8"
      >
        <div className="bg-white rounded-2xl shadow-sm border border-gray-200 p-6">
          {/* Search Bar */}
          <div className="relative mb-6">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <FaSearch className="text-gray-400" />
            </div>
            <input
              type="text"
              placeholder="Search bookings by customer, vehicle, driver, or location..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all"
            />
          </div>

          {/* Status Filters */}
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <FaFilter className="text-gray-500" />
              <span className="text-gray-700 font-semibold">Filter by status:</span>
            </div>
            <div className="flex flex-wrap gap-2">
              {Object.entries(statusCounts).map(([status, count]) => (
                <motion.button
                  key={status}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => setSelectedStatus(status)}
                  className={`px-4 py-2 rounded-full text-sm font-semibold transition-all ${
                    selectedStatus === status
                      ? "bg-blue-500 text-white shadow-md"
                      : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                  }`}
                >
                  {status.charAt(0).toUpperCase() + status.slice(1)} ({count})
                </motion.button>
              ))}
            </div>
          </div>
        </div>
      </motion.div>

      {/* Stats Overview */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.3 }}
        className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 mb-8 max-w-6xl mx-auto"
      >
        {Object.entries(statusCounts).map(([status, count]) => (
          <motion.div
            key={status}
            whileHover={{ scale: 1.05 }}
            className="bg-white rounded-xl shadow-sm border border-gray-200 p-4 text-center cursor-pointer transition-all hover:shadow-md"
            onClick={() => setSelectedStatus(status)}
          >
            <div className={`text-2xl font-bold ${
              selectedStatus === status ? "text-blue-600" : "text-gray-800"
            } mb-1`}>
              {count}
            </div>
            <div className="text-gray-600 text-sm font-medium capitalize">
              {status}
            </div>
          </motion.div>
        ))}
      </motion.div>

      {/* Bookings Grid */}
      <div className="max-w-7xl mx-auto">
        {filteredBookings.length === 0 ? (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-center py-16 bg-white rounded-2xl shadow-sm border border-gray-200"
          >
            <div className="text-6xl mb-4">📭</div>
            <h3 className="text-2xl font-bold text-gray-800 mb-2">No bookings found</h3>
            <p className="text-gray-600 text-lg">
              {searchTerm || selectedStatus !== "all" 
                ? "Try adjusting your search or filter criteria" 
                : "No bookings available at the moment"
              }
            </p>
          </motion.div>
        ) : (
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredBookings.map((booking, i) => (
              <motion.div
                key={booking.id}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                whileHover={{ 
                  scale: 1.02,
                  y: -5,
                }}
                className="bg-white rounded-2xl shadow-lg border border-gray-200 p-6 hover:shadow-xl transition-all duration-300"
              >
                {/* Header with ID and Status */}
                <div className="flex justify-between items-start mb-4">
                  <div className="flex items-center space-x-2">
                    <FaIdCard className="text-blue-500 text-lg" />
                    <span className="text-gray-800 font-bold text-lg">
                      #{booking.id}
                    </span>
                  </div>
                  <motion.span
                    whileHover={{ scale: 1.1 }}
                    className={`px-3 py-1 rounded-full text-xs font-bold border ${getStatusColor(booking.status)}`}
                  >
                    {getStatusIcon(booking.status)} {booking.status || "Pending"}
                  </motion.span>
                </div>

                {/* User Info */}
                <div className="flex items-center space-x-3 mb-4 p-3 bg-gray-50 rounded-xl">
                  <div className="w-10 h-10 bg-blue-500 rounded-full flex items-center justify-center">
                    <FaUser className="text-white text-sm" />
                  </div>
                  <div>
                    <p className="text-gray-600 text-sm">Customer</p>
                    <p className="text-gray-800 font-semibold">
                      {booking.user?.name || "Unknown User"}
                    </p>
                  </div>
                </div>

                {/* Vehicle and Driver Info */}
                <div className="grid grid-cols-2 gap-3 mb-4">
                  <div className="bg-gray-50 rounded-xl p-3">
                    <div className="flex items-center space-x-2 mb-2">
                      <FaCarSide className="text-blue-500" />
                      <span className="text-gray-600 text-sm">Vehicle</span>
                    </div>
                    <p className="text-gray-800 font-semibold text-sm">
                      {booking.vehicle?.vehicleNumber || "N/A"}
                    </p>
                  </div>
                  
                  <div className="bg-gray-50 rounded-xl p-3">
                    <div className="flex items-center space-x-2 mb-2">
                      <FaCheckCircle className="text-green-500" />
                      <span className="text-gray-600 text-sm">Driver</span>
                    </div>
                    <p className="text-gray-800 font-semibold text-sm">
                      {booking.driver?.name || "Not Assigned"}
                    </p>
                  </div>
                </div>

                {/* Route Information */}
                <div className="mb-4">
                  <div className="flex items-center space-x-2 mb-3">
                    <FaMapMarkedAlt className="text-purple-500" />
                    <span className="text-gray-800 font-semibold">Route</span>
                  </div>
                  
                  <div className="space-y-2">
                    <div className="flex items-center space-x-3 bg-gray-50 rounded-xl p-3">
                      <div className="w-8 h-8 bg-green-500 rounded-full flex items-center justify-center">
                        <FaMapMarkedAlt className="text-white text-xs" />
                      </div>
                      <div>
                        <p className="text-gray-600 text-xs">From</p>
                        <p className="text-gray-800 font-semibold text-sm">{booking.fromLocation}</p>
                      </div>
                    </div>
                    
                    <div className="flex items-center space-x-3 bg-gray-50 rounded-xl p-3">
                      <div className="w-8 h-8 bg-red-500 rounded-full flex items-center justify-center">
                        <FaMapMarkedAlt className="text-white text-xs" />
                      </div>
                      <div>
                        <p className="text-gray-600 text-xs">To</p>
                        <p className="text-gray-800 font-semibold text-sm">{booking.toLocation}</p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Trip Time */}
                <div className="flex items-center space-x-3 bg-gray-50 rounded-xl p-3">
                  <div className="w-10 h-10 bg-cyan-500 rounded-full flex items-center justify-center">
                    <FaClock className="text-white text-sm" />
                  </div>
                  <div>
                    <p className="text-gray-600 text-sm">Trip Time</p>
                    <p className="text-gray-800 font-semibold text-sm">
                      {new Date(booking.tripTime).toLocaleString()}
                    </p>
                  </div>
                </div>

                {/* Decorative Element */}
                <div className="absolute top-4 right-4 opacity-30">
                  <FaStar className="text-yellow-400 text-xl" />
                </div>
              </motion.div>
            ))}
          </div>
        )}
      </div>

      {/* Footer */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1 }}
        className="text-center mt-12 pt-8 border-t border-gray-200"
      >
        <p className="text-gray-600">
          Showing {filteredBookings.length} of {bookings.length} bookings
        </p>
      </motion.div>
    </div>
  );
}



