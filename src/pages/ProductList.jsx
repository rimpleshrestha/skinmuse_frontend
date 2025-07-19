import React, { useState, useEffect } from "react";
import { axiosInstance } from "../../api/axiosinstance";
import toast from "react-hot-toast";
import { BiHeart } from "react-icons/bi";

const ProductList = () => {
  const [products, setProducts] = useState([]);
  const [editingId, setEditingId] = useState(null);
  const [editedName, setEditedName] = useState("");

  const handleDelete = (id) => {
    setProducts(products.filter((product) => product.id !== id));
  };

  console.log("Products:", products);
  const handleEdit = (id, name) => {
    setEditingId(id);
    setEditedName(name);
  };

  const handleSave = (id) => {
    setProducts((prev) =>
      prev.map((product) =>
        product.id === id ? { ...product, name: editedName } : product
      )
    );
    setEditingId(null);
    setEditedName("");
  };
  useEffect(() => {
    // Simulating fetching products from an API
    const fetchProducts = async () => {
      // Replace with actual API call
      const response = await axiosInstance.post("/post/saved");
      const data = await response.data;
      console.log("Fetched products:", data);
      setProducts(data.savedPosts || []);
    };
    fetchProducts();
  }, []);
  const handleSaveProduct = async (isSaved, id) => {
    try {
      let response;
      if (isSaved) {
        // Unsave the product
        response = await axiosInstance.delete(`/post/unsave/${id}`);
        if (response.status === 200) {
          setProducts((prev) => prev.filter((p) => p._id !== id));
          toast.success("Product unsaved and removed from the list!");
        }
      } else {
        // Save the product
        response = await axiosInstance.post(`/post/save/${id}`);
        if (response.status === 200) {
          setProducts((prev) =>
            prev.map((p) => (p._id === id ? { ...p, isSaved: true } : p))
          );
          toast.success("Product saved successfully!");
        }
      }
    } catch (error) {
      console.error("Error saving/unsaving product:", error);
    }
  };
  return (
    <div className="bg-gradient-to-b min-h-screen from-[#fad1e3] to-[#ff65aa]/10 py-10 px-4 font-kaisei">
      <h1
        className="text-4xl text-center font-bold text-[#A55166] mb-10"
        style={{ fontFamily: "'Julius Sans One', sans-serif" }}
      >
        🌿 Your Product List
      </h1>

      {products.length === 0 ? (
        <p className="text-center text-gray-500 text-lg italic">
          No products added to the list yet.
        </p>
      ) : (
        <div className="w-[90%] max-w-7xl grid grid-cols-3 gap-8">
          {products.map((product, idx) => (
            <div
              key={idx}
              onClick={() => openModal(product)}
              className="bg-white rounded-2xl relative shadow-lg p-4 flex flex-col cursor-pointer hover:shadow-xl transition"
            >
              <img
                src={product.image}
                alt=""
                className="rounded-xl object-cover w-full h-44 mb-4"
              />
              <div
                className={`min-h-[2rem] mb-2 text-center font-inter font-semibold text-lg ${
                  product.title ? "text-[#A55166]" : "text-gray-400"
                }`}
              >
                {product.title || "Title"}
              </div>
              <div>
                <span
                  onClick={() => {
                    handleSaveProduct(true, product._id);
                  }}
                  className="p-4 rounded-full bg-red-500 absolute top-10 left-10"
                >
                  <BiHeart size={30} fill="white" />
                </span>
              </div>
              <div
                className={`min-h-[3rem] line-clamp-3 text-center font-inter text-sm ${
                  product.description ? "text-[#A55166]/80" : "text-gray-400"
                }`}
              >
                {product.description || "Description"}
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default ProductList;
