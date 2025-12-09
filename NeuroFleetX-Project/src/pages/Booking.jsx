// import React, { useState } from "react";
// import { createBooking } from "../api/bookingService";

// export default function BookingForm({ vehicles }) {
//   const [userName, setUserName] = useState("");
//   const [vehicleNumber, setVehicleNumber] = useState("");
//   const [source, setSource] = useState("");
//   const [destination, setDestination] = useState("");
//   const [date, setDate] = useState("");

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     const booking = { userName, vehicleNumber, source, destination, date };
//     createBooking(booking)
//       .then(() => {
//         alert("Vehicle booked successfully!");
//         // Reset form
//         setUserName(""); setVehicleNumber(""); setSource(""); setDestination(""); setDate("");
//       })
//       .catch((err) => console.error(err));
//   };

//   return (
//     <form onSubmit={handleSubmit} className="p-4 bg-white rounded shadow-md max-w-md mx-auto">
//       <h2 className="text-xl font-bold mb-4">Book a Vehicle</h2>

//       <input
//         type="text"
//         placeholder="Your Name"
//         value={userName}
//         onChange={(e) => setUserName(e.target.value)}
//         className="w-full mb-2 p-2 border rounded"
//         required
//       />

//       <select
//         value={vehicleNumber}
//         onChange={(e) => setVehicleNumber(e.target.value)}
//         className="w-full mb-2 p-2 border rounded"
//         required
//       >
//         <option value="">Select Vehicle</option>
//         {vehicles.map((v) => (
//           <option key={v.id} value={v.vehicleNumber}>
//             {v.vehicleNumber} ({v.type})
//           </option>
//         ))}
//       </select>

//       <input
//         type="text"
//         placeholder="Source"
//         value={source}
//         onChange={(e) => setSource(e.target.value)}
//         className="w-full mb-2 p-2 border rounded"
//         required
//       />

//       <input
//         type="text"
//         placeholder="Destination"
//         value={destination}
//         onChange={(e) => setDestination(e.target.value)}
//         className="w-full mb-2 p-2 border rounded"
//         required
//       />

//       <input
//         type="date"
//         value={date}
//         onChange={(e) => setDate(e.target.value)}
//         className="w-full mb-4 p-2 border rounded"
//         required
//       />

//       <button type="submit" className="w-full bg-blue-500 text-white p-2 rounded">
//         Book Vehicle
//       </button>
//     </form>
//   );
// }

// import React, { useState } from "react";
// import { createBooking } from "../api/bookingService";

// export default function BookingForm({ vehicles }) {
//   const [userName, setUserName] = useState("");
//   const [vehicleNumber, setVehicleNumber] = useState("");
//   const [source, setSource] = useState("");
//   const [destination, setDestination] = useState("");
//   const [date, setDate] = useState("");

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     const booking = { userName, vehicleNumber, source, destination, date };
//     createBooking(booking)
//       .then(() => {
//         alert("🚗 Vehicle booked successfully!");
//         setUserName("");
//         setVehicleNumber("");
//         setSource("");
//         setDestination("");
//         setDate("");
//       })
//       .catch((err) => console.error(err));
//   };

//   return (
//     <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-100 p-6">
//       <form
//         onSubmit={handleSubmit}
//         className="bg-white/90 backdrop-blur-xl rounded-3xl shadow-2xl p-8 max-w-md w-full border border-indigo-200"
//       >
//         <h2 className="text-2xl font-extrabold mb-6 text-center bg-gradient-to-r from-blue-700 via-indigo-600 to-purple-600 bg-clip-text text-transparent">
//           🚘 Book a Vehicle
//         </h2>

//         <input
//           type="text"
//           placeholder="Your Name"
//           value={userName}
//           onChange={(e) => setUserName(e.target.value)}
//           className="w-full mb-4 p-3 rounded-xl border border-indigo-200 focus:ring-2 focus:ring-indigo-400 focus:outline-none transition"
//           required
//         />

