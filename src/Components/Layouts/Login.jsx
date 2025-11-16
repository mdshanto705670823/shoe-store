import { useContext, useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { DataContext } from "../UserContext";
import Swal from "sweetalert2";
import toast from "react-hot-toast";

const Login = () => {
  const { login } = useContext(DataContext);
  const navigate = useNavigate();
  const location = useLocation();

  
  const from = location.state?.from?.pathname || "/dashboard";

  const [form, setForm] = useState({
    name: "",
    email: "",
    password: "",
  });

  const [error, setError] = useState("");

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!form.name || !form.email || !form.password) {
      toast.error("Please fill in all fields!");
      return;
    }

    const res = login(form.email, form.name, form.password);

    if (res.success) {
      Swal.fire({
        title: "Login Successful",
        icon: "success",
        timer: 1500,
        showConfirmButton: false,
      });

      navigate(from, { replace: true });
    } else {
      setError(res.message);
      toast.error(res.message);
    }
  };

  return (
  <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-500 via-indigo-500 to-purple-600 p-4">
    <form
      onSubmit={handleSubmit}
      className="backdrop-blur-xl bg-white/20 border border-white/30 shadow-2xl p-8 rounded-2xl w-80 sm:w-96 text-white"
    >
      <h2 className="text-3xl font-bold text-center mb-6 drop-shadow-md">
        Welcome Back
      </h2>

      <div className="mb-4">
        <label className="text-sm font-semibold">Name</label>
        <input
          type="text"
          name="name"
          placeholder="Your Name"
          value={form.name}
          onChange={handleChange}
          className="mt-1 bg-white/20 border border-white/30 text-white placeholder-gray-200 p-2 w-full rounded-md focus:outline-none focus:ring-2 focus:ring-white"
          required
        />
      </div>

      <div className="mb-4">
        <label className="text-sm font-semibold">Email</label>
        <input
          type="email"
          name="email"
          placeholder="Your Email"
          value={form.email}
          onChange={handleChange}
          className="mt-1 bg-white/20 border border-white/30 text-white placeholder-gray-200 p-2 w-full rounded-md focus:outline-none focus:ring-2 focus:ring-white"
          required
        />
      </div>

      <div className="mb-4">
        <label className="text-sm font-semibold">Password</label>
        <input
          type="password"
          name="password"
          placeholder="Password"
          value={form.password}
          onChange={handleChange}
          className="mt-1 bg-white/20 border border-white/30 text-white placeholder-gray-200 p-2 w-full rounded-md focus:outline-none focus:ring-2 focus:ring-white"
          required
        />
      </div>

      {error && (
        <p className="text-red-300 text-sm mb-4 bg-red-500/20 p-2 rounded">
          {error}
        </p>
      )}

      <button
        type="submit"
        className="w-full bg-white text-blue-700 font-semibold py-2 rounded-lg shadow-md hover:bg-gray-100 transition"
      >
        Login
      </button>

      <p className="text-center text-sm mt-4 text-gray-200">
        Powered by <span className="font-bold  uppercase">Kick fussion</span>
      </p>
    </form>
  </div>
);

};

export default Login;
