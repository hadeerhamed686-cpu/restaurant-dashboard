import { useState } from "react";

const ordersData = [
  {
    id: 101,
    customer: "Hadeer Hamed",
    status: "Pending",
    total: 250,
    date: "15 Jun 2026",
  },
  {
    id: 102,
    customer: "Mohamed Ebrahim",
    status: "Delivered",
    total: 180,
    date: "14 Jun 2026",
  },
  {
    id: 103,
    customer: "Tulin Mohamed",
    status: "Preparing",
    total: 320,
    date: "13 Jun 2026",
  },
  {
    id: 104,
    customer: "Mohamed Hamed",
    status: "Pending",
    total: 150,
    date: "12 Jun 2026",
  },
  {
    id: 105,
    customer: "Rania Hamed",
    status: "Pending",
    total: 200,
    date: "13 Jun 2026",
  },
   {
    id: 106,
    customer: "Ahmed Ebrahim",
    status: "Delivered",
    total: 350,
    date: "13 Jun 2026",
  },
];

const statusStyles = {
  Pending: "bg-yellow-100 text-yellow-700",
  Delivered: "bg-green-100 text-green-700",
  Preparing: "bg-blue-100 text-blue-700",
};

export default function Orders() {
  const [search, setSearch] = useState("");
  const [filter, setFilter] = useState("All");

  const filteredOrders = ordersData.filter((order) => {
    const matchesSearch = order.customer
      .toLowerCase()
      .includes(search.toLowerCase());

    const matchesFilter =
      filter === "All" ? true : order.status === filter;

    return matchesSearch && matchesFilter;
  });

  return (
  <div className="p-6">
    {/* Header */}
    <div className="flex flex-col lg:flex-row justify-between gap-4 mb-6">
      <div>
        <h1 className="text-3xl font-bold text-gray-800">
          Orders Management
        </h1>
        <p className="text-gray-500 mt-1">
          Manage and track restaurant orders
        </p>
      </div>

      <div className="flex gap-3 flex-col sm:flex-row">
        <input
          type="text"
          placeholder="Search customer..."
          className="border px-4 py-2 rounded-xl focus:outline-none focus:ring-2 focus:ring-indigo-500"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />

        <select
          className="border px-4 py-2 rounded-xl"
          value={filter}
          onChange={(e) => setFilter(e.target.value)}
        >
          <option>All</option>
          <option>Pending</option>
          <option>Preparing</option>
          <option>Delivered</option>
        </select>
      </div>
    </div>

    {/* Stats Card */}
    <div className="bg-white rounded-2xl shadow p-5 mb-6">
      <h3 className="text-gray-500 text-sm">Total Orders</h3>
      <p className="text-3xl font-bold text-indigo-600">
        {filteredOrders.length}
      </p>
    </div>

    {/* Orders Table */}
    <div className="bg-white rounded-2xl shadow overflow-hidden">
      <table className="w-full">
        <thead className="bg-gray-100 text-gray-600">
          <tr>
            <th className="p-4 text-left">Order ID</th>
            <th className="p-4 text-left">Customer</th>
            <th className="p-4 text-left">Date</th>
            <th className="p-4 text-left">Status</th>
            <th className="p-4 text-left">Total</th>
            <th className="p-4 text-right">Actions</th>
          </tr>
        </thead>

        <tbody>
          {filteredOrders.map((order) => (
            <tr
              key={order.id}
              className="border-t hover:bg-gray-50 transition"
            >
              <td className="p-4 font-semibold">
                #{order.id}
              </td>

              <td className="p-4">
                {order.customer}
              </td>

              <td className="p-4 text-gray-500">
                {order.date}
              </td>

              <td className="p-4">
                <span
                  className={`px-3 py-1 rounded-full text-sm font-medium ${
                    statusStyles[order.status]
                  }`}
                >
                  {order.status}
                </span>
              </td>

              <td className="p-4 font-bold">
                {order.total} EGP
              </td>

              <td className="p-4">
                <div className="flex justify-end gap-2">
                  <button className="px-4 py-2 bg-indigo-500 text-white rounded-lg hover:bg-indigo-600 transition">
                    View
                  </button>

                  <button className="px-4 py-2 bg-red-500 text-white rounded-lg hover:bg-red-600 transition">
                    Delete
                  </button>
                </div>
              </td>
            </tr>
          ))}

          {filteredOrders.length === 0 && (
            <tr>
              <td
                colSpan="6"
                className="text-center p-8 text-gray-500"
              >
                No orders found
              </td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  </div>
);
}