import React, { useEffect, useState } from "react";
import axios from "axios";

export default function VehicleHealth() {
  const [vehicles, setVehicles] = useState([]);
  const [selectedVehicle, setSelectedVehicle] = useState(null);
  const [health, setHealth] = useState({
    engineHealth: 100,
    brakesHealth: 100,
    acceleratorHealth: 100,
    fuelLevel: 100
  });

  // Fetch all vehicles
  useEffect(() => {
    fetchVehicles();
  }, []);

  const fetchVehicles = async () => {
    try {
      const res = await axios.get("http://localhost:8081/vehicles");
      setVehicles(res.data);
    } catch (err) {
      console.error("Error fetching vehicles:", err);
    }
  };

  // Open modal with vehicle health
  const openVehicle = (vehicle) => {
    setSelectedVehicle(vehicle);
    setHealth({
      engineHealth: vehicle.engineHealth,
      brakesHealth: vehicle.brakesHealth,
      acceleratorHealth: vehicle.acceleratorHealth,
      fuelLevel: vehicle.fuelLevel
    });
  };

  // Handle input changes
  const handleChange = (e) => {
    setHealth({ ...health, [e.target.name]: Number(e.target.value) });
  };

  // Update vehicle health
  const updateHealth = async () => {
    try {
      await axios.put(
        `http://localhost:8081/vehicles/${selectedVehicle.id}/health`,
        health
      );
      alert("Vehicle health updated successfully!");
      setSelectedVehicle(null);
      fetchVehicles();
    } catch (err) {
      console.error("Error updating health:", err);
      alert("Failed to update vehicle health.");
    }
  };

  return (
    <div className="p-6 min-h-screen bg-gray-50">
      <h2 className="text-2xl font-bold mb-4">Vehicle Health Tracking</h2>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {vehicles.map((v) => (
          <div key={v.id} className="bg-white p-4 rounded-lg shadow-md">
            <h3 className="font-bold text-lg">{v.vehicleNumber}</h3>
            <p>Type: {v.type}</p>
            <p>Engine: {v.engineHealth}%</p>
            <p>Brakes: {v.brakesHealth}%</p>
            <p>Accelerator: {v.acceleratorHealth}%</p>
            <p>Fuel: {v.fuelLevel}%</p>
            <button
              className="mt-2 bg-blue-500 text-white px-3 py-1 rounded"
              onClick={() => openVehicle(v)}
            >
              Update Health
            </button>
          </div>
        ))}
      </div>

      {/* Modal */}
      {selectedVehicle && (
        <div className="fixed inset-0 bg-black bg-opacity-30 flex items-center justify-center">
          <div className="bg-white p-6 rounded-lg w-96">
            <h3 className="text-xl font-bold mb-4">{selectedVehicle.vehicleNumber} - Update Health</h3>
            
            <div className="space-y-3">
              <label>
                Engine Health:
                <input
                  type="number"
                  name="engineHealth"
                  value={health.engineHealth}
                  onChange={handleChange}
                  className="w-full border p-1 rounded mt-1"
                  min={0}
                  max={100}
                />
              </label>

              <label>
                Brakes Health:
                <input
                  type="number"
                  name="brakesHealth"
                  value={health.brakesHealth}
                  onChange={handleChange}
                  className="w-full border p-1 rounded mt-1"
                  min={0}
                  max={100}
                />
              </label>

              <label>
                Accelerator Health:
                <input
                  type="number"
                  name="acceleratorHealth"
                  value={health.acceleratorHealth}
                  onChange={handleChange}
                  className="w-full border p-1 rounded mt-1"
                  min={0}
                  max={100}
                />
              </label>

              <label>
                Fuel Level:
                <input
                  type="number"
                  name="fuelLevel"
                  value={health.fuelLevel}
                  onChange={handleChange}
                  className="w-full border p-1 rounded mt-1"
                  min={0}
                  max={100}
                />
              </label>
            </div>

            <div className="flex justify-end mt-4 space-x-2">
              <button
                className="px-4 py-2 bg-gray-300 rounded"
                onClick={() => setSelectedVehicle(null)}
              >
                Cancel
              </button>
              <button
                className="px-4 py-2 bg-green-500 text-white rounded"
                onClick={updateHealth}
              >
                Save
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
