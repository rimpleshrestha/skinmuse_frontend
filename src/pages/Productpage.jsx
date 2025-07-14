import { useEffect, useState } from "react";
import { axiosInstance } from "../../api/axiosinstance";
import { useNavigate } from "react-router-dom";

const ProductPage = () => {
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [comments, setComments] = useState([]);
  const [newComment, setNewComment] = useState("");
  const [editingCommentId, setEditingCommentId] = useState(null);
  const [editingText, setEditingText] = useState("");
  const [productData, setProductData] = useState([]);
  const navigate = useNavigate();

  // Assuming logged-in user id is stored in sessionStorage
  const loggedInUserId = sessionStorage.getItem("userId");

  useEffect(() => {
    (async () => {
      const response = await axiosInstance.get("/post");
      if ([200, 201].includes(response.status)) {
        setProductData(response?.data?.posts);
      }
    })();
  }, []);

  const openModal = async (product) => {
    setSelectedProduct(product);
    setNewComment("");
    setEditingCommentId(null);
    setEditingText("");

    try {
      const response = await axiosInstance.get(
        `/comments/post/${product._id}`,
        {
          headers: {
            Authorization: `Bearer ${sessionStorage.getItem("access-token")}`,
          },
        }
      );
      if (response.status === 200) {
        console.log("Comments from backend:", response.data);
        setComments(
          response.data.map((c) => ({
            id: c._id,
            author:
              c.user?._id === loggedInUserId
                ? "You"
                : c.user?.name || "Unknown",
            userId: c.user?._id, // store userId for permission checks
            text: c.comment,
          }))
        );
      }
    } catch (error) {
      console.error("Error fetching comments for product:", error);
      setComments([]);
    }
  };

  const closeModal = () => {
    setSelectedProduct(null);
    setEditingCommentId(null);
    setEditingText("");
    setComments([]);
  };

  const handleAddComment = async () => {
    if (!newComment.trim()) return;

    try {
      const response = await axiosInstance.post(
        `/comments/${selectedProduct._id}`,
        { comment: newComment.trim() },
        {
          headers: {
            Authorization: `Bearer ${sessionStorage.getItem("access-token")}`,
          },
        }
      );

      if (response.status === 201) {
        const savedComment = response.data;
        setComments((prev) => [
          ...prev,
          {
            id: savedComment._id,
            author: "You", // The new comment belongs to logged-in user
            userId: loggedInUserId,
            text: savedComment.comment,
          },
        ]);
        setNewComment("");
      }
    } catch (error) {
      console.error("Error adding comment:", error);
    }
  };

  const deleteComment = async (id) => {
    try {
      const response = await axiosInstance.delete(`/comments/${id}`, {
        headers: {
          Authorization: `Bearer ${sessionStorage.getItem("access-token")}`,
        },
      });

      if (response.status === 200) {
        setComments((prev) => prev.filter((comment) => comment.id !== id));
      }
    } catch (error) {
      console.error("Error deleting comment:", error);
    }
  };

  const startEditing = (id, currentText) => {
    setEditingCommentId(id);
    setEditingText(currentText);
  };

  const cancelEditing = () => {
    setEditingCommentId(null);
    setEditingText("");
  };

  const saveEditing = async (id) => {
    if (!editingText.trim()) return;

    try {
      const response = await axiosInstance.put(
        `/comments/${id}`,
        { comment: editingText.trim() },
        {
          headers: {
            Authorization: `Bearer ${sessionStorage.getItem("access-token")}`,
          },
        }
      );

      if (response.status === 200) {
        setComments((prev) =>
          prev.map((comment) =>
            comment.id === id
              ? { ...comment, text: editingText.trim() }
              : comment
          )
        );
        setEditingCommentId(null);
        setEditingText("");
      }
    } catch (error) {
      console.error("Error updating comment:", error);
    }
  };

  return (
    <div className="bg-gradient-to-b min-h-screen w-full from-[#fad1e3] to-[#ff65aa]/10 flex flex-col items-center font-kaisei py-10">
      <h1
        className="text-4xl font-bold text-[#A55166] mb-10"
        style={{ fontFamily: "'Julius Sans One', sans-serif" }}
      >
        Products
      </h1>

      <div className="w-[90%] max-w-7xl grid grid-cols-3 gap-8">
        {productData.map((product, idx) => (
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
              <div className="md:w-1/2 w-full relative flex items-center justify-center bg-[#fad1e3] p-4">
                <img
                  src={selectedProduct.image}
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
                  {comments.map(({ id, author, userId, text }) => (
                    <div
                      key={id}
                      className={`p-2 rounded relative ${
                        author === "You"
                          ? "bg-[#ff65aa]/20 self-end"
                          : "bg-gray-100"
                      }`}
                    >
                      <p className="text-sm font-semibold text-[#A55166]">
                        {author}
                      </p>

                      {editingCommentId === id ? (
                        <>
                          <textarea
                            rows={2}
                            value={editingText}
                            onChange={(e) => setEditingText(e.target.value)}
                            className="w-full border border-gray-300 rounded-md p-1 resize-none focus:outline-none focus:ring-2 focus:ring-[#A55166]"
                          />
                          <div className="mt-1 flex gap-2 justify-end">
                            <button
                              onClick={() => saveEditing(id)}
                              className="bg-[#A55166] text-white px-3 py-1 rounded font-semibold hover:bg-[#914257] transition"
                            >
                              Save
                            </button>
                            <button
                              onClick={cancelEditing}
                              className="bg-gray-300 text-gray-700 px-3 py-1 rounded font-semibold hover:bg-gray-400 transition"
                            >
                              Cancel
                            </button>
                          </div>
                        </>
                      ) : (
                        <>
                          <p className="text-gray-700">{text}</p>
                          {userId === loggedInUserId && (
                            <div className="absolute top-2 right-2 flex gap-2">
                              <button
                                onClick={() => startEditing(id, text)}
                                className="text-sm text-[#A55166] hover:text-[#914257] font-semibold"
                                aria-label="Edit comment"
                              >
                                Edit
                              </button>
                              <button
                                onClick={() => deleteComment(id)}
                                className="text-sm text-red-500 hover:text-red-700 font-semibold"
                                aria-label="Delete comment"
                              >
                                Delete
                              </button>
                            </div>
                          )}
                        </>
                      )}
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
