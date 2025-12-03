// src/pages/RegisterPage.jsx
import { useState } from "react";
import axios from "axios";
import { useNavigate, Link } from "react-router-dom";

export default function RegisterPage() {
  const [form, setForm] = useState({ username: "", password: "" });
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");

    try {
      await axios.post("http://localhost:3000/register", form);
      alert("Đăng ký thành công, mời bạn đăng nhập");
      navigate("/login");
    } catch (err) {
      setError(err.response?.data?.message || "Có lỗi xảy ra");
    }
  };

  return (
    <div className="max-w-md mx-auto">
      <h1 className="text-2xl font-semibold mb-4">Register</h1>

      {error && <p className="text-red-500 mb-2">{error}</p>}

      <form onSubmit={handleSubmit} className="space-y-3">
        <div>
          <label className="block mb-1">Username</label>
          <input
            name="username"
            value={form.username}
            onChange={handleChange}
            className="border px-3 py-2 w-full"
            placeholder="Nhập username"
          />
        </div>

        <div>
          <label className="block mb-1">Password</label>
          <input
            type="password"
            name="password"
            value={form.password}
            onChange={handleChange}
            className="border px-3 py-2 w-full"
            placeholder="Nhập password"
          />
        </div>

        <button
          type="submit"
          className="bg-blue-500 text-white px-4 py-2 rounded"
        >
          Đăng ký
        </button>
      </form>

      <p className="mt-3 text-sm">
        Đã có tài khoản?{" "}
        <Link to="/login" className="text-blue-500">
          Đăng nhập
        </Link>
      </p>
    </div>
  );
}
