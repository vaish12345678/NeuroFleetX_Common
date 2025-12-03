
// import React, { useEffect, useState } from "react";
// import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
// import VehicleList from "./pages/vehicleList";
// import Booking from "./pages/Booking";
// import BookingList from "./pages/bookingList";
// import AddVehicleForm from "./Components/AddVehicleForm";
// import Dashboard from "./pages/Dashboard";
// import Login from "./pages/Login";
// import Signup from "./pages/Signup";
// import Navbar from "./Components/Navbar";
// import Driver from "./Components/Drivers";


// export default function App() {
//   const [vehicles, setVehicles] = useState([]);
//   const [drivers, setDrivers] = useState([]);

//   const isAuthenticated = !!localStorage.getItem("token");

//   // Fetch vehicles once when App loads
//  useEffect(() => {
//     fetch("http://localhost:8081/vehicles")
//       .then((res) => res.json())
//       .then((data) => setVehicles(data))
//       .catch((err) => console.error("Error fetching vehicles:", err));

//     fetch("http://localhost:8081/drivers")
//       .then((res) => res.json())
//       .then((data) => setDrivers(data))
//       .catch((err) => console.error("Error fetching drivers:", err));
//   }, []);

//   return (
//     <BrowserRouter>
//       <Navbar />

//       <Routes>
//         <Route path="/" element={<VehicleList />} />
//         <Route path="/add" element={<AddVehicleForm />} />
//         <Route path="/signup" element={<Signup />} />
//         <Route path="/login" element={<Login />} />
//         <Route path="/Driver" element={<Driver/>}/>
//         <Route
//           path="/dashboard"
//           element={isAuthenticated ? <Dashboard /> : <Navigate to="/login" />}
//         />
//         <Route path="/book" element={<Booking vehicles={vehicles} />} />
//         <Route path="/bookingList" element={<BookingList />} />
//         <Route path="*" element={<Navigate to="/login" />} />
//       </Routes>
//     </BrowserRouter>
//   );
// }


// import React, { useEffect, useState } from "react";
// import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
// import VehicleList from "./pages/vehicleList";
// import Booking from "./pages/Booking";
// import BookingList from "./pages/bookingList";
// import AddVehicleForm from "./Components/AddVehicleForm";
// import Dashboard from "./pages/Dashboard";
// import Login from "./pages/Login";
// import Signup from "./pages/Signup";
// import Navbar from "./Components/Navbar";
// import Driver from "./Components/Drivers";
// import ProtectedRoute from "./Components/ProtectedRoute";
// import AdminBookings from "./pages/AdminBookings";
// export default function App() {
//   const [vehicles, setVehicles] = useState([]);
//   const [drivers, setDrivers] = useState([]);

//   const isAuthenticated = !!localStorage.getItem("token");
//   const role = localStorage.getItem("role");

//   // Fetch vehicles and drivers
//   useEffect(() => {
//     fetch("http://localhost:8081/vehicles")
//       .then((res) => res.json())
//       .then((data) => setVehicles(data))
//       .catch((err) => console.error("Error fetching vehicles:", err));

//     fetch("http://localhost:8081/drivers")
//       .then((res) => res.json())
//       .then((data) => setDrivers(data))
//       .catch((err) => console.error("Error fetching drivers:", err));
//   }, []);

//   return (
//     <BrowserRouter>
      
//       <Routes>
//         {/* Public Routes */}
//         <Route path="/signup" element={<Signup />} />
//         <Route path="/" element={<Login />} />
       
//         {/* Admin Routes */}
//         <Route
//           path="/add"
//           element={
//             <ProtectedRoute allowedRoles={["ADMIN"]}>
//               <AddVehicleForm />
//             </ProtectedRoute>
//           }
//         />
//         <Route
//           path="/driver"
//           element={
//             <ProtectedRoute allowedRoles={["ADMIN", "DRIVER"]}>
//               <Driver />
//             </ProtectedRoute>
//           }
//         />
//         <Route
//   path="/Assign"
//   element={
//     <ProtectedRoute allowedRoles={["ADMIN"]}>
//       <AdminBookings />
//     </ProtectedRoute>
//   }
// />


//         {/* Customer Routes */}
//         <Route
//           path="/book"
//           element={
//             <ProtectedRoute allowedRoles={["CUSTOMER"]}>
//               <Booking vehicles={vehicles} />
//             </ProtectedRoute>
//           }
//         />
//         <Route
//           path="/bookingList"
//           element={
//             <ProtectedRoute allowedRoles={["CUSTOMER"]}>
//               <BookingList />
//             </ProtectedRoute>
//           }
//         />

//         {/* Common Routes for Admin/Customer/Driver */}
//         <Route
//           path="/"
//           element={
//             <ProtectedRoute allowedRoles={["ADMIN", "CUSTOMER"]}>
//               <VehicleList />
//             </ProtectedRoute>
//           }
//         />

//         <Route
//           path="/dashboard"
//           element={
//             <ProtectedRoute allowedRoles={["ADMIN", "CUSTOMER", "DRIVER"]}>
//               <Dashboard />
//             </ProtectedRoute>
//           }
//         />

//         {/* Fallback */}
//         <Route path="*" element={<Navigate to="/login" />} />
//       </Routes>
//     </BrowserRouter>
//   );
// }


import React, { useEffect, useState } from "react";
import { BrowserRouter, Routes, Route, Navigate, useLocation } from "react-router-dom";
import VehicleList from "./pages/vehicleList";
import Booking from "./pages/Booking";
import BookingList from "./pages/bookingList";
import AddVehicleForm from "./Components/AddVehicleForm";
import Dashboard from "./pages/Dashboard";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Navbar from "./Components/Navbar";
import Driver from "./Components/Drivers";
import ProtectedRoute from "./Components/ProtectedRoute";
import AdminBookings from "./pages/AdminBookings";
import DriverTrips from "./pages/DriverTrips";
import VehicleHealth from "./Components/VehicleHealth";
import RouteOptimization from "./Components/RouteOptimization";
// Wrapper to hide Navbar on login/signup
function Layout({ children }) {
  const location = useLocation();

  // pages where navbar must be hidden
  const hideNavbarRoutes = ["/", "/signup", "/login"];

  const shouldHideNavbar = hideNavbarRoutes.includes(location.pathname);

  return (
    <>
      {!shouldHideNavbar && <Navbar />}
      {children}
    </>
  );
}

export default function App() {
  const user = JSON.parse(localStorage.getItem("user"));

  const [vehicles, setVehicles] = useState([]);
  const [drivers, setDrivers] = useState([]);

  // Fetch vehicles + drivers
  useEffect(() => {
    fetch("http://localhost:8081/vehicles")
      .then((res) => res.json())
      .then((data) => setVehicles(data))
      .catch((err) => console.error("Error fetching vehicles:", err));

    fetch("http://localhost:8081/drivers")
      .then((res) => res.json())
      .then((data) => setDrivers(data))
      .catch((err) => console.error("Error fetching drivers:", err));
  }, []);

  return (
    <BrowserRouter>
      <Layout>
        <Routes>

          {/* PUBLIC ROUTES */}
          <Route path="/" element={<Login />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />

         <Route
  path="/vehicles"
  element={
    <ProtectedRoute allowedRoles={["ADMIN", "CUSTOMER"]}>
      <VehicleList />
    </ProtectedRoute>
  }
/>

<Route
  path="/driver-trips"
  element={
    <ProtectedRoute allowedRoles={["DRIVER"]}>
      <DriverTrips driverId={user.id} />
    </ProtectedRoute>
  }
/>

<Route
  path="/driver-trips"
  element={
    <ProtectedRoute allowedRoles={["DRIVER"]}>
      <DriverTrips driverId={user.id} />
    </ProtectedRoute>
  }
/>
<Route
  path="/admin-route-optimization"
  element={
    
      <RouteOptimization />
   
  }
/>


          {/* ADMIN ROUTES */}
          <Route
            path="/add"
            element={
              <ProtectedRoute allowedRoles={["ADMIN"]}>
                <AddVehicleForm />
              </ProtectedRoute>
            }
          />

          <Route
            path="/assign"
            element={
              <ProtectedRoute allowedRoles={["ADMIN"]}>
                <AdminBookings />
              </ProtectedRoute>
            }
          />

          <Route
            path="/driver"
            element={
              <ProtectedRoute allowedRoles={["ADMIN", "DRIVER"]}>
                <Driver />
              </ProtectedRoute>
            }
          />

          {/* CUSTOMER ROUTES */}
          <Route
            path="/book"
            element={
              <ProtectedRoute allowedRoles={["CUSTOMER"]}>
                <Booking vehicles={vehicles} />
              </ProtectedRoute>
            }
          />

          <Route
            path="/bookingList"
            element={
              <ProtectedRoute allowedRoles={["CUSTOMER"]}>
                <BookingList />
              </ProtectedRoute>
            }
          />

          {/* COMMON ROUTES */}
          {/* <Route
            path="/vehicleList"
            element={
              <ProtectedRoute allowedRoles={["ADMIN", "CUSTOMER"]}>
                <VehicleList />
              </ProtectedRoute>
            }
          /> */}

          <Route
            path="/dashboard"
            element={
              <ProtectedRoute allowedRoles={["ADMIN", "CUSTOMER", "DRIVER"]}>
                <Dashboard />
              </ProtectedRoute>
            }
          />

          {/* FALLBACK */}
          <Route path="*" element={<Navigate to="/" />} />

        </Routes>
      </Layout>
    </BrowserRouter>
  );
}
