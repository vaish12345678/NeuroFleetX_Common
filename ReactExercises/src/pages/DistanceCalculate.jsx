
import React, { useState } from "react";
import axios from "axios";

export default function DistanceCalculator() {
  const [origin, setOrigin] = useState("");
  const [destination, setDestination] = useState("");
  const [result, setResult] = useState(null);

  const calculateDistance = async () => {
    try {
      const res = await axios.get("http://localhost:8081/distance", {
        params: { origin, destination },
      });
      setResult(res.data);
    } catch (err) {
      console.log("Error:", err);
    }
  };

  return (
    <div className="p-6 max-w-xl mx-auto bg-white shadow rounded">
      <h1 className="text-2xl font-bold mb-4">Distance Calculator</h1>

      <input
        className="p-2 border rounded w-full mb-3"
        placeholder="Enter Origin (e.g., Pune)"
        value={origin}
        onChange={(e) => setOrigin(e.target.value)}
      />

      <input
        className="p-2 border rounded w-full mb-3"
        placeholder="Enter Destination (e.g., Mumbai)"
        value={destination}
        onChange={(e) => setDestination(e.target.value)}
      />

      <button
        className="bg-blue-600 text-white px-4 py-2 rounded"
        onClick={calculateDistance}
      >
        Calculate
      </button>

      {result && (
        <div className="mt-4 p-3 bg-gray-100 border rounded">
          <p><strong>Distance:</strong> {result.rows[0].elements[0].distance.text}</p>
          <p><strong>Duration:</strong> {result.rows[0].elements[0].duration.text}</p>
        </div>
      )}
    </div>
  );
}