//         <select
//           value={vehicleNumber}
//           onChange={(e) => setVehicleNumber(e.target.value)}
//           className="w-full mb-4 p-3 rounded-xl border border-indigo-200 focus:ring-2 focus:ring-indigo-400 focus:outline-none transition"
//           required
//         >
//           <option value="">Select Vehicle</option>
//           {vehicles.map((v) => (
//             <option key={v.id} value={v.vehicleNumber}>
//               {v.vehicleNumber} ({v.type})
//             </option>
//           ))}
//         </select>

//         <input
//           type="text"
//           placeholder="Source"
//           value={source}
//           onChange={(e) => setSource(e.target.value)}
//           className="w-full mb-4 p-3 rounded-xl border border-indigo-200 focus:ring-2 focus:ring-indigo-400 focus:outline-none transition"
//           required
//         />

//         <input
//           type="text"
//           placeholder="Destination"
//           value={destination}
//           onChange={(e) => setDestination(e.target.value)}
//           className="w-full mb-4 p-3 rounded-xl border border-indigo-200 focus:ring-2 focus:ring-indigo-400 focus:outline-none transition"
//           required
//         />

//         <input
//           type="date"
//           value={date}
//           onChange={(e) => setDate(e.target.value)}
//           className="w-full mb-6 p-3 rounded-xl border border-indigo-200 focus:ring-2 focus:ring-indigo-400 focus:outline-none transition"
//           required
//         />

//         <button
//           type="submit"
//           className="w-full bg-gradient-to-r from-blue-600 via-purple-600 to-pink-500 text-white font-bold py-3 rounded-2xl shadow-lg hover:scale-105 transition-transform duration-200"
//         >
//           Book Vehicle
//         </button>
//       </form>
//     </div>
//   );
// }

// src/components/Booking.jsx


// import { useState, useEffect } from "react";
// import axios from "axios";

// export default function Booking() {
//   const [vehicles, setVehicles] = useState([]);

//   const [bookings, setBookings] = useState([]);
//   const [form, setForm] = useState({
//     vehicle: "",
//     driver: "",
//     fromLocation: "",
//     toLocation: "",
//     tripTime: ""
//   });

//   // Fetch Vehicles, Drivers, Bookings
//   useEffect(() => {
//     axios.get("http://localhost:8081/vehicles")
//       .then(res => setVehicles(res.data))
//       .catch(err => console.log(err));

   

//     axios.get("http://localhost:8081/bookings")
//       .then(res => setBookings(res.data))
//       .catch(err => console.log(err));
//   }, []);

//   const handleChange = e => setForm({ ...form, [e.target.name]: e.target.value });

//   const handleSubmit = e => {
//     e.preventDefault();
//     axios.post("http://localhost:8081/bookings", {
//       vehicle: { id: form.vehicle },
//       driver: { id: form.driver },
//       fromLocation: form.fromLocation,
//       toLocation: form.toLocation,
//       tripTime: form.tripTime
//     })
//     .then(res => {
//       setBookings([...bookings, res.data]);
//       setForm({ vehicle: "", driver: "", fromLocation: "", toLocation: "", tripTime: "" });
//       alert("🚗 Vehicle booked successfully!");
//     })
//     .catch(err => console.error(err));
//   };

//   return (
//     <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-100 p-6">
//       <form
//         onSubmit={handleSubmit}
//         className="bg-white/90 backdrop-blur-xl rounded-3xl shadow-2xl p-8 max-w-md w-full border border-indigo-200"
//       >
//         <h2 className="text-2xl font-extrabold mb-6 text-center bg-gradient-to-r from-blue-700 via-indigo-600 to-purple-600 bg-clip-text text-transparent">
//           🚘 Book a Vehicle
//         </h2>

//         {/* Vehicle Selection */}
//         <select
//           name="vehicle"
//           value={form.vehicle}
//           onChange={handleChange}
//           className="w-full mb-4 p-3 rounded-xl border border-indigo-200 focus:ring-2 focus:ring-indigo-400 focus:outline-none transition"
//           required
//         >
//           <option value="">Select Vehicle</option>
//          {vehicles.map(v => (
//   <option key={v.id} value={v.id.toString()}>
//     {v.vehicleNumber} ({v.type})
//   </option>
// ))}

