
import { useState, useEffect } from "react";
import axios from "axios";

export default function Driver() {
  const [drivers, setDrivers] = useState([]);
  const [form, setForm] = useState({ name: "", email: "", gmailAccount: "" });

  useEffect(() => {
    axios
      .get("http://localhost:8081/drivers")
      .then((res) => setDrivers(res.data))
      .catch((err) => console.log(err));
  }, []);

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .post("http://localhost:8081/drivers", form)
      .then((res) => {
        setDrivers([...drivers, res.data]);
        setForm({ name: "", email: "", gmailAccount: "" });
      })
      .catch((err) => console.log(err));
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-start bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-100 p-6">
      <div className="w-full max-w-lg mt-10">
        <form
          onSubmit={handleSubmit}
          className="bg-white/90 backdrop-blur-xl rounded-3xl shadow-2xl p-8 border border-indigo-200"
        >
          <h2 className="text-2xl font-extrabold mb-6 text-center bg-gradient-to-r from-blue-700 via-indigo-600 to-purple-600 bg-clip-text text-transparent">
            🧑‍✈️ Driver Management
          </h2>

          <input
            name="name"
            placeholder="Name"
            value={form.name}
            onChange={handleChange}
            className="w-full mb-4 p-3 rounded-xl border border-indigo-200 focus:ring-2 focus:ring-indigo-400 focus:outline-none transition"
            required
          />

          <input
            name="email"
            placeholder="Email"
            type="email"
            value={form.email}
            onChange={handleChange}
            className="w-full mb-4 p-3 rounded-xl border border-indigo-200 focus:ring-2 focus:ring-indigo-400 focus:outline-none transition"
            required
          />

          <input
            name="gmailAccount"
            placeholder="Gmail Account"
            value={form.gmailAccount}
            onChange={handleChange}
            className="w-full mb-6 p-3 rounded-xl border border-indigo-200 focus:ring-2 focus:ring-indigo-400 focus:outline-none transition"
          />

          <button
            type="submit"
            className="w-full bg-gradient-to-r from-blue-600 via-purple-600 to-pink-500 text-white font-bold py-3 rounded-2xl shadow-lg hover:scale-105 transition-transform duration-200"
          >
            Add Driver
          </button>
        </form>

        {/* Drivers Table */}
        {drivers.length > 0 && (
          <div className="mt-10 overflow-x-auto bg-white/90 backdrop-blur-xl rounded-3xl shadow-2xl border border-indigo-200 p-4">
            <h3 className="text-xl font-semibold mb-4 text-center text-indigo-700">All Drivers</h3>
            <table className="w-full border-collapse border border-indigo-200 text-center">
              <thead>
                <tr className="bg-indigo-100">
                  <th className="border border-indigo-200 p-2">Name</th>
                  <th className="border border-indigo-200 p-2">Email</th>
                  <th className="border border-indigo-200 p-2">Gmail Account</th>
                </tr>
              </thead>
              <tbody>
                {drivers.map((d) => (
                  <tr key={d.id} className="hover:bg-indigo-50">
                    <td className="border border-indigo-200 p-2">{d.name}</td>
                    <td className="border border-indigo-200 p-2">{d.email}</td>
                    <td className="border border-indigo-200 p-2">{d.gmailAccount}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </div>
    </div>
  );
}
