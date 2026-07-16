import { useState } from "react";

export default function Customers() {
  const [customers, setCustomers] = useState([
    {
      id: 1,
      name: "Hadeer Hamed",
      phone: "01123548458",
      email: "HadeerHamed@mail.com",
      orders: 5,
    },
    {
      id: 2,
      name: "Mohamed Ebrahim",
      phone: "0114077575",
      email: "MohamedEbrahim@mail.com",
      orders: 2,
    },
     {
      id: 3,
      name: "TulinMohamed",
      phone: "0112244157",
      email: "TulinMohamed@mail.com",
      orders: 4,
    },
    {
      id: 4,
      name: "MohamedHamed",
      phone: "01123548458",
      email: "MohamedHamed@mail.com",
      orders: 3,
    },
     {
      id: 5,
      name: "RaniaHamed",
      phone: "01122445671",
      email: "RaniaHamed@mail.com",
      orders: 2,
    },
     {
      id: 6,
      name: "AhmedEbrahim",
      phone: "01111453986",
      email: "AhmedEbrahim@mail.com",
      orders: 4,
    },
  ]);

  const [search, setSearch] = useState("");
  const [isModalOpen, setIsModalOpen] = useState(false);

  const [form, setForm] = useState({
    name: "",
    phone: "",
    email: "",
  });
  const filtered = customers.filter((c) =>
    c.name.toLowerCase().includes(search.toLowerCase())
  );

  const addCustomer = () => {
    if (!form.name || !form.phone) return;

    setCustomers([
      ...customers,
      {
        id: Date.now(),
        name: form.name,
        phone: form.phone,
        email: form.email,
        orders: 0,
      },
    ]);

    setForm({ name: "", phone: "", email: "" });
    setIsModalOpen(false);
  };

  const deleteCustomer = (id) => {
    setCustomers(customers.filter((c) => c.id !== id));
  };
  return (
    <div className="p-6 bg-gray-100 min-h-screen">

      {/* HEADER */}
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-bold">Customers</h1>

        <button
          onClick={() => setIsModalOpen(true)}
          className="bg-blue-600 text-white px-4 py-2 rounded-lg"
        >
          + Add Customer
        </button>
      </div>

      {/* SEARCH */}
      <input
        type="text"
        placeholder="Search customer..."
        className="w-full p-2 mb-6 border rounded-lg"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />

      {/* TABLE */}
      <div className="bg-white rounded-xl shadow overflow-hidden">
        <table className="w-full">
          <thead className="bg-gray-200 text-left">
            <tr>
              <th className="p-3">Name</th>
              <th className="p-3">Phone</th>
              <th className="p-3">Email</th>
              <th className="p-3">Orders</th>
              <th className="p-3">Actions</th>
            </tr>
          </thead>

          <tbody>
            {filtered.map((c) => (
              <tr key={c.id} className="border-t">
                <td className="p-3">{c.name}</td>
                <td className="p-3">{c.phone}</td>
                <td className="p-3">{c.email}</td>
                <td className="p-3">{c.orders}</td>
                <td className="p-3">
                  <button
                    onClick={() => deleteCustomer(c.id)}
                    className="text-red-500"
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* MODAL */}
      {isModalOpen && (
        <div className="fixed inset-0 bg-black/40 flex items-center justify-center">
          <div className="bg-white p-5 rounded-xl w-[400px]">

            <h2 className="text-xl font-bold mb-4">Add Customer</h2>

            <input
              placeholder="Name"
              className="w-full border p-2 mb-2 rounded"
              value={form.name}
              onChange={(e) => setForm({ ...form, name: e.target.value })}
            />

            <input
              placeholder="Phone"
              className="w-full border p-2 mb-2 rounded"
              value={form.phone}
              onChange={(e) => setForm({ ...form, phone: e.target.value })}
            />

            <input
              placeholder="Email"
              className="w-full border p-2 mb-2 rounded"
              value={form.email}
              onChange={(e) => setForm({ ...form, email: e.target.value })}
            />

            <div className="flex justify-end gap-2 mt-3">
              <button
                onClick={() => setIsModalOpen(false)}
                className="px-3 py-1 bg-gray-300 rounded"
              >
                Cancel
              </button>

              <button
                onClick={addCustomer}
                className="px-3 py-1 bg-blue-600 text-white rounded"
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
 