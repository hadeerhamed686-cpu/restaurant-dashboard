import { useState } from "react";

export default function Analytics() {

  const [orders] = useState([
    { id: 1, total: 250 },
    { id: 2, total: 180 },
    { id: 3, total: 320 },
    { id: 4, total: 150 },
    { id: 4, total: 200 },
    { id: 4, total: 350 },


  ]);

  const [customers] = useState([
    { id: 1 },
    { id: 2 },
    { id: 3 },
    { id: 4 },
    { id: 5 },
    { id: 6 },
    

  ]);
  const totalOrders = orders.length;

  const totalRevenue = orders.reduce((sum, o) => sum + o.total, 0);

  const totalCustomers = customers.length;

  const averageOrder = totalOrders
    ? (totalRevenue / totalOrders).toFixed(2)
    : 0;
    return (
    <div className="p-6 bg-gray-100 min-h-screen">

      {/* HEADER */}
      <h1 className="text-2xl font-bold mb-6">Analytics Dashboard</h1>

      {/* CARDS */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">

        <div className="bg-white p-4 rounded-xl shadow">
          <h2 className="text-gray-500">Total Orders</h2>
          <p className="text-2xl font-bold">{totalOrders}</p>
        </div>

        <div className="bg-white p-4 rounded-xl shadow">
          <h2 className="text-gray-500">Total Revenue</h2>
          <p className="text-2xl font-bold text-green-600">
            ${totalRevenue}
          </p>
        </div>

        <div className="bg-white p-4 rounded-xl shadow">
          <h2 className="text-gray-500">Customers</h2>
          <p className="text-2xl font-bold">{totalCustomers}</p>
        </div>

        <div className="bg-white p-4 rounded-xl shadow">
          <h2 className="text-gray-500">Avg Order</h2>
          <p className="text-2xl font-bold text-blue-600">
            ${averageOrder}
          </p>
        </div>

      </div>
      {/* CHART */}
      <div className="mt-6 bg-white p-4 rounded-xl shadow">
        <h2 className="font-bold mb-4">Revenue Overview</h2>

        <div className="flex gap-2 items-end h-40">
          {orders.map((o) => (
            <div
              key={o.id}
              className="bg-orange-400 w-10"
              style={{ height: `${o.total / 2}px` }}
            ></div>
          ))}
        </div>
      </div>

    </div>
  );
}