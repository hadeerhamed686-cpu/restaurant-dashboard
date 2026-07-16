import { useState } from "react";

const Menu = () => {
  const [menu, setMenu] = useState([
    {
      id: 1,
      name: "برجر فراخ",
      price: 120,
      image:
        "https://images.unsplash.com/photo-1606755962773-d324e0a13086?auto=format&fit=crop&w=500&q=60",
      description:
        "عبارة عن دجاج مفروم متبل مقدم داخل خبز مع شوية إضافات زي الجبنة والخس",
      rating: 4,
      category: "Food",
    },
    {
      id: 2,
      name: "برجر لحمة",
      price: 90,
      image:
        "https://images.unsplash.com/photo-1550547660-d9450f859349?auto=format&fit=crop&w=500&q=60",
      description:
        "عبارة عن لحم مفروم متبل مقدم داخل خبز مع شوية إضافات زي الجبنة والخس والبصل",
      rating: 5,
      category: "Food",
    },
    {
      id: 3,
      name: "لحمة",
      price: 100,
      image:
        "https://images.unsplash.com/photo-1600891964599-f61ba0e24092?auto=format&fit=crop&w=500&q=60",
      description: "عبارة عن قطع اللحم المتبل والمشوي على الفحم",
      rating: 5,
      category: "Food",
    },
    {
      id: 4,
      name: "وجبة دجاج",
      price: 130,
      image:
        "https://images.unsplash.com/photo-1604908176997-125f25cc6f3d?auto=format&fit=crop&w=500&q=60",
      description: "عبارة عن قطع الدجاج المتبل والمشوي مع إضافة الخضار",
      rating: 4,
      category: "Food",
    },
    {
      id: 5,
      name: "وجبة أرز",
      price: 90,
      image:
        "https://images.unsplash.com/photo-1603133872878-684f208fb84b?auto=format&fit=crop&w=500&q=60",
      description: "وجبة أرز غنية بالبهارات مع إضافة بعض اللحوم",
      rating: 4,
      category: "Food",
    },
    {
      id: 6,
      name: "سلطة بالجمبرى",
      price: 40,
      image:
        "https://images.unsplash.com/photo-1551248429-40975aa4de74?auto=format&fit=crop&w=500&q=60",
      description:
        "عبارة عن مزيج من الخضروات المقرمشة المغمورة بصوص كريمي حلو",
      rating: 3,
      category: "Food",
    },
    {
      id: 7,
      name: "بطاطس",
      price: 50,
      image:
        "https://images.unsplash.com/photo-1573080496219-bb080dd4f877?auto=format&fit=crop&w=500&q=60",
      description: "عبارة عن بطاطس مقرمشة مع صوص الجبنة",
      rating: 4,
      category: "Food",
    },
    {
      id: 8,
      name: "وجبة لحم مدخن",
      price: 200,
      image:
        "https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&w=500&q=60",
      description:
        "عبارة عن لحم مدخن مع بطاطس مقرمشة ومزيج من الخضار الطازج",
      rating: 5,
      category: "Food",
    },
    {
      id: 9,
      name: "دجاج KFC",
      price: 190,
      image:
        "https://images.unsplash.com/photo-1626082927389-6cd097cdc6ec?auto=format&fit=crop&w=500&q=60",
      description: "عبارة عن الدجاج المقرمش مع التوابل الطازجة",
      rating: 4,
      category: "Food",
    },
    {
      id: 10,
      name: "بيتزا إيطالي",
      price: 200,
      image:
        "https://images.unsplash.com/photo-1513104890138-7c749659a591?auto=format&fit=crop&w=500&q=60",
      description:
        "عبارة عن بيتزا مغطاة بصلصة طماطم والموزاريلا الذائبة مع إضافة الخضار واللحوم",
      rating: 5,
      category: "Food",
    },
    {
      id: 11,
      name: "مكرونة بالبشاميل",
      price: 140,
      image:
        "https://images.unsplash.com/photo-1629115916087-7e8c114a24ed?auto=format&fit=crop&w=500&q=60",
      description: "عبارة عن مكرونة بصوص البشاميل والموزاريلا",
      category: "Food",
      rating: 4,
    },
    {
      id: 12,
      name: "مكرونة  بالصلصة",
      price: 80,
      image:"https://images.unsplash.com/photo-1621996346565-e3dbc646d9a9?auto=format&fit=crop&w=500&q=60",
      description: "عبارة عن مكرونة بصوص الطماطم الحارة",
      category: "Food",
      rating: 4,
    },
  ]);

  const [search, setSearch] = useState("");
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [editItem, setEditItem] = useState(null);

  const [form, setForm] = useState({
    name: "",
    price: "",
    image: "",
    description: "",
    category: "Food",
    rating: 0,
  });

  const filtered = menu.filter((item) =>
    item.name.toLowerCase().includes(search.toLowerCase())
  );
  const saveItem = () => {
    if (!form.name || !form.price) return;

    if (editItem) {
      setMenu((prev) =>
        prev.map((m) =>
          m.id === editItem.id
            ? {
                ...form,
                id: editItem.id,
                price: Number(form.price),
                rating: Number(form.rating || 0),
              }
            : m
        )
      );
    } else {
      setMenu((prev) => [
        ...prev,
        {
          ...form,
          id: Date.now(),
          price: Number(form.price),
          rating: Number(form.rating || 0),
        },
      ]);
    }

    setIsModalOpen(false);
    setEditItem(null);
    setForm({
      name: "",
      price: "",
      image: "",
      description: "",
      category: "Food",
      rating: 0,
    });
  };

  const handleDelete = (id) => {
    setMenu((prev) => prev.filter((item) => item.id !== id));
  };

  const openEditModal = (item) => {
    setEditItem(item);
    setForm(item);
    setIsModalOpen(true);
  };

  const openAddModal = () => {
    setEditItem(null);
    setForm({
      name: "",
      price: "",
      image: "",
      description: "",
      category: "Food",
      rating: 0,
    });
    setIsModalOpen(true);
  };

  return (
    <div className="p-6">
      {/* HEADER */}
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-bold">Menu</h1>

        <button
          onClick={openAddModal}
          className="bg-orange-500 text-white px-4 py-2 rounded-lg"
        >
          + Add Item
        </button>
      </div>

      {/* SEARCH */}
      <input
        type="text"
        placeholder="Search..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        className="border p-2 rounded-lg w-full mb-6"
      />
      {/* MENU GRID */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
        {filtered.map((item) => (
          <div
            key={item.id}
            className="bg-white p-4 border rounded-xl shadow-sm"
          >
            {/* IMAGE */}
            <img
              src={item.image}
              alt={item.name}
              className="w-full h-48 object-cover rounded-lg"
            />

            {/* NAME */}
            <h2 className="font-bold mt-2">{item.name}</h2>

            {/* DESCRIPTION */}
            <p className="text-sm text-gray-500">{item.description}</p>

            {/* PRICE */}
            <p className="font-bold text-orange-500 mt-2">${item.price}</p>

            {/* RATING */}
            <div className="text-yellow-400">
              {"★★★★★".split("").map((_, i) => (
                <span key={i}>{i < item.rating ? "★" : "☆"}</span>
              ))}
            </div>

            {/* ACTIONS */}
            <div className="flex gap-2 mt-3">
              <button
                onClick={() => openEditModal(item)}
                className="px-2 py-1 bg-blue-100 text-blue-600 rounded"
              >
                Edit
              </button>

              <button
                onClick={() => handleDelete(item.id)}
                className="px-2 py-1 bg-red-100 text-red-600 rounded"
              >
                Delete
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* MODAL */}
      {isModalOpen && (
        <div className="fixed inset-0 bg-black/40 flex items-center justify-center z-50">
          <div className="bg-white p-5 rounded-xl w-[400px]">
            <h2 className="text-lg font-bold mb-4">
              {editItem ? "Edit Item" : "Add New Item"}
            </h2>

            <input
              placeholder="Name"
              value={form.name}
              onChange={(e) => setForm({ ...form, name: e.target.value })}
              className="border w-full mb-2 p-2 rounded"
            />

            <input
              placeholder="Price"
              type="number"
              value={form.price}
              onChange={(e) => setForm({ ...form, price: e.target.value })}
              className="border w-full mb-2 p-2 rounded"
            />

            <input
              placeholder="Image URL"
              value={form.image}
              onChange={(e) => setForm({ ...form, image: e.target.value })}
              className="border w-full mb-2 p-2 rounded"
            />

            <textarea
              placeholder="Description"
              value={form.description}
              onChange={(e) =>
                setForm({ ...form, description: e.target.value })
              }
              className="border w-full mb-2 p-2 rounded"
            />

            <input
              placeholder="Rating"
              type="number"
              min="0"
              max="5"
              value={form.rating}
              onChange={(e) => setForm({ ...form, rating: e.target.value })}
              className="border w-full mb-2 p-2 rounded"
            />

            <div className="flex justify-end gap-2 mt-3">
              <button
                onClick={() => setIsModalOpen(false)}
                className="px-3 py-1 border rounded"
              >
                Cancel
              </button>

              <button
                onClick={saveItem}
                className="px-3 py-1 bg-orange-500 text-white rounded"
              >
                Save
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Menu;