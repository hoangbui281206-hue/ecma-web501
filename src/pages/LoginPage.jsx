// src/pages/LoginPage.jsx
import { useState } from "react";
import axios from "axios";
import { useNavigate, Link } from "react-router-dom";

export default function LoginPage() {
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
      const res = await axios.post("http://localhost:3001/login", form);

      // Lưu token
      localStorage.setItem("token", res.data.token);
      localStorage.setItem("user", JSON.stringify(res.data.user));

      alert("Đăng nhập thành công!");

      navigate("/");
    } catch (err) {
      setError(err.response?.data?.message || "Sai tài khoản hoặc mật khẩu");
    }
  };

  return (
    <div className="max-w-md mx-auto bg-white shadow-md rounded-lg p-8 mt-10">
      <h1 className="text-2xl font-semibold mb-4 text-center text-blue-600">
        Đăng nhập
      </h1>

      {error && <p className="text-red-500 mb-3">{error}</p>}

      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label className="block mb-1 font-semibold">Username</label>
          <input
            type="text"
            name="username"
            value={form.username}
            onChange={handleChange}
            className="border px-3 py-2 w-full rounded-lg focus:ring focus:ring-blue-300"
            placeholder="Nhập username..."
          />
        </div>

        <div>
          <label className="block mb-1 font-semibold">Password</label>
          <input
            type="password"
            name="password"
            value={form.password}
            onChange={handleChange}
            className="border px-3 py-2 w-full rounded-lg focus:ring focus:ring-blue-300"
            placeholder="Nhập password..."
          />
        </div>

        <button
          type="submit"
          className="bg-blue-600 hover:bg-blue-700 text-white w-full py-2 rounded-lg transition shadow"
        >
          Đăng nhập
        </button>
      </form>

      <p className="mt-4 text-sm text-center">
        Chưa có tài khoản?{" "}
        <Link className="text-blue-500 hover:underline" to="/register">
          Đăng ký
        </Link>
      </p>
    </div>
  );
}
