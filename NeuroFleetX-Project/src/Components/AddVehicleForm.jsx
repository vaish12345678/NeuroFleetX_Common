
import React, { useState } from "react";
import { motion } from "framer-motion";
import axios from "axios";

export default function AddVehicleForm() {
  const [vehicle, setVehicle] = useState({
    vehicleNumber: "",
    type: "",
    fuelConsumption: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .post("http://localhost:8081/vehicles", vehicle)
      .then(() => {
        alert("🚗 Vehicle added successfully!");
        setVehicle({ vehicleNumber: "", type: "", fuelConsumption: "" });
      })
      .catch((err) => console.error(err));
  };

  return (
    <div className="min-h-screen flex justify-center items-center bg-gradient-to-br from-sky-100 via-blue-50 to-blue-200 relative overflow-hidden p-4">
      {/* Floating Background Shapes */}
      <div className="absolute w-72 h-72 bg-blue-300/20 rounded-full blur-3xl top-10 left-10 animate-pulse"></div>
      <div className="absolute w-96 h-96 bg-indigo-300/20 rounded-full blur-3xl bottom-10 right-10 animate-pulse"></div>

      <motion.form
        onSubmit={handleSubmit}
        initial={{ opacity: 0, y: 40, scale: 0.95 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="relative bg-white/50 backdrop-blur-2xl border border-white/30 shadow-2xl p-8 rounded-3xl w-full max-w-md"
      >
        <h2 className="text-3xl font-extrabold mb-6 text-center bg-gradient-to-r from-blue-700 via-indigo-500 to-sky-600 bg-clip-text text-transparent">
          Add New Vehicle
        </h2>

        <div className="space-y-5">
          {/* Vehicle Number */}
          <div>
            <label className="block text-gray-700 font-semibold mb-1">Vehicle Number</label>
            <input
              type="text"
              placeholder="e.g. MH12AB1234"
              value={vehicle.vehicleNumber}
              onChange={(e) => setVehicle({ ...vehicle, vehicleNumber: e.target.value })}
              required
              className="w-full px-4 py-2.5 border border-blue-200/70 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-400 placeholder-gray-400 bg-white/60 backdrop-blur-sm transition-all hover:shadow-sm"
            />
          </div>

          {/* Vehicle Type */}
          <div>
            <label className="block text-gray-700 font-semibold mb-1">Vehicle Type</label>
            <input
              type="text"
              placeholder="e.g. Electric Bus, Taxi"
              value={vehicle.type}
              onChange={(e) => setVehicle({ ...vehicle, type: e.target.value })}
              required
              className="w-full px-4 py-2.5 border border-blue-200/70 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-400 placeholder-gray-400 bg-white/60 backdrop-blur-sm transition-all hover:shadow-sm"
            />
          </div>

          {/* Fuel Consumption */}
          <div>
            <label className="block text-gray-700 font-semibold mb-1">Fuel Consumption (L/100km)</label>
            <input
              type="number"
              placeholder="e.g. 12"
              value={vehicle.fuelConsumption}
              onChange={(e) => setVehicle({ ...vehicle, fuelConsumption: e.target.value })}
              required
              className="w-full px-4 py-2.5 border border-blue-200/70 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-400 placeholder-gray-400 bg-white/60 backdrop-blur-sm transition-all hover:shadow-sm"
            />
          </div>
        </div>

        <motion.button
          whileHover={{ scale: 1.05, boxShadow: "0 0 15px rgba(59,130,246,0.5)" }}
          whileTap={{ scale: 0.97 }}
          type="submit"
          className="mt-7 w-full py-3 bg-gradient-to-r from-sky-500 via-blue-600 to-indigo-600 text-white font-semibold rounded-xl shadow-md hover:opacity-90 transition-all"
        >
          + Add Vehicle
        </motion.button>
      </motion.form>
    </div>
  );
}
