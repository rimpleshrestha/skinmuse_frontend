import { Link, NavLink, useLocation, useNavigate } from "react-router-dom";
import SkinmuseLogo from "../assets/images/skinMuseLogo.png";
import { useEffect, useState } from "react";

const Header = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const [token, setToken] = useState(sessionStorage.getItem("access-token"));

  useEffect(() => {
    const newToken = sessionStorage.getItem("access-token");
    setToken(newToken);
  }, [location]); // triggers when route changes — especially after login

  const logout = () => {
    sessionStorage.removeItem("access-token");
    sessionStorage.removeItem("email");
    sessionStorage.removeItem("role");
    sessionStorage.removeItem("name");
    sessionStorage.removeItem("role");
    sessionStorage.removeItem("profilePic");

    setToken(null);
    navigate("/signup");
  };
  return (
    <header className="bg-white shadow flex justify-between items-center px-12">
      <NavLink to="/">
        <img
          src={SkinmuseLogo}
          alt="SkinMuse Logo"
          className="h-20 object-contain"
        />
      </NavLink>
      <nav className="flex gap-3 font-inter items-center font-bold text-[#A55166]">
        <button className="text-nowrap" to="#">
          About Us
        </button>
        {["admin"].includes(sessionStorage.getItem("role")) && (
          <button
            className="text-nowrap"
            onClick={() => navigate("/create-post")}
          >
            Create Post
          </button>
        )}
        {token ? (
          <>
            <button
              className="text-nowrap"
              onClick={() => navigate("/saved-products")}
            >
              Saved Products
            </button>
            <button
              className="text-nowrap"
              onClick={() => navigate("/products")}
            >
              Products
            </button>
            <button
              className="text-nowrap"
              onClick={() => navigate("/profile")}
            >
              Profile
            </button>
            <button className="text-nowrap" onClick={logout}>
              Logout
            </button>
          </>
        ) : (
          <>
            <button className="text-nowrap" onClick={() => navigate("/signup")}>
              Login
            </button>
          </>
        )}
      </nav>
    </header>
  );
};

export default Header;
