import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Add() {
  const navigate = useNavigate();

  const [form, setForm] = useState({
    name: "",
    destination: "",
    duration: "",
    price: "",
    image: "",
    description: "",
    available: "",
    category: "tour nội địa",
    active: true
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;

    setForm({
      ...form,
      [name]: type === "checkbox" ? checked : value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    await fetch("http://localhost:3001/tours", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(form),
    });

    alert("Thêm tour thành công!");
    navigate("/");
  };

  return (
    <div className="max-w-xl mx-auto bg-white p-8 mt-10 shadow-lg rounded-lg">
      <h2 className="text-2xl font-bold text-center text-green-600 mb-6">
        Thêm tour mới
      </h2>

      <form onSubmit={handleSubmit} className="space-y-4">

        <div>
          <label className="font-semibold">Tên tour</label>
          <input
            name="name"
            className="w-full border p-2 rounded"
            onChange={handleChange}
            required
          />
        </div>

        <div>
          <label className="font-semibold">Điểm đến</label>
          <input
            name="destination"
            className="w-full border p-2 rounded"
            onChange={handleChange}
            required
          />
        </div>

        <div>
          <label className="font-semibold">Thời gian</label>
          <input
            name="duration"
            className="w-full border p-2 rounded"
            onChange={handleChange}
            required
          />
        </div>

        <div>
          <label className="font-semibold">Giá</label>
          <input
            type="number"
            name="price"
            className="w-full border p-2 rounded"
            onChange={handleChange}
            required
          />
        </div>

        <div>
          <label className="font-semibold">Còn lại</label>
          <input
            type="number"
            name="available"
            className="w-full border p-2 rounded"
            onChange={handleChange}
            required
          />
        </div>

        <div>
          <label className="font-semibold">Ảnh (URL)</label>
          <input
            name="image"
            className="w-full border p-2 rounded"
            onChange={handleChange}
            required
          />
        </div>

        <div>
          <label className="font-semibold">Mô tả</label>
          <textarea
            name="description"
            rows="3"
            className="w-full border p-2 rounded"
            onChange={handleChange}
          ></textarea>
        </div>

        {/* CATEGORY */}
        <div>
          <label className="font-semibold">Danh mục</label>
          <select
            name="category"
            value={form.category}
            onChange={handleChange}
            className="w-full border p-2 rounded"
          >
            <option value="tour nội địa">Tour nội địa</option>
            <option value="tour quốc tế">Tour quốc tế</option>
          </select>
        </div>

        {/* ACTIVE */}
        <div className="flex items-center gap-2">
          <input
            type="checkbox"
            name="active"
            checked={form.active}
            onChange={handleChange}
          />
          <label className="font-semibold">Tour đang hoạt động</label>
        </div>

        <button
          type="submit"
          className="w-full bg-green-600 text-white py-2 rounded-lg hover:bg-green-700 transition"
        >
          Lưu tour
        </button>
      </form>
    </div>
  );
}