//         </select>

    

//         {/* From Location */}
//         <input
//           type="text"
//           name="fromLocation"
//           placeholder="From"
//           value={form.fromLocation}
//           onChange={handleChange}
//           className="w-full mb-4 p-3 rounded-xl border border-indigo-200 focus:ring-2 focus:ring-indigo-400 focus:outline-none transition"
//           required
//         />

//         {/* To Location */}
//         <input
//           type="text"
//           name="toLocation"
//           placeholder="To"
//           value={form.toLocation}
//           onChange={handleChange}
//           className="w-full mb-4 p-3 rounded-xl border border-indigo-200 focus:ring-2 focus:ring-indigo-400 focus:outline-none transition"
//           required
//         />

//         {/* Trip Time */}
//         <input
//           type="datetime-local"
//           name="tripTime"
//           value={form.tripTime}
//           onChange={handleChange}
//           className="w-full mb-6 p-3 rounded-xl border border-indigo-200 focus:ring-2 focus:ring-indigo-400 focus:outline-none transition"
//           required
//         />

//         <button
//           type="submit"
//           className="w-full bg-gradient-to-r from-blue-600 via-purple-600 to-pink-500 text-white font-bold py-3 rounded-2xl shadow-lg hover:scale-105 transition-transform duration-200"
//         >
//           Book Vehicle
//         </button>

//         {/* Booking List */}
//         {bookings.length > 0 && (
//           <div className="mt-6">
//             <h3 className="text-xl font-semibold mb-2 text-center">All Bookings</h3>
//             <div className="overflow-x-auto">
//               <table className="w-full border-collapse border border-indigo-200 text-center">
//                 <thead>
//                   <tr className="bg-indigo-100">
//                     <th className="border border-indigo-200 p-2">Vehicle</th>
//                     <th className="border border-indigo-200 p-2">Driver</th>
//                     <th className="border border-indigo-200 p-2">From</th>
//                     <th className="border border-indigo-200 p-2">To</th>
//                     <th className="border border-indigo-200 p-2">Time</th>
//                   </tr>
//                 </thead>
//                 <tbody>
//                   {bookings.map(b => (
//                     <tr key={b.id} className="hover:bg-indigo-50">
//                       <td className="border border-indigo-200 p-2">{b.vehicle.vehicleNumber}</td>
//                       <td className="border border-indigo-200 p-2">{b.driver.name}</td>
//                       <td className="border border-indigo-200 p-2">{b.fromLocation}</td>
//                       <td className="border border-indigo-200 p-2">{b.toLocation}</td>
//                       <td className="border border-indigo-200 p-2">{new Date(b.tripTime).toLocaleString()}</td>
//                     </tr>
//                   ))}
//                 </tbody>
//               </table>
//             </div>
//           </div>
//         )}
//       </form>
//     </div>
//   );
// }



import { useState, useEffect } from "react";
import axios from "axios";

