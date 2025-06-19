import { useState } from "react";

const ProductPage = () => {
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [comments, setComments] = useState([
    { id: 1, author: "User1", text: "Nice post!" },
    { id: 2, author: "User2", text: "Thanks for sharing." },
  ]);
  const [newComment, setNewComment] = useState("");

  // Placeholder product data
  const products = Array(6).fill({
    title: "",
    description: "",
    imageUrl: "https://via.placeholder.com/600x400",
  });

  const openModal = (product) => {
    setSelectedProduct(product);
    // Reset new comment input
    setNewComment("");
    // Optionally, load comments for this product here
  };

  const closeModal = () => {
    setSelectedProduct(null);
  };

  const handleAddComment = () => {
    if (!newComment.trim()) return;
    setComments((prev) => [
      ...prev,
      { id: Date.now(), author: "You", text: newComment.trim() },
    ]);
    setNewComment("");
  };

  return (
    <div className="bg-gradient-to-b min-h-screen w-full from-[#fad1e3] to-[#ff65aa]/10 flex flex-col items-center font-kaisei py-10">
      <h1
        className="text-4xl font-bold text-[#A55166] mb-10"
        style={{ fontFamily: "'Julius Sans One', sans-serif" }}
      >
        For Oily Skin
      </h1>

      <div className="w-[90%] max-w-7xl grid grid-cols-3 gap-8">
        {products.map((product, idx) => (
          <div
            key={idx}
            onClick={() => openModal(product)}
            className="bg-white rounded-2xl shadow-lg p-4 flex flex-col cursor-pointer hover:shadow-xl transition"
          >
            <img
              src={product.imageUrl}
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
            <div
              className={`min-h-[3rem] text-center font-inter text-sm ${
                product.description ? "text-[#A55166]/80" : "text-gray-400"
              }`}
            >
              {product.description || "Description"}
            </div>
          </div>
        ))}
      </div>

      {/* Modal */}
      {selectedProduct && (
        <>
          <div
            className="fixed inset-0 bg-black bg-opacity-50 z-40"
            onClick={closeModal}
          />
          <div className="fixed inset-0 z-50 flex items-center justify-center p-6 overflow-auto">
            <div className="bg-white rounded-2xl shadow-xl max-w-5xl w-full max-h-[90vh] flex flex-col md:flex-row overflow-hidden relative">
              <button
                onClick={closeModal}
                className="absolute top-4 right-4 text-gray-600 hover:text-gray-900 text-3xl font-bold z-10"
                aria-label="Close modal"
              >
                &times;
              </button>

              {/* Image Section */}
              <div className="md:w-1/2 w-full flex items-center justify-center bg-[#fad1e3] p-4">
                <img
                  src={selectedProduct.imageUrl}
                  alt=""
                  className="rounded-xl object-contain max-h-[80vh] w-full"
                />
              </div>

              {/* Comments Section */}
              <div className="md:w-1/2 w-full flex flex-col p-6">
                <h2
                  className="text-2xl font-semibold text-[#A55166] mb-4"
                  style={{ fontFamily: "'Julius Sans One', sans-serif" }}
                >
                  Comments
                </h2>

                <div className="flex-1 overflow-y-auto mb-4 space-y-3 border border-gray-300 rounded-md p-4">
                  {comments.length === 0 && (
                    <p className="text-gray-500 italic">No comments yet.</p>
                  )}
                  {comments.map(({ id, author, text }) => (
                    <div
                      key={id}
                      className={`p-2 rounded ${
                        author === "You"
                          ? "bg-[#ff65aa]/20 self-end"
                          : "bg-gray-100"
                      }`}
                    >
                      <p className="text-sm font-semibold text-[#A55166]">
                        {author}
                      </p>
                      <p className="text-gray-700">{text}</p>
                    </div>
                  ))}
                </div>

                <div className="flex items-center gap-2">
                  <textarea
                    rows={2}
                    value={newComment}
                    onChange={(e) => setNewComment(e.target.value)}
                    placeholder="Write your comment..."
                    className="flex-1 border border-gray-300 rounded-md p-2 resize-none focus:outline-none focus:ring-2 focus:ring-[#A55166]"
                  />
                  <button
                    onClick={handleAddComment}
                    className="bg-[#A55166] text-white px-4 py-2 rounded-md font-semibold hover:bg-[#914257] transition"
                  >
                    Send
                  </button>
                </div>
              </div>
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default ProductPage;
