// src/pages/List.jsx
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import toast from "react-hot-toast";

function List() {
  const [tours, setTours] = useState([]);
  const [loading, setLoading] = useState(true);

  // Fetch danh sách tours
  const loadTours = () => {
    fetch("http://localhost:3001/tours")
      .then((res) => res.json())
      .then((data) => {
        setTours(data);
        setLoading(false);
      })
      .catch((err) => {
        console.error("Error fetching tours:", err);
        setLoading(false);
      });
  };

  useEffect(() => {
    loadTours();
  }, []);

  // Xoá tour
  const handleDelete = async (id) => {
    const confirmDelete = window.confirm("Bạn có chắc muốn xoá tour này?");
    if (!confirmDelete) return;

    try {
      await fetch(`http://localhost:3001/tours/${id}`, {
        method: "DELETE",
      });

      toast.success("Xóa thành công");
      loadTours(); // load lại danh sách sau xoá
    } catch (error) {
      toast.error("Có lỗi xảy ra khi xoá!");
      console.error(error);
    }
  };

  if (loading) {
    return <p className="p-6">Đang tải dữ liệu...</p>;
  }

  return (
    <div className="p-6">
      <h1 className="text-3xl text-center font-bold text-blue-600 mb-6">
        Danh sách tours
      </h1>

      <div className="overflow-x-auto max-w-5xl mx-auto bg-white shadow-xl rounded-xl p-6">
        <table className="w-full border border-gray-300 rounded-lg">
          <thead className="bg-blue-50">
            <tr>
              <th className="px-4 py-2 border border-gray-300">#</th>
              <th className="px-4 py-2 border border-gray-300">Tên tour</th>
              <th className="px-4 py-2 border border-gray-300">Điểm đến</th>
              <th className="px-4 py-2 border border-gray-300">Thời gian</th>
              <th className="px-4 py-2 border border-gray-300">Giá</th>
              <th className="px-4 py-2 border border-gray-300">Còn lại</th>
              <th className="px-4 py-2 border border-gray-300">Hành động</th>
            </tr>
          </thead>

          <tbody>
            {tours.map((tour) => (
              <tr key={tour.id} className="hover:bg-blue-50 transition-all">
                <td className="px-4 py-2 border border-gray-300">{tour.id}</td>

                <td className="px-4 py-2 border border-gray-300 font-medium">
                  {tour.name}
                </td>

                <td className="px-4 py-2 border border-gray-300">
                  {tour.destination}
                </td>

                <td className="px-4 py-2 border border-gray-300">
                  {tour.duration}
                </td>

                <td className="px-4 py-2 border border-gray-300 text-green-600 font-semibold">
                  {tour.price.toLocaleString()} VND
                </td>

                <td className="px-4 py-2 border border-gray-300 text-blue-600 font-semibold">
                  {tour.available}
                </td>

                {/* NÚT SỬA + XOÁ */}
                <td className="px-4 py-2 border border-gray-300 flex gap-3">
                  {/* Nút SỬA */}
                  <Link
                    to={`/edit/${tour.id}`}
                    className="bg-yellow-500 text-white px-4 py-1 rounded hover:bg-yellow-600 transition"
                  >
                    Sửa
                  </Link>

                  {/* Nút XOÁ */}
                  <button
                    onClick={() => handleDelete(tour.id)}
                    className="bg-red-500 text-white px-4 py-1 rounded hover:bg-red-600 transition"
                  >
                    Xoá
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>

        {tours.length === 0 && (
          <p className="text-center text-gray-500 py-6">Không có tour nào!</p>
        )}
      </div>
    </div>
  );
}

export default List;
