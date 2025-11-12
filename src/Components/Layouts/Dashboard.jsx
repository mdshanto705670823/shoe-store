import React, { useContext, useState } from "react";
import { DataContext } from "../UserContext";
import { FaBox, FaShoppingCart, FaUsers, FaHeart, FaChartLine, FaBell } from "react-icons/fa";
import { Line } from "react-chartjs-2";
import "chart.js/auto";

const Dashboard = () => {
  const { data, addToCart, wishlist } = useContext(DataContext);
  const [sidebarOpen, setSidebarOpen] = useState(true);

  const chartData = {
    labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun"],
    datasets: [
      {
        label: "Orders",
        data: [12, 19, 8, 17, 24, 30],
        borderColor: "rgba(34,197,94,1)",
        backgroundColor: "rgba(34,197,94,0.2)",
        tension: 0.3,
      },
    ],
  };

  return (
    <div className="flex min-h-screen bg-gray-100 font-myfont2">
      <aside
        className={`bg-white shadow-lg p-6 transition-all duration-300 ${
          sidebarOpen ? "w-64" : "w-16"
        }`}
      >
        <div className="flex justify-between items-center mb-8">
          {sidebarOpen && <h1 className="font-bold text-xl">Dashboard</h1>}
          <button onClick={() => setSidebarOpen(!sidebarOpen)}>
            {sidebarOpen ? "⏴" : "⏵"}
          </button>
        </div>

        <nav className="flex flex-col gap-4 text-gray-700 text-sm">
          <a href="#" className="flex items-center gap-3 hover:text-green-600">
            <FaBox /> {sidebarOpen && "Products"}
          </a>
          <a href="#" className="flex items-center gap-3 hover:text-green-600">
            <FaShoppingCart /> {sidebarOpen && "Orders"}
          </a>
          <a href="#" className="flex items-center gap-3 hover:text-green-600">
            <FaHeart /> {sidebarOpen && "Wishlist"}
          </a>
          <a href="#" className="flex items-center gap-3 hover:text-green-600">
            <FaUsers /> {sidebarOpen && "Users"}
          </a>
          <a href="#" className="flex items-center gap-3 hover:text-green-600">
            <FaChartLine /> {sidebarOpen && "Analytics"}
          </a>
          <a href="#" className="flex items-center gap-3 hover:text-green-600">
            ⚙️ {sidebarOpen && "Settings"}
          </a>
        </nav>
      </aside>

      <main className="flex-1 p-6">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-2xl font-bold text-gray-800">Welcome, Admin</h2>
          <div className="flex items-center gap-4">
            <FaBell className="text-xl text-gray-600 cursor-pointer" />
            <img
              src="https://i.ibb.co/5nC0JxX/avatar.png"
              alt="Admin"
              className="w-10 h-10 rounded-full"
            />
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          <div className="bg-white p-4 rounded-xl shadow flex items-center gap-4">
            <FaBox className="text-3xl text-green-500" />
            <div>
              <p className="text-gray-500">Total Products</p>
              <p className="text-xl font-bold">{data.length}</p>
            </div>
          </div>

          <div className="bg-white p-4 rounded-xl shadow flex items-center gap-4">
            <FaShoppingCart className="text-3xl text-blue-500" />
            <div>
              <p className="text-gray-500">Total Orders</p>
              <p className="text-xl font-bold">{addToCart.length}</p>
            </div>
          </div>

          <div className="bg-white p-4 rounded-xl shadow flex items-center gap-4">
            <FaHeart className="text-3xl text-red-500" />
            <div>
              <p className="text-gray-500">Wishlist Items</p>
              <p className="text-xl font-bold">{wishlist.length}</p>
            </div>
          </div>

          <div className="bg-white p-4 rounded-xl shadow flex items-center gap-4">
            <FaUsers className="text-3xl text-yellow-500" />
            <div>
              <p className="text-gray-500">Total Users</p>
              <p className="text-xl font-bold">245</p>
            </div>
          </div>
        </div>

        <div className="bg-white p-6 rounded-xl shadow mb-8">
          <h3 className="font-bold text-gray-800 mb-4">Orders Analytics</h3>
          <Line data={chartData} />
        </div>

        <div className="bg-white p-6 rounded-xl shadow">
          <h3 className="font-bold text-gray-800 mb-4">Recent Orders</h3>
          <table className="min-w-full border border-gray-200 text-left">
            <thead>
              <tr className="bg-gray-100">
                <th className="px-4 py-2">Product</th>
                <th className="px-4 py-2">User</th>
                <th className="px-4 py-2">Quantity</th>
                <th className="px-4 py-2">Price</th>
              </tr>
            </thead>
            <tbody>
              {addToCart.slice(-5).map((item, index) => (
                <tr key={index} className="border-b">
                  <td className="px-4 py-2">{item.name}</td>
                  <td className="px-4 py-2">John Doe</td>
                  <td className="px-4 py-2">{item.quantity || 1}</td>
                  <td className="px-4 py-2">${item.price}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </main>
    </div>
  );
};

export default Dashboard;
