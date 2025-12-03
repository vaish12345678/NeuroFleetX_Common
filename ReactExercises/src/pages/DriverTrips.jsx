// import React, { useEffect, useState } from "react";
// import axios from "axios";

// export default function DriverTrips({ driverId }) {
//   const [trips, setTrips] = useState([]);

//   useEffect(() => {
//     fetchDriverTrips();
//   }, []);

//   const fetchDriverTrips = async () => {
//     try {
//       const res = await axios.get("http://localhost:8081/bookings");
//       const driverTrips = res.data.filter(
//         (booking) => booking.driver && booking.driver.id === driverId
//       );
//       setTrips(driverTrips);
//     } catch (error) {
//       console.log("Error fetching trips:", error);
//     }
//   };

//   const startTrip = async (id) => {
//     await axios.put(`http://localhost:8081/bookings/start/${id}`);
//     fetchDriverTrips();
//   };

//   const completeTrip = async (id) => {
//     await axios.put(`http://localhost:8081/bookings/complete/${id}`);
//     fetchDriverTrips();
//   };

//   return (
//     <div className="p-6">
//       <h2 className="text-xl font-bold mb-4">Driver Assigned Trips</h2>

//       {trips.length === 0 ? (
//         <p>No assigned trips yet</p>
//       ) : (
//         trips.map((trip) => (
//           <div
//             key={trip.id}
//             className="border p-4 rounded-lg shadow-md mb-4 bg-white"
//           >
//             <p><strong>From:</strong> {trip.fromLocation}</p>
//             <p><strong>To:</strong> {trip.toLocation}</p>
//             <p><strong>Status:</strong> {trip.status}</p>

//             {trip.status === "Assigned" && (
//               <button
//                 className="bg-blue-500 text-white p-2 rounded mt-2"
//                 onClick={() => startTrip(trip.id)}
//               >
//                 Start Trip
//               </button>
//             )}

//             {trip.status === "Ongoing" && (
//               <button
//                 className="bg-green-600 text-white p-2 rounded mt-2"
//                 onClick={() => completeTrip(trip.id)}
//               >
//                 Complete Trip
//               </button>
//             )}
//           </div>
//         ))
//       )}
//     </div>
//   );
// }


// import React, { useEffect, useState } from "react";
// import API from "../api";

// export default function DriverTrips({ driverId }) {
//   const [trips, setTrips] = useState([]);
//   const [loading, setLoading] = useState(true);

//   const fetchTrips = async () => {
//     try {
//       const res = await API.get("/bookings"); // your bookings endpoint
//       const driverTrips = res.data.filter(
//         (b) => b.driver && Number(b.driver.id) === Number(driverId)
//       );

//       // enrich each trip with route info by calling backend route
//       const enriched = await Promise.all(
//         driverTrips.map(async (trip) => {
//           try {
//             const route = await API.post("/api/route-info", {
//               origin: trip.fromLocation,
//               destination: trip.toLocation
//             });

//             return {
//               ...trip,
//               distanceText: route.data.distanceText,
//               durationText: route.data.durationText
//             };
//           } catch (err) {
//             console.error("Route error for trip", trip.id, err);
//             return { ...trip, distanceText: null, durationText: null };
//           }
//         })
//       );

//       setTrips(enriched);
//     } catch (err) {
//       console.error("Error fetching trips", err);
//     } finally {
//       setLoading(false);
//     }
//   };

//   useEffect(() => {
//     fetchTrips();
//     // optional: poll every 30 seconds
//     // const id = setInterval(fetchTrips, 30000);
//     // return () => clearInterval(id);
//   }, [driverId]);

//   const startTrip = async (id) => {
//     try {
//       await API.put(`/bookings/start/${id}`);
//       fetchTrips();
//     } catch (err) {
//       console.error("Start trip failed", err);
//     }
//   };

//   const completeTrip = async (id) => {
//     try {
//       await API.put(`/bookings/complete/${id}`);
//       fetchTrips();
//     } catch (err) {
//       console.error("Complete trip failed", err);
//     }
//   };

//   if (loading) return <div className="p-6">Loading trips...</div>;

//   return (
//     <div className="p-6">
//       <h2 className="text-2xl font-bold mb-4">Assigned Trips</h2>
//       {trips.length === 0 && <p>No assigned trips</p>}
//       {trips.map((t) => (
//         <div key={t.id} className="p-4 bg-white rounded shadow mb-4">
//           <div className="flex justify-between">
//             <div>
//               <p><b>From:</b> {t.fromLocation}</p>
//               <p><b>To:</b> {t.toLocation}</p>
//               <p><b>Status:</b> {t.status}</p>
//             </div>
//             <div className="text-right">
//               <p><b>Distance:</b> {t.distanceText ?? "—"}</p>
//               <p><b>ETA:</b> {t.durationText ?? "—"}</p>
//             </div>
//           </div>

