// import React, { useEffect, useState } from "react";
// import axios from "axios";

// const AdminBookings = () => {
//   const [bookings, setBookings] = useState([]);
//   const [drivers, setDrivers] = useState([]);

//   useEffect(() => {
//     fetchBookings();
//     fetchDrivers();
//   }, []);

//   const fetchBookings = async () => {
//     const res = await axios.get("http://localhost:8081/bookings");
//     setBookings(res.data);
//   };

//   const fetchDrivers = async () => {
//     const res = await axios.get("http://localhost:8081/drivers");
//     setDrivers(res.data);
//   };

//  const assignDriver = async (bookingId, driverId) => {
//   await axios.put(`http://localhost:8081/bookings/assign/${bookingId}`, {
//     id: driverId
//   });

//   alert("Driver Assigned Successfully!");
//   fetchBookings();
// };

//   return (
//     <div style={{ padding: "20px" }}>
//       <h2>All Bookings</h2>

//       <table border="1" cellPadding="10" style={{ width: "100%", marginTop: "20px" }}>
//         <thead>
//           <tr>
//             <th>ID</th>
//             <th>Vehicle</th>
//             <th>From</th>
//             <th>To</th>
//             <th>Trip Time</th>
//             <th>Driver</th>
//             <th>Status</th>
//             <th>Assign Driver</th>
//           </tr>
//         </thead>

//         <tbody>
//           {bookings.map((b) => (
//             <tr key={b.id}>
//               <td>{b.id}</td>
//               <td>{b.vehicle?.vehicleNumber}</td>
//               <td>{b.fromLocation}</td>
//               <td>{b.toLocation}</td>
//               <td>{b.tripTime}</td>
//               <td>{b.driver ? b.driver.name : "Not Assigned"}</td>
//               <td>{b.status}</td>

//               <td>
//                 <select
//                   onChange={(e) => assignDriver(b.id, e.target.value)}
//                   defaultValue=""
//                 >
//                   <option value="" disabled>Select Driver</option>
//                   {drivers.map((d) => (
//                     <option key={d.id} value={d.id}>
//                       {d.name}
//                     </option>
//                   ))}
//                 </select>
//               </td>
//             </tr>
//           ))}
//         </tbody>

//       </table>
//     </div>
//   );
// };

// export default AdminBookings;
import React, { useEffect, useState } from "react";
import axios from "axios";

