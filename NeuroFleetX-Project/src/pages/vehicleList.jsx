// import React, { useEffect, useState } from "react";
// import { getVehicles } from "../api/vehicleService";
// import { motion } from "framer-motion";
// import { Search, Car, Fuel, List, BarChart3, Gauge } from "lucide-react";

// export default function VehicleList() {
//   const [vehicles, setVehicles] = useState([]);
//   const [search, setSearch] = useState("");

//   useEffect(() => {
//     getVehicles()
//       .then((res) => setVehicles(res.data))
//       .catch((err) => console.error("Error fetching vehicles:", err));
//   }, []);

//   const filteredVehicles = vehicles.filter(
//     (v) =>
//       v.vehicleNumber.toLowerCase().includes(search.toLowerCase()) ||
//       v.type.toLowerCase().includes(search.toLowerCase())
//   );

//   // Dashboard stats
//   const totalVehicles = vehicles.length;
//   const avgFuel =
//     vehicles.length > 0
//       ? (
//           vehicles.reduce((sum, v) => sum + parseFloat(v.fuelConsumption || 0), 0) /
//           vehicles.length
//         ).toFixed(2)
//       : 0;
//   const mostCommonType =
//     vehicles.length > 0
//       ? Object.entries(
//           vehicles.reduce((acc, v) => {
//             acc[v.type] = (acc[v.type] || 0) + 1;
//             return acc;
//           }, {})
//         ).sort((a, b) => b[1] - a[1])[0][0]
//       : "N/A";

//   const efficiencyScore = avgFuel > 0 ? Math.max(0, 100 - avgFuel * 5).toFixed(1) : "N/A";

//   return (
//     <div className="min-h-screen bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-100 flex flex-col items-center py-12 px-4">
//       {/* Title */}
//       <motion.h2
//         initial={{ opacity: 0, y: -20 }}
//         animate={{ opacity: 1, y: 0 }}
//         transition={{ duration: 0.6 }}
//         className="text-4xl font-extrabold mb-10 bg-gradient-to-r from-blue-700 via-indigo-600 to-purple-600 bg-clip-text text-transparent text-center"
//       >
//         🚘 Vehicle Inventory Dashboard
//       </motion.h2>

//       {/* Stats Section */}
//       <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-10 w-full max-w-6xl">
//         {[
//           {
//             title: "Total Vehicles",
//             value: totalVehicles,
//             icon: <Car className="text-blue-500" />,
//             gradient: "from-blue-400 to-blue-600",
//           },
//           {
//             title: "Avg. Fuel Consumption",
//             value: `${avgFuel} L/100km`,
//             icon: <Fuel className="text-indigo-500" />,
//             gradient: "from-indigo-400 to-indigo-600",
//           },
//           {
//             title: "Most Common Type",
//             value: mostCommonType,
//             icon: <List className="text-purple-500" />,
//             gradient: "from-purple-400 to-purple-600",
//           },
//           {
//             title: "Efficiency Score",
//             value: `${efficiencyScore}%`,
//             icon: <Gauge className="text-green-500" />,
//             gradient: "from-green-400 to-emerald-600",
//           },
//         ].map((stat, i) => (
//           <motion.div
//             key={i}
//             whileHover={{ scale: 1.03 }}
//             transition={{ duration: 0.2 }}
//             className={`p-6 rounded-2xl shadow-xl text-white bg-gradient-to-r ${stat.gradient} flex flex-col items-center justify-center space-y-2`}
//           >
//             <div className="text-3xl">{stat.icon}</div>
//             <h3 className="text-sm font-semibold opacity-90">{stat.title}</h3>
//             <p className="text-xl font-bold">{stat.value}</p>
//           </motion.div>
//         ))}
//       </div>

//       {/* Search Bar */}
//       <div className="flex items-center bg-white/80 backdrop-blur-xl border border-indigo-100 rounded-full shadow-md w-full max-w-md px-4 py-2 mb-8">
//         <Search className="text-indigo-500 mr-2" size={20} />
//         <input
//           type="text"
//           placeholder="Search by number or type..."
//           value={search}
//           onChange={(e) => setSearch(e.target.value)}
//           className="w-full bg-transparent focus:outline-none text-gray-700 placeholder-gray-400"
//         />
//       </div>

//       {/* Vehicle Table */}
//       <motion.div
//         initial={{ opacity: 0, scale: 0.95 }}
//         animate={{ opacity: 1, scale: 1 }}
//         transition={{ duration: 0.6 }}
//         className="w-full max-w-6xl bg-white/90 backdrop-blur-xl rounded-3xl shadow-2xl border border-indigo-100 overflow-hidden"
//       >
//         <div className="overflow-x-auto">
//           <table className="min-w-full text-sm text-gray-700">
//             <thead className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white">
//               <tr>
//                 <th className="py-4 px-6 text-left font-semibold">#</th>
//                 <th className="py-4 px-6 text-left font-semibold">Vehicle Number</th>
//                 <th className="py-4 px-6 text-left font-semibold">Type</th>
//                 <th className="py-4 px-6 text-left font-semibold">Fuel Consumption</th>
//               </tr>
//             </thead>
//             <tbody>
//               {filteredVehicles.length === 0 ? (
//                 <tr>
//                   <td colSpan="4" className="text-center py-8 text-gray-500 italic">
//                     No vehicles found 🚗
//                   </td>
//                 </tr>
//               ) : (
//                 filteredVehicles.map((v, i) => (
//                   <motion.tr
//                     key={v.id || i}
//                     whileHover={{ scale: 1.01 }}
//                     transition={{ duration: 0.2 }}
//                     className="border-b border-indigo-100 hover:bg-indigo-50/70 transition-all"
//                   >
//                     <td className="py-4 px-6 text-gray-600 font-medium">{i + 1}</td>
//                     <td className="py-4 px-6 font-semibold text-indigo-700">
//                       {v.vehicleNumber}
//                     </td>
//                     <td className="py-4 px-6">{v.type}</td>
//                     <td className="py-4 px-6">{v.fuelConsumption} L/100km</td>
//                   </motion.tr>
//                 ))
//               )}
//             </tbody>
//           </table>
//         </div>
//       </motion.div>
//     </div>
//   );
// }