//           <div className="mt-3">
//             {t.status === "Assigned" && (
//               <button onClick={() => startTrip(t.id)} className="px-3 py-1 bg-blue-600 text-white rounded mr-2">
//                 Start Trip
//               </button>
//             )}
//             {t.status === "Ongoing" && (
//               <button onClick={() => completeTrip(t.id)} className="px-3 py-1 bg-green-600 text-white rounded">
//                 Complete Trip
//               </button>
//             )}
//           </div>
//         </div>
//       ))}
//     </div>
//   );
// }




// import React, { useEffect, useState } from "react";
// import axios from "axios";

// export default function DriverTrips({ driverId }) {
//   const [trips, setTrips] = useState([]);
//   const [distanceData, setDistanceData] = useState({}); // store distance per trip

//   useEffect(() => {
//     fetchDriverTrips();
//   }, []);

//   useEffect(() => {
//     // when trips are fetched → calculate distance for all
//     trips.forEach((trip) => {
//       getDistance(trip.id, trip.fromLocation, trip.toLocation);
//     });
//   }, [trips]);

//   // ---------------- FETCH TRIPS -----------------
//   const fetchDriverTrips = async () => {
//     try {
//       const res = await axios.get("http://localhost:8081/bookings");
//       const driverTrips = res.data.filter(
//         (booking) => booking.driver && booking.driver.id === driverId
//       );
//       setTrips(driverTrips);
//     } catch (error) {
//       console.log("Error fetching trips:", error);
//     }
//   };

//   // ---------------- GOOGLE MAPS DISTANCE -----------------
//   const getDistance = async (origin, destination) => {
//   try {
//     const res = await axios.get(
//       `http://localhost:8081/api/distance/calculate`,
//       { params: { origin, destination } }
//     );

//     console.log("Distance response:", res.data);
//   } catch (err) {
//     console.error("Error calculating distance:", err);
//   }
// };

//   // ---------------- START TRIP -----------------
//   const startTrip = async (id) => {
//     await axios.put(`http://localhost:8081/bookings/start/${id}`);
//     fetchDriverTrips();
//   };

//   // ---------------- COMPLETE TRIP -----------------
//   const completeTrip = async (id) => {
//     await axios.put(`http://localhost:8081/bookings/complete/${id}`);
//     fetchDriverTrips();
//   };

//   // ---------------- UI -----------------
//   return (
//     <div className="p-6">
//       <h2 className="text-xl font-bold mb-4">Driver Assigned Trips</h2>

//       {trips.length === 0 ? (
//         <p>No assigned trips yet</p>
//       ) : (
//         trips.map((trip) => (
//           <div
//             key={trip.id}
//             className="border p-4 rounded-lg shadow-md mb-4 bg-white"
//           >
//             <p><strong>From:</strong> {trip.fromLocation}</p>
//             <p><strong>To:</strong> {trip.toLocation}</p>
//             <p><strong>Status:</strong> {trip.status}</p>

//             {/* Distance + ETA Section */}
//             {distanceData[trip.id] && (
//               <div className="mt-2 p-2 bg-gray-100 rounded">
//                 <p><strong>Distance:</strong> {distanceData[trip.id].distance}</p>
//                 <p><strong>Estimated Time:</strong> {distanceData[trip.id].duration}</p>
//               </div>
//             )}

//             {trip.status === "Assigned" && (
//               <button
//                 className="bg-blue-500 text-white p-2 rounded mt-2"
//                 onClick={() => startTrip(trip.id)}
//               >
//                 Start Trip
//               </button>
//             )}

//             {trip.status === "Ongoing" && (
//               <button
//                 className="bg-green-600 text-white p-2 rounded mt-2"
//                 onClick={() => completeTrip(trip.id)}
//               >
//                 Complete Trip
//               </button>
//             )}
//           </div>
//         ))
//       )}
//     </div>
//   );
// }
import React, { useEffect, useState } from "react";
import axios from "axios";

