import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";

function Edit() {
  const { id } = useParams();
  const navigate = useNavigate();

  const [tour, setTour] = useState({
    name: "",
    destination: "",
    duration: "",
    price: "",
    image: "",
    description: "",
    available: "",
    category: "tour nội địa",  // default theo yêu cầu
    active: true               // default theo yêu cầu
  });

  const [loading, setLoading] = useState(true);

  // 1. Lấy dữ liệu tour theo ID
  useEffect(() => {
    fetch(`http://localhost:3001/tours/${id}`)
      .then(res => res.json())
      .then(data => {
        setTour({
          ...data,
          category: data.category || "tour nội địa",
          active: data.active ?? true
        });
        setLoading(false);
      })
      .catch(err => console.log(err));
  }, [id]);

  // 2. Handle change input
  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;

    setTour({
      ...tour,
      [name]: type === "checkbox" ? checked : value
    });
  };

  // 3. Submit cập nhật
  const handleSubmit = (e) => {
    e.preventDefault();

    fetch(`http://localhost:3001/tours/${id}`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(tour)
    }).then(() => {
      alert("Cập nhật tour thành công!");
      navigate("/");
    });
  };

  if (loading) return <p className="text-center p-6">Đang tải dữ liệu...</p>;

  return (
    <div className="max-w-xl mx-auto bg-white p-6 shadow rounded mt-6">
      <h1 className="text-2xl font-bold mb-4">Chỉnh sửa tour #{id}</h1>

      <form onSubmit={handleSubmit} className="space-y-4">
        
        <div>
          <label className="font-semibold">Tên tour</label>
          <input
            name="name"
            value={tour.name}
            onChange={handleChange}
            className="w-full border p-2 rounded"
            required
          />
        </div>

        <div>
          <label className="font-semibold">Điểm đến</label>
          <input
            name="destination"
            value={tour.destination}
            onChange={handleChange}
            className="w-full border p-2 rounded"
          />
        </div>

        <div>
          <label className="font-semibold">Thời gian</label>
          <input
            name="duration"
            value={tour.duration}
            onChange={handleChange}
            className="w-full border p-2 rounded"
          />
        </div>

        <div>
          <label className="font-semibold">Giá</label>
          <input
            type="number"
            name="price"
            value={tour.price}
            onChange={handleChange}
            className="w-full border p-2 rounded"
            required
          />
        </div>

        <div>
          <label className="font-semibold">Còn lại</label>
          <input
            type="number"
            name="available"
            value={tour.available}
            onChange={handleChange}
            className="w-full border p-2 rounded"
          />
        </div>

        <div>
          <label className="font-semibold">Ảnh (URL)</label>
          <input
            name="image"
            value={tour.image}
            onChange={handleChange}
            className="w-full border p-2 rounded"
          />
        </div>

        <div>
          <label className="font-semibold">Mô tả</label>
          <textarea
            name="description"
            value={tour.description}
            onChange={handleChange}
            className="w-full border p-2 rounded"
            rows={3}
          ></textarea>
        </div>

        {/* Nâng cao */}
        <div>
          <label className="font-semibold">Danh mục</label>
          <select
            name="category"
            value={tour.category}
            onChange={handleChange}
            className="w-full border p-2 rounded"
          >
            <option value="tour nội địa">Tour nội địa</option>
            <option value="tour quốc tế">Tour quốc tế</option>
          </select>
        </div>

        <div className="flex items-center gap-2">
          <input
            type="checkbox"
            name="active"
            checked={tour.active}
            onChange={handleChange}
          />
          <label className="font-semibold">Tour đang hoạt động</label>
        </div>

        <button
          type="submit"
          className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700"
        >
          Lưu thay đổi
        </button>
      </form>
    </div>
  );
}

export default Edit;
