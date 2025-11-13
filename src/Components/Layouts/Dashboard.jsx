import React, { useContext, useState } from "react";
import { DataContext } from "../UserContext";
import {
  FaBox,
  FaShoppingCart,
  FaUsers,
  FaHeart,
  FaChartLine,
  FaBell,
} from "react-icons/fa";
import { Line } from "react-chartjs-2";
import "chart.js/auto";
import { h1 } from "motion/react-client";
import { Link } from "react-router-dom";

const Dashboard = () => {
  const { data, addToCart, wishlist,users } = useContext(DataContext);
  const [sidebarOpen, setSidebarOpen] = useState(false);
  console.log(data)

  const chartData = {
    labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun","Jul"],
    datasets: [
      {
        label: "Orders",
        data: [12, 19, 8, 17, 24, 30,25],
        borderColor: "rgba(34,197,94,1)",
        backgroundColor: "rgba(34,197,94,0.2)",
        tension: 0.3,
      },
    ],
  };

  return (
    <div className="flex flex-col md:flex-row min-h-screen bg-gray-100 font-myfont2">
      
      <aside
        className={`fixed md:static top-0 left-0 z-50 h-full bg-white shadow-lg p-6 transition-all duration-300 
        ${sidebarOpen ? "w-64" : "w-0 md:w-20"} 
        overflow-hidden md:block`}
      >
        <div className="flex justify-between items-center mb-8">
          {sidebarOpen && (
            <h1 className="font-bold text-xl whitespace-nowrap">Dashboard</h1>
          )}
          <button
            className="md:hidden text-xl"
            onClick={() => setSidebarOpen(!sidebarOpen)}
          >
            {sidebarOpen ? "✖" : "☰"}
          </button>
        </div>

        <nav className="flex flex-col gap-4 text-gray-700 text-sm">
          <Link to="/totalProducts" className="flex items-center gap-3 hover:text-green-600">
            <FaBox /> {sidebarOpen && "Products"}
          </Link>
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

      
      {sidebarOpen && (
        <div
          className="fixed inset-0 bg-black/30 md:hidden"
          onClick={() => setSidebarOpen(false)}
        ></div>
      )}

     
      <main className="flex-1 p-4 md:p-6 mt-16 md:mt-0">
       
        <div className="flex justify-between items-center mb-6 flex-wrap">
          <h2 className="text-xl md:text-2xl font-bold text-gray-800">
            Welcome, Admin
          </h2>
          <div className="flex items-center gap-4 mt-2 md:mt-0">
            <FaBell className="text-xl text-gray-600 cursor-pointer" />
            <img
              src="https://i.ibb.co/5nC0JxX/avatar.png"
              alt="Admin"
              className="w-9 h-9 md:w-10 md:h-10 rounded-full"
            />
          </div>
        </div>

        
        <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 mb-8">
          <div className="bg-white p-4 rounded-xl shadow flex items-center gap-3 sm:gap-4">
            <FaBox className="text-2xl md:text-3xl text-green-500" />
            <div>
              <p className="text-gray-500 text-sm md:text-base">
                Total Products
              </p>
             
              <p className="text-lg text-black md:text-xl font-bold">{data.length}</p>
            </div>
          </div>

          <div className="bg-white p-4 rounded-xl shadow flex items-center gap-3 sm:gap-4">
            <FaShoppingCart className="text-2xl md:text-3xl text-blue-500" />
            <div>
              <p className="text-gray-500 text-sm md:text-base">
                Total Orders
              </p>
              <p  className="text-lg text-black md:text-xl font-bold">{addToCart.length}</p>
            </div>
          </div>

          <div className="bg-white p-4 rounded-xl shadow flex items-center gap-3 sm:gap-4">
            <FaHeart className="text-2xl md:text-3xl text-red-500" />
            <div>
              <p className="text-gray-500 text-sm md:text-base">
                Wishlist Items
              </p>
              <p className="text-lg text-black md:text-xl font-bold">{wishlist.length}</p>
            </div>
          </div>

          <div className="bg-white p-4 rounded-xl shadow flex items-center gap-3 sm:gap-4">
            <FaUsers className="text-2xl md:text-3xl text-yellow-500" />
            <div>
              <p className="text-gray-500 text-sm md:text-base">Total Users</p>
              <p className="text-lg text-black md:text-xl font-bold">{users.length}</p>
            </div>
          </div>
        </div>

      
        <div className="bg-white p-4 md:p-6 rounded-xl shadow mb-8">
          <h3 className="font-bold text-gray-800 mb-4 text-lg md:text-xl">
            Orders Analytics
          </h3>
          <div className="w-full overflow-x-auto">
            <Line data={chartData} />
          </div>
        </div>

        <div className="bg-white p-4 md:p-6 rounded-xl shadow ">
          <h3 className="font-bold text-gray-800 mb-4 text-lg md:text-xl">
            Recent Orders
          </h3>
          <div className="overflow-x-auto">
            <table className="min-w-full border border-gray-200 text-left text-sm md:text-base">
              <thead>
                <tr className="bg-gray-100 text-black">
                  <th className="px-4 py-2">Product</th>
                  <th className="px-4 py-2">User</th>
                  <th className="px-4 py-2">Quantity</th>
                  <th className="px-4 py-2">Price</th>
                </tr>
              </thead>
              <tbody>
                {addToCart.slice(-5).map((item, index) => (
                  <tr key={index} className="border-b text-black hover:bg-gray-50">
                    <td className="px-4 py-2">{item.name}</td>
                    <td className="px-4 py-2">{users.map(u=>(
                      <h1 key={u.id}>{u.name}</h1>
                    ))}</td>
                    <td className="px-4 py-2">{item.quantity || 1}</td>
                    <td className="px-4 py-2">${item.price}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Dashboard;