// src/components/VehicleList.jsx


import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Car, Fuel, List, Gauge, Search } from "lucide-react";
import axios from "axios";

export default function VehicleList() {
  const [vehicles, setVehicles] = useState([]);
  const [search, setSearch] = useState("");

  // Fetch vehicles from backend
  useEffect(() => {
    axios
      .get("http://localhost:8081/vehicles")
      .then((res) => setVehicles(res.data))
      .catch((err) => console.error("Error fetching vehicles:", err));
  }, []);

  // Filter vehicles based on search
  const filteredVehicles = vehicles.filter(
    (v) =>
      v.vehicleNumber.toLowerCase().includes(search.toLowerCase()) ||
      v.type.toLowerCase().includes(search.toLowerCase())
  );

  // Dashboard stats
  const totalVehicles = vehicles.length;
  const avgFuel =
    vehicles.length > 0
      ? (
          vehicles.reduce((sum, v) => sum + parseFloat(v.fuelConsumption || 0), 0) /
          vehicles.length
        ).toFixed(2)
      : 0;

  const mostCommonType =
    vehicles.length > 0
      ? Object.entries(
          vehicles.reduce((acc, v) => {
            acc[v.type] = (acc[v.type] || 0) + 1;
            return acc;
          }, {})
        ).sort((a, b) => b[1] - a[1])[0][0]
      : "N/A";

  const efficiencyScore = avgFuel > 0 ? Math.max(0, 100 - avgFuel * 5).toFixed(1) : "N/A";

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-100 flex flex-col items-center py-12 px-4">
      {/* Title */}
      <motion.h2
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-4xl font-extrabold mb-10 text-center bg-gradient-to-r from-blue-700 via-indigo-600 to-purple-600 bg-clip-text text-transparent"
      >
        🚘 Vehicle Inventory Dashboard
      </motion.h2>

      {/* Stats Section */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-10 w-full max-w-6xl">
        {[
          { title: "Total Vehicles", value: totalVehicles, icon: <Car className="text-blue-500" />, gradient: "from-blue-400 to-blue-600" },
          { title: "Avg. Fuel Consumption", value: `${avgFuel} L/100km`, icon: <Fuel className="text-indigo-500" />, gradient: "from-indigo-400 to-indigo-600" },
          { title: "Most Common Type", value: mostCommonType, icon: <List className="text-purple-500" />, gradient: "from-purple-400 to-purple-600" },
          { title: "Efficiency Score", value: `${efficiencyScore}%`, icon: <Gauge className="text-green-500" />, gradient: "from-green-400 to-emerald-600" },
        ].map((stat, i) => (
          <motion.div
            key={i}
            whileHover={{ scale: 1.03 }}
            transition={{ duration: 0.2 }}
            className={`p-6 rounded-2xl shadow-xl text-white bg-gradient-to-r ${stat.gradient} flex flex-col items-center justify-center space-y-2`}
          >
            <div className="text-3xl">{stat.icon}</div>
            <h3 className="text-sm font-semibold opacity-90">{stat.title}</h3>
            <p className="text-xl font-bold">{stat.value}</p>
          </motion.div>
        ))}
      </div>

      {/* Search Bar */}
      <div className="flex items-center bg-white/80 backdrop-blur-xl border border-indigo-100 rounded-full shadow-md w-full max-w-md px-4 py-2 mb-8">
        <Search className="text-indigo-500 mr-2" size={20} />
        <input
          type="text"
          placeholder="Search by number or type..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="w-full bg-transparent focus:outline-none text-gray-700 placeholder-gray-400"
        />
      </div>

      {/* Vehicle Table */}
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6 }}
        className="w-full max-w-6xl bg-white/90 backdrop-blur-xl rounded-3xl shadow-2xl border border-indigo-100 overflow-hidden"
      >
        <div className="overflow-x-auto">
          <table className="min-w-full text-sm text-gray-700">
            <thead className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white">
              <tr>
                <th className="py-4 px-6 text-left font-semibold">#</th>
                <th className="py-4 px-6 text-left font-semibold">Vehicle Number</th>
                <th className="py-4 px-6 text-left font-semibold">Type</th>
                <th className="py-4 px-6 text-left font-semibold">Fuel Consumption</th>
              </tr>
            </thead>
            <tbody>
              {filteredVehicles.length === 0 ? (
                <tr>
                  <td colSpan="4" className="text-center py-8 text-gray-500 italic">
                    No vehicles found 🚗
                  </td>
                </tr>
              ) : (
                filteredVehicles.map((v, i) => (
                  <motion.tr
                    key={v.id || i}
                    whileHover={{ scale: 1.01 }}
                    transition={{ duration: 0.2 }}
                    className="border-b border-indigo-100 hover:bg-indigo-50/70 transition-all"
                  >
                    <td className="py-4 px-6 text-gray-600 font-medium">{i + 1}</td>
                    <td className="py-4 px-6 font-semibold text-indigo-700">{v.vehicleNumber}</td>
                    <td className="py-4 px-6">{v.type}</td>
                    <td className="py-4 px-6">{v.fuelConsumption} L/100km</td>
                  </motion.tr>
                ))
              )}
            </tbody>
          </table>
        </div>
      </motion.div>
    </div>
  );
}
