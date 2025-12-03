import React from "react";

export default function VehicleCard({ vehicle }) {
  return (
    <div className="bg-white shadow-lg rounded-xl p-4 border">
      <h3 className="text-lg font-bold">{vehicle.vehicleNumber}</h3>
      <p>Type: {vehicle.type}</p>
      <p>Fuel: {vehicle.fuelConsumption}</p>
    </div>
  );
}