export default function DriverTrips({ driverId }) {
  const [trips, setTrips] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchDriverTrips();
  }, []);

  const fetchDriverTrips = async () => {
    try {
      setLoading(true);
      const res = await axios.get("http://localhost:8081/bookings");
      const driverTrips = res.data.filter(
        (booking) => booking.driver && booking.driver.id === driverId
      );
      setTrips(driverTrips);
    } catch (error) {
      console.log("Error fetching trips:", error);
    } finally {
      setLoading(false);
    }
  };

  const startTrip = async (id) => {
    try {
      await axios.put(`http://localhost:8081/bookings/start/${id}`);
      fetchDriverTrips();
    } catch (error) {
      console.log("Error starting trip:", error);
    }
  };

  const completeTrip = async (id) => {
    try {
      await axios.put(`http://localhost:8081/bookings/complete/${id}`);
      fetchDriverTrips();
    } catch (error) {
      console.log("Error completing trip:", error);
    }
  };

  const getStatusColor = (status) => {
    switch (status) {
      case "Assigned":
        return "bg-blue-100 text-blue-800 border-blue-200";
      case "Ongoing":
        return "bg-yellow-100 text-yellow-800 border-yellow-200";
      case "Completed":
        return "bg-green-100 text-green-800 border-green-200";
      default:
        return "bg-gray-100 text-gray-800 border-gray-200";
    }
  };

  const getStatusIcon = (status) => {
    switch (status) {
      case "Assigned":
        return "📋";
      case "Ongoing":
        return "🚗";
      case "Completed":
        return "✅";
      default:
        return "📦";
    }
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 p-6">
        <div className="max-w-4xl mx-auto">
          <div className="flex items-center justify-center h-64">
            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600"></div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 p-6">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold text-gray-800 mb-2">
            🚖 Driver Trips
          </h1>
          <p className="text-gray-600">Manage your assigned trips and updates</p>
          <div className="w-24 h-1 bg-blue-500 mx-auto mt-4 rounded-full"></div>
        </div>

        {/* Stats Card */}
        <div className="bg-white rounded-2xl shadow-lg p-6 mb-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="text-center p-4 bg-blue-50 rounded-lg">
              <div className="text-2xl font-bold text-blue-600">{trips.length}</div>
              <div className="text-sm text-gray-600">Total Trips</div>
            </div>
            <div className="text-center p-4 bg-yellow-50 rounded-lg">
              <div className="text-2xl font-bold text-yellow-600">
                {trips.filter(trip => trip.status === "Assigned").length}
              </div>
              <div className="text-sm text-gray-600">Assigned</div>
            </div>
            <div className="text-center p-4 bg-green-50 rounded-lg">
              <div className="text-2xl font-bold text-green-600">
                {trips.filter(trip => trip.status === "Completed").length}
              </div>
              <div className="text-sm text-gray-600">Completed</div>
            </div>
          </div>
        </div>

        {/* Trips List */}
        {trips.length === 0 ? (
          <div className="bg-white rounded-2xl shadow-lg p-12 text-center">
            <div className="text-6xl mb-4">🚗</div>
            <h3 className="text-xl font-semibold text-gray-700 mb-2">
              No Trips Assigned
            </h3>
            <p className="text-gray-500">
              You don't have any trips assigned to you yet. Check back later!
            </p>
          </div>
        ) : (
          <div className="space-y-6">
            {trips.map((trip) => (
              <div
                key={trip.id}
                className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden border border-gray-100"
              >
                <div className="p-6">
                  <div className="flex flex-col md:flex-row md:items-center justify-between mb-4">
                    <div className="flex items-center space-x-3 mb-4 md:mb-0">
                      <div className="text-2xl">
                        {getStatusIcon(trip.status)}
                      </div>
                      <div>
                        <span className={`inline-flex items-center px-3 py-1 rounded-full text-sm font-medium border ${getStatusColor(trip.status)}`}>
                          {trip.status}
                        </span>
                      </div>
                    </div>
                    <div className="text-sm text-gray-500">
                      Trip ID: #{trip.id}
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                    <div className="space-y-2">
                      <div className="flex items-center space-x-2">
                        <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                        <div>
                          <p className="text-sm text-gray-500">From</p>
                          <p className="font-semibold text-gray-800">{trip.fromLocation}</p>
                        </div>
                      </div>
                    </div>
                    <div className="space-y-2">
                      <div className="flex items-center space-x-2">
                        <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                        <div>
                          <p className="text-sm text-gray-500">To</p>
                          <p className="font-semibold text-gray-800">{trip.toLocation}</p>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Progress Bar */}
                  <div className="mb-6">
                    <div className="flex justify-between text-xs text-gray-500 mb-1">
                      <span>Assigned</span>
                      <span>Ongoing</span>
                      <span>Completed</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2">
                      <div
                        className={`h-2 rounded-full transition-all duration-500 ${
                          trip.status === "Assigned"
                            ? "bg-blue-500 w-1/3"
                            : trip.status === "Ongoing"
                            ? "bg-yellow-500 w-2/3"
                            : "bg-green-500 w-full"
                        }`}
                      ></div>
                    </div>
                  </div>

                  {/* Action Buttons */}
                  <div className="flex space-x-3">
                    {trip.status === "Assigned" && (
                      <button
                        className="flex-1 bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 text-white font-semibold py-3 px-6 rounded-xl transition-all duration-300 transform hover:scale-105 shadow-md hover:shadow-lg flex items-center justify-center space-x-2"
                        onClick={() => startTrip(trip.id)}
                      >
                        <span>🚀</span>
                        <span>Start Trip</span>
                      </button>
                    )}

                    {trip.status === "Ongoing" && (
                      <button
                        className="flex-1 bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 text-white font-semibold py-3 px-6 rounded-xl transition-all duration-300 transform hover:scale-105 shadow-md hover:shadow-lg flex items-center justify-center space-x-2"
                        onClick={() => completeTrip(trip.id)}
                      >
                        <span>✅</span>
                        <span>Complete Trip</span>
                      </button>
                    )}

                    {trip.status === "Completed" && (
                      <div className="flex-1 text-center py-3 px-6 bg-gray-100 text-gray-600 font-semibold rounded-xl">
                        Trip Completed 🎉
                      </div>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Footer */}
        <div className="text-center mt-8 text-gray-500 text-sm">
          <p>Need help? Contact support</p>
        </div>
      </div>
    </div>
  );
}