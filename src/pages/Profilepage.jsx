import { useState } from "react";

const ProfilePage = () => {
  const [name, setName] = useState("");
  const [email] = useState("toffee@example.com"); // Replace with real logic
  const [profilePic, setProfilePic] = useState(null);
  const [showModal, setShowModal] = useState(false);
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const handleProfilePicChange = (e) => {
    setProfilePic(URL.createObjectURL(e.target.files[0]));
  };

  const handleSave = (e) => {
    e.preventDefault();
    console.log({ name, email, profilePic });
  };

  const handleResetPassword = () => {
    if (newPassword !== confirmPassword) {
      alert("Passwords do not match.");
      return;
    }
    console.log("New password set:", newPassword);
    setShowModal(false);
    setNewPassword("");
    setConfirmPassword("");
    // Add password reset API logic here
  };

  return (
    <div className="bg-gradient-to-b min-h-screen w-full from-[#fad1e3] to-[#ff65aa]/10 flex flex-col items-center justify-center font-kaisei">
      <h1
        className="mb-8 text-3xl font-bold text-[#A55166]"
        style={{ fontFamily: "'Julius Sans One', sans-serif" }}
      >
        Your Profile
      </h1>

      <form
        onSubmit={handleSave}
        className="w-[600px] p-8 rounded-2xl shadow-lg bg-opacity-25 backdrop-blur-md border bg-[#A55166]"
      >
        {/* Profile Picture */}
        <div className="mb-6 flex flex-col items-center">
          <div className="w-32 h-32 rounded-full bg-white shadow-md mb-3 overflow-hidden">
            {profilePic ? (
              <img
                src={profilePic}
                alt="Profile"
                className="w-full h-full object-cover"
              />
            ) : (
              <div className="w-full h-full flex items-center justify-center text-[#A55166] font-bold text-xl">
                +
              </div>
            )}
          </div>
          <input
            type="file"
            accept="image/*"
            onChange={handleProfilePicChange}
            className="text-sm text-white font-inter"
          />
        </div>

        {/* Name */}
        <div className="mb-4">
          <label className="block mb-1 text-[#A55166] font-bold font-inter">
            Name:
          </label>
          <input
            type="text"
            placeholder="Enter your name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="w-full p-3 shadow-md rounded-xl bg-white focus:outline-none"
          />
        </div>

        {/* Email */}
        <div className="mb-2">
          <label className="block mb-1 text-[#A55166] font-bold font-inter">
            Email:
          </label>
          <input
            type="text"
            value={email}
            readOnly
            className="w-full p-3 shadow-md rounded-xl bg-gray-100 text-gray-600 cursor-not-allowed"
          />
        </div>

        {/* Forgot Password Button */}
        <div className="mb-6 text-left">
          <button
            type="button"
            onClick={() => setShowModal(true)}
            className="text-sm font-inter font-semibold text-pink-300 bg-white px-4 py-2 rounded-full shadow-md"
          >
            Forgot Password?
          </button>
        </div>

        {/* Save Button */}
        <button
          type="submit"
          className="w-full bg-[#A55166] text-white py-3 rounded-xl font-bold font-inter hover:bg-[#914257] transition"
        >
          Save Changes
        </button>
      </form>

      {/* Modal */}
      {showModal && (
        <div className="fixed inset-0 bg-black bg-opacity-40 flex justify-center items-center z-50">
          <div className="bg-white w-[400px] rounded-2xl p-6 shadow-lg relative">
            <h2 className="text-xl font-bold text-[#A55166] mb-4">
              Reset Password
            </h2>
            <input
              type="password"
              placeholder="New password"
              value={newPassword}
              onChange={(e) => setNewPassword(e.target.value)}
              className="w-full mb-3 p-3 border rounded-xl focus:outline-none"
            />
            <input
              type="password"
              placeholder="Confirm password"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              className="w-full mb-4 p-3 border rounded-xl focus:outline-none"
            />
            <div className="flex justify-end gap-3">
              <button
                onClick={() => setShowModal(false)}
                className="bg-gray-300 text-[#A55166] font-semibold px-4 py-2 rounded-xl"
              >
                Cancel
              </button>
              <button
                onClick={handleResetPassword}
                className="bg-[#A55166] text-white font-semibold px-4 py-2 rounded-xl"
              >
                Reset
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ProfilePage;