export default function Booking() {
  const [vehicles, setVehicles] = useState([]);
  const [bookings, setBookings] = useState([]);

  const [form, setForm] = useState({
    vehicle: "",
    fromLocation: "",
    toLocation: "",
    tripTime: ""
  });

  // Fetch Vehicles & Bookings
  useEffect(() => {
    axios.get("http://localhost:8081/vehicles")
      .then(res => setVehicles(res.data))
      .catch(err => console.log(err));

    axios.get("http://localhost:8081/bookings")
      .then(res => setBookings(res.data))
      .catch(err => console.log(err));
  }, []);

  const handleChange = e => setForm({ ...form, [e.target.name]: e.target.value });

const handleSubmit = e => {
  e.preventDefault();
  const user = JSON.parse(localStorage.getItem("user"));

  axios.post("http://localhost:8081/bookings", {
    user: { id: user.id },
    vehicle: { id: Number(form.vehicle) },
    driver: null,
    fromLocation: form.fromLocation,
    toLocation: form.toLocation,
    tripTime: form.tripTime + ":00"  // FIX
  })
  .then(res => {
    setBookings([...bookings, res.data]);
    alert("Booked!");
  })
  .catch(err => console.error("❌ Booking Error:", err));
};

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-100 p-6">
      <form
        onSubmit={handleSubmit}
        className="bg-white/90 backdrop-blur-xl rounded-3xl shadow-2xl p-8 max-w-md w-full border border-indigo-200"
      >
        <h2 className="text-2xl font-extrabold mb-6 text-center bg-gradient-to-r from-blue-700 via-indigo-600 to-purple-600 bg-clip-text text-transparent">
          🚘 Book a Vehicle
        </h2>

        {/* Vehicle Selection */}
        <select
          name="vehicle"
          value={form.vehicle}
          onChange={handleChange}
          className="w-full mb-4 p-3 rounded-xl border border-indigo-200 focus:ring-2 focus:ring-indigo-400 focus:outline-none transition"
          required
        >
          <option value="">Select Vehicle</option>
          {vehicles.map(v => (
            <option key={v.id} value={v.id.toString()}>
              {v.vehicleNumber} ({v.type})
            </option>
          ))}
        </select>

        {/* From Location */}
        <input
          type="text"
          name="fromLocation"
          placeholder="From"
          value={form.fromLocation}
          onChange={handleChange}
          className="w-full mb-4 p-3 rounded-xl border border-indigo-200 focus:ring-2 focus:ring-indigo-400 focus:outline-none transition"
          required
        />

        {/* To Location */}
        <input
          type="text"
          name="toLocation"
          placeholder="To"
          value={form.toLocation}
          onChange={handleChange}
          className="w-full mb-4 p-3 rounded-xl border border-indigo-200 focus:ring-2 focus:ring-indigo-400 focus:outline-none transition"
          required
        />

        {/* Trip Time */}
        <input
          type="datetime-local"
          name="tripTime"
          value={form.tripTime}
          onChange={handleChange}
          className="w-full mb-6 p-3 rounded-xl border border-indigo-200 focus:ring-2 focus:ring-indigo-400 focus:outline-none transition"
          required
        />

        <button
          type="submit"
          className="w-full bg-gradient-to-r from-blue-600 via-purple-600 to-pink-500 text-white font-bold py-3 rounded-2xl shadow-lg hover:scale-105 transition-transform duration-200"
        >
          Book Vehicle
        </button>

        {/* Booking List */}
        {bookings.length > 0 && (
          <div className="mt-6">
            <h3 className="text-xl font-semibold mb-2 text-center">All Bookings</h3>

            <div className="overflow-x-auto">
              <table className="w-full border-collapse border border-indigo-200 text-center">
                <thead>
                  <tr className="bg-indigo-100">
                    <th className="border border-indigo-200 p-2">Vehicle</th>
                    <th className="border border-indigo-200 p-2">Driver</th>
                    <th className="border border-indigo-200 p-2">From</th>
                    <th className="border border-indigo-200 p-2">To</th>
                    <th className="border border-indigo-200 p-2">Time</th>
                  </tr>
                </thead>

                <tbody>
                  {bookings.map(b => (
                    <tr key={b.id} className="hover:bg-indigo-50">
                      <td className="border border-indigo-200 p-2">
                        {b.vehicle?.vehicleNumber || "Unknown"}
                      </td>

                      {/* Driver (admin assigns later) */}
                      <td className="border border-indigo-200 p-2">
                        {b.driver?.name || "Not Assigned"}
                      </td>

                      <td className="border border-indigo-200 p-2">{b.fromLocation}</td>
                      <td className="border border-indigo-200 p-2">{b.toLocation}</td>
                      <td className="border border-indigo-200 p-2">
                        {new Date(b.tripTime).toLocaleString()}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        )}
      </form>
    </div>
  );
}