const AdminBookings = () => {
  const [bookings, setBookings] = useState([]);
  const [drivers, setDrivers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [selectedBooking, setSelectedBooking] = useState(null);

  useEffect(() => {
    fetchBookings();
    fetchDrivers();
  }, []);

  const fetchBookings = async () => {
    try {
      const res = await axios.get("http://localhost:8081/bookings");
      setBookings(res.data);
    } catch (error) {
      console.error("Error fetching bookings:", error);
    } finally {
      setLoading(false);
    }
  };

  const fetchDrivers = async () => {
    try {
      const res = await axios.get("http://localhost:8081/drivers");
      setDrivers(res.data);
    } catch (error) {
      console.error("Error fetching drivers:", error);
    }
  };

  const assignDriver = async (bookingId, driverId) => {
    if (!driverId) return;
    
    try {
      await axios.put(`http://localhost:8081/bookings/${bookingId}/assign/${driverId}`, {
        id: driverId
      });

      // Show success notification
      showNotification("Driver assigned successfully!", "success");
      fetchBookings();
    } catch (error) {
      console.error("Error assigning driver:", error);
      showNotification("Failed to assign driver", "error");
    }
  };

  const showNotification = (message, type) => {
    // Create notification element
    const notification = document.createElement("div");
    notification.className = `fixed top-4 right-4 z-50 p-4 rounded-lg shadow-lg transform transition-transform duration-300 ${
      type === "success" ? "bg-green-500" : "bg-red-500"
    } text-white`;
    notification.textContent = message;
    
    // Add to DOM
    document.body.appendChild(notification);
    
    // Remove after 3 seconds
    setTimeout(() => {
      notification.remove();
    }, 3000);
  };

  const getStatusBadge = (status) => {
    const statusConfig = {
      "PENDING": { class: "bg-yellow-100 text-yellow-800", text: "Pending" },
      "CONFIRMED": { class: "bg-green-100 text-green-800", text: "Confirmed" },
      "IN_PROGRESS": { class: "bg-blue-100 text-blue-800", text: "In Progress" },
      "COMPLETED": { class: "bg-emerald-100 text-emerald-800", text: "Completed" },
      "CANCELLED": { class: "bg-red-100 text-red-800", text: "Cancelled" }
    };
    
    const config = statusConfig[status] || { class: "bg-yellow-100 text-yellow-800", text: status };
    return (
      <span className={`px-3 py-1 rounded-full text-xs font-medium ${config.class}`}>
        {config.text}
      </span>
    );
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-500 mx-auto"></div>
          <p className="mt-4 text-gray-600">Loading bookings...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 p-6">
      {/* Header */}
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">Booking Management</h1>
          <p className="text-gray-600">Manage and assign drivers to customer bookings</p>
        </div>

        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          <div className="bg-white rounded-xl shadow-sm p-6 border-l-4 border-blue-500">
            <h3 className="text-2xl font-bold text-gray-900">{bookings.length}</h3>
            <p className="text-gray-600 font-medium">Total Bookings</p>
          </div>
          <div className="bg-white rounded-xl shadow-sm p-6 border-l-4 border-green-500">
            <h3 className="text-2xl font-bold text-gray-900">{drivers.length}</h3>
            <p className="text-gray-600 font-medium">Available Drivers</p>
          </div>
          <div className="bg-white rounded-xl shadow-sm p-6 border-l-4 border-purple-500">
            <h3 className="text-2xl font-bold text-gray-900">
              {bookings.filter(b => b.driver).length}
            </h3>
            <p className="text-gray-600 font-medium">Assigned Bookings</p>
          </div>
        </div>

        {/* Table Container */}
        <div className="bg-white rounded-xl shadow-sm overflow-hidden">
          {bookings.length > 0 ? (
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead className="bg-gray-900">
                  <tr>
                    <th className="px-6 py-4 text-left text-xs font-medium text-white uppercase tracking-wider">
                      Booking ID
                    </th>
                    <th className="px-6 py-4 text-left text-xs font-medium text-white uppercase tracking-wider">
                      Vehicle
                    </th>
                    <th className="px-6 py-4 text-left text-xs font-medium text-white uppercase tracking-wider">
                      Route
                    </th>
                    <th className="px-6 py-4 text-left text-xs font-medium text-white uppercase tracking-wider">
                      Trip Time
                    </th>
                    <th className="px-6 py-4 text-left text-xs font-medium text-white uppercase tracking-wider">
                      Driver
                    </th>
                    <th className="px-6 py-4 text-left text-xs font-medium text-white uppercase tracking-wider">
                      Status
                    </th>
                    <th className="px-6 py-4 text-left text-xs font-medium text-white uppercase tracking-wider">
                      Assign Driver
                    </th>
                  </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200">
                  {bookings.map((booking) => (
                    <tr 
                      key={booking.id} 
                      className={`hover:bg-gray-50 transition-colors ${
                        selectedBooking === booking.id ? "bg-blue-50" : ""
                      }`}
                    >
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="text-sm font-mono font-bold text-gray-900">
                          #{booking.id}
                        </div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="flex items-center">
                          <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-gray-100 text-gray-800">
                            {booking.vehicle?.vehicleNumber || "N/A"}
                          </span>
                        </div>
                      </td>
                      <td className="px-6 py-4">
                        <div className="flex flex-col space-y-1">
                          <div className="flex items-center text-sm text-gray-900">
                            <span className="mr-2">📍</span>
                            {booking.fromLocation}
                          </div>
                          <div className="flex items-center text-sm text-gray-900">
                            <span className="mr-2">🎯</span>
                            {booking.toLocation}
                          </div>
                        </div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-blue-100 text-blue-800">
                          {booking.tripTime}
                        </span>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        {booking.driver ? (
                          <div className="flex items-center">
                            <div className="flex-shrink-0 h-8 w-8 bg-blue-500 rounded-full flex items-center justify-center">
                              <span className="text-sm font-medium text-white">
                                {booking.driver.name.charAt(0).toUpperCase()}
                              </span>
                            </div>
                            <div className="ml-3">
                              <div className="text-sm font-medium text-gray-900">
                                {booking.driver.name}
                              </div>
                            </div>
                          </div>
                        ) : (
                          <span className="text-sm text-red-600 italic">Not Assigned</span>
                        )}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        {getStatusBadge(booking.status)}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="flex items-center space-x-2">
                          <select
                            className="block w-full px-3 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                            onChange={(e) => assignDriver(booking.id, e.target.value)}
                            defaultValue=""
                          >
                            <option value="" disabled>Select Driver</option>
                            {drivers.map((driver) => (
                              <option key={driver.id} value={driver.id}>
                                {driver.name} - {driver.vehicleType || "Driver"}
                              </option>
                            ))}
                          </select>
                          {booking.driver && (
                            <button 
                              className="p-2 text-gray-400 hover:text-gray-600 hover:bg-gray-100 rounded-lg transition-colors"
                              onClick={() => setSelectedBooking(booking.id)}
                              title="Reassign driver"
                            >
                              🔄
                            </button>
                          )}
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          ) : (
            <div className="text-center py-12">
              <div className="text-6xl mb-4">📋</div>
              <h3 className="text-lg font-medium text-gray-900 mb-2">No Bookings Found</h3>
              <p className="text-gray-500">There are no bookings to display at the moment.</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default AdminBookings;