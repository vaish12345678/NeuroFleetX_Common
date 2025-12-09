


import React from "react";
import { Link, useLocation } from "react-router-dom";

export default function Navbar() {
  const { pathname } = useLocation();
  const role = localStorage.getItem("role");

  const navLinks = [];

  if (role === "ADMIN") {
    navLinks.push({ name: "Vehicles", path: "/vehicles" });
    navLinks.push({ name: "Add Vehicle", path: "/add" });
   
    navLinks.push({ name: "Assign", path: "/Assign" });
      navLinks.push({ name: "Track Health", path: "/vehicle-health" });
    
  }

  if (role === "CUSTOMER") {
    navLinks.push({ name: "Vehicles", path: "/vehicles" });
    navLinks.push({ name: "Booking", path: "/book" });
    navLinks.push({ name: "Booking List", path: "/bookingList" });
  }

  if (role === "DRIVER") {
    navLinks.push({ name: "My Vehicles", path: "/driver" });
    
  }
  if (role === "DRIVER") {
  navLinks.push({ name: "My Trips", path: "/driver-trips" });

}


  // Always show login/signup if not logged in
  if (!role) {
    navLinks.push({ name: "Signup", path: "/signup" });
    navLinks.push({ name: "Login", path: "/login" });
  }

  return (
    <nav className="bg-gradient-to-r from-blue-600 via-purple-600 to-pink-500 text-white p-4 flex gap-6 shadow-lg">
      {navLinks.map((link) => (
        <Link
          key={link.path}
          to={link.path}
          className={`px-4 py-2 rounded-lg transition-all duration-300 ${
            pathname === link.path
              ? "bg-white text-gray-800 font-semibold shadow-md"
              : "hover:bg-white hover:text-gray-800"
          }`}
        >
          {link.name}
        </Link>
      ))}
    </nav>
  );
}

