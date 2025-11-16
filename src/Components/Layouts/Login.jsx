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
    <div className="text-black flex justify-center items-center min-h-screen bg-gray-100">
      <form
        onSubmit={handleSubmit}
        className="bg-white p-6 rounded-lg shadow-md w-80"
      >
        <h2 className="text-2xl font-semibold mb-4 text-center">Login</h2>

        <input
          type="text"
          name="name"
          placeholder="Your Name"
          value={form.name}
          onChange={handleChange}
          className="border text-black p-2 w-full mb-3 rounded"
          required
        />

        <input
          type="email"
          name="email"
          placeholder="Your Email"
          value={form.email}
          onChange={handleChange}
          className="border p-2 w-full mb-3 rounded"
          required
        />

        <input
          type="password"
          name="password"
          placeholder="Password"
          value={form.password}
          onChange={handleChange}
          className="border p-2 w-full mb-4 rounded"
          required
        />

        {error && <p className="text-red-500 text-sm mb-3">{error}</p>}

        <button
          type="submit"
          className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700"
        >
          Login
        </button>
      </form>
    </div>
  );
};

export default Login;
