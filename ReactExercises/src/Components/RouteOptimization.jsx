import React, { useState } from "react";
import axios from "axios"; // make sure axios is installed
import { MapContainer, TileLayer, Polyline, Marker, Popup } from "react-leaflet";
import polyline from "@mapbox/polyline";
import "leaflet/dist/leaflet.css";

export default function RouteOptimization() {
  const [start, setStart] = useState({ lat: "", lng: "" });
  const [end, setEnd] = useState({ lat: "", lng: "" });
  const [route, setRoute] = useState(null);
  const [decodedPath, setDecodedPath] = useState([]);
  const [loading, setLoading] = useState(false);

  const run = async () => {
    if (!start.lat || !start.lng || !end.lat || !end.lng) {
      alert("Please enter all coordinates");
      return;
    }

    setLoading(true);
    try {
     const res = await axios.post("http://localhost:8081/route/optimize", {
  startLat: parseFloat(start.lat),
  startLng: parseFloat(start.lng),
  endLat: parseFloat(end.lat),
  endLng: parseFloat(end.lng),
});


      setRoute(res.data);

      if (res.data.geometry) {
        const decoded = polyline.decode(res.data.geometry); // returns [[lat, lng], ...]
        setDecodedPath(decoded.map(([lat, lng]) => [lat, lng]));
      }

    } catch (err) {
      console.error(err);
      alert("Failed: " + (err?.response?.data?.message || err.message));
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="p-6 bg-gray-100 min-h-screen">
      <h2 className="mb-6 text-2xl font-bold text-center">AI Route Optimization + Map</h2>

      <div className="max-w-3xl mx-auto border rounded-lg shadow bg-white p-6">
        <h3 className="text-lg font-semibold mb-4">Enter Route Coordinates</h3>

        {/* Inputs */}
        <div className="grid grid-cols-2 gap-4 mb-4">
          <input
            type="number"
            placeholder="Start Latitude"
            value={start.lat}
            onChange={e => setStart({ ...start, lat: e.target.value })}
            className="p-2 border rounded"
          />
          <input
            type="number"
            placeholder="Start Longitude"
            value={start.lng}
            onChange={e => setStart({ ...start, lng: e.target.value })}
            className="p-2 border rounded"
          />
          <input
            type="number"
            placeholder="End Latitude"
            value={end.lat}
            onChange={e => setEnd({ ...end, lat: e.target.value })}
            className="p-2 border rounded"
          />
          <input
            type="number"
            placeholder="End Longitude"
            value={end.lng}
            onChange={e => setEnd({ ...end, lng: e.target.value })}
            className="p-2 border rounded"
          />
        </div>

        <button
          onClick={run}
          disabled={loading}
          className={`px-6 py-2 rounded text-white ${loading ? "bg-gray-400" : "bg-blue-600 hover:bg-blue-700"}`}
        >
          {loading ? "Running..." : "Optimize Route"}
        </button>

        {/* Result metrics */}
        {route && (
          <div className="mt-4 p-4 border rounded bg-gray-50">
            <p>Distance: <strong>{route.distance.toFixed(2)} m</strong></p>
            <p>Duration: <strong>{route.duration.toFixed(2)} sec</strong></p>
          </div>
        )}

        {/* Map */}
        {decodedPath.length > 0 && (
          <div className="mt-6">
            <MapContainer
              center={decodedPath[0] || [0, 0]}
              zoom={13}
              style={{ height: "400px", width: "100%" }}
            >
              <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />

              <Marker position={decodedPath[0]}>
                <Popup>Start</Popup>
              </Marker>

              <Marker position={decodedPath[decodedPath.length - 1]}>
                <Popup>End</Popup>
              </Marker>

              <Polyline positions={decodedPath} color="blue" />
            </MapContainer>
          </div>
        )}
      </div>
    </div>
  );
}


// import React, { useState } from "react";
// import axios from "axios";
// import { MapContainer, TileLayer, Polyline, Marker, Popup } from "react-leaflet";
// import "leaflet/dist/leaflet.css";

// export default function RouteOptimization() {
//   const [startAddress, setStartAddress] = useState("");
//   const [endAddress, setEndAddress] = useState("");
//   const [route, setRoute] = useState(null);
//   const [loading, setLoading] = useState(false);

//   const run = async () => {
//     if (!startAddress || !endAddress) {
//       alert("Please enter both addresses");
//       return;
//     }

//     setLoading(true);
//     try {
//       const res = await axios.post("http://localhost:8081/route/optimize", {
//         startAddress,
//         endAddress,
//       });

//       if (res.data.error) {
//         alert(res.data.error);
//         setRoute(null);
//         return;
//       }

//       setRoute(res.data);
//     } catch (err) {
//       console.error(err);
//       alert("Failed: " + (err?.response?.data?.message || err.message));
//     } finally {
//       setLoading(false);
//     }
//   };

//   const geometry = route?.geometry || [];

//   return (
//     <div className="p-6 bg-gray-100 min-h-screen">
//       <h2 className="mb-6 text-2xl font-bold text-center">Driver Route Optimization</h2>

//       <div className="max-w-3xl mx-auto border rounded-lg shadow bg-white p-6">
//         <div className="grid grid-cols-1 gap-4 mb-4">
//           <input
//             type="text"
//             placeholder="Start Address"
//             value={startAddress}
//             onChange={(e) => setStartAddress(e.target.value)}
//             className="p-2 border rounded"
//           />
//           <input
//             type="text"
//             placeholder="End Address"
//             value={endAddress}
//             onChange={(e) => setEndAddress(e.target.value)}
//             className="p-2 border rounded"
//           />
//         </div>

//         <button
//           onClick={run}
//           disabled={loading}
//           className={`px-6 py-2 rounded text-white ${
//             loading ? "bg-gray-400" : "bg-blue-600 hover:bg-blue-700"
//           }`}
//         >
//           {loading ? "Running..." : "Optimize Route"}
//         </button>

//         {route && (
//           <div className="mt-4 p-4 border rounded bg-gray-50">
//             <p>Distance: <strong>{route.distance.toFixed(2)} m</strong></p>
//             <p>Duration: <strong>{route.duration.toFixed(2)} sec</strong></p>
//           </div>
//         )}

//         {geometry.length > 0 && (
//           <div className="mt-6">
//             <MapContainer
//               center={[geometry[0][1], geometry[0][0]]}
//               zoom={13}
//               style={{ height: "400px", width: "100%" }}
//             >
//               <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />

//               <Marker position={[geometry[0][1], geometry[0][0]]}>
//                 <Popup>Start</Popup>
//               </Marker>

//               <Marker position={[geometry[geometry.length - 1][1], geometry[geometry.length - 1][0]]}>
//                 <Popup>End</Popup>
//               </Marker>

//               <Polyline
//                 positions={geometry.map(([lng, lat]) => [lat, lng])}
//                 color="blue"
//               />
//             </MapContainer>
//           </div>
//         )}
//       </div>
//     </div>
//   );
// }
