import { useState } from "react";

const CreatePostPage = () => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [skinType, setSkinType] = useState("");
  const [imageUrl, setImageUrl] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log({ title, description, skinType, imageUrl });
    // Add form submit logic here
  };

  return (
    <div className="bg-gradient-to-b h-full min-h-screen w-full from-[#fad1e3] to-[#ff65aa]/10 flex flex-col items-center justify-center font-kaisei">
      <h1
        className="mb-8 text-3xl font-bold text-[#A55166]"
        style={{ fontFamily: "'Julius Sans One', sans-serif" }}
      >
        Create Post for SkinMusers
      </h1>

      <form
        onSubmit={handleSubmit}
        className="w-[600px] p-8 rounded-2xl shadow-lg bg-opacity-25 backdrop-blur-md border bg-[#A55166]"
      >
        <div className="mb-4">
          <label className="block mb-1 text-[#A55166] font-bold font-inter">
            Post Title:
          </label>
          <input
            type="text"
            placeholder="Enter post title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className="w-full p-3 shadow-md rounded-xl bg-white focus:outline-none"
          />
        </div>

        <div className="mb-4">
          <label className="block mb-1 text-[#A55166] font-bold font-inter">
            Description:
          </label>
          <textarea
            placeholder="Write a short description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            className="w-full p-3 shadow-md rounded-xl bg-white focus:outline-none h-24 resize-none"
          />
        </div>

        <div className="mb-4">
          <label className="block mb-1 text-[#A55166] font-bold font-inter">
            Skin Type:
          </label>
          <select
            value={skinType}
            onChange={(e) => setSkinType(e.target.value)}
            className="w-full p-3 shadow-md rounded-xl bg-white focus:outline-none cursor-pointer"
          >
            <option value="" disabled>
              Select skin type
            </option>
            <option value="Oily">Oily</option>
            <option value="Dry">Dry</option>
            <option value="Combination">Combination</option>
            <option value="Normal">Normal</option>
          </select>
        </div>

        <div className="mb-6">
          <label className="block mb-1 text-[#A55166] font-bold font-inter">
            Image URL:
          </label>
          <input
            type="text"
            placeholder="Paste image URL here"
            value={imageUrl}
            onChange={(e) => setImageUrl(e.target.value)}
            className="w-full p-3 shadow-md rounded-xl bg-white focus:outline-none"
          />
        </div>

        <button
          type="submit"
          className="w-full bg-[#A55166] text-white py-3 rounded-xl font-bold font-inter hover:bg-[#914257] transition"
        >
          Create Post
        </button>
      </form>
    </div>
  );
};

export default CreatePostPage;
