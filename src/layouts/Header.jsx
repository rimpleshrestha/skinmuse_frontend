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
      <nav className="flex gap-20 font-inter items-center font-bold text-[#A55166]">
        <NavLink to="#">About Us</NavLink>
        {token ? (
          <button onClick={logout}>Logout</button>
        ) : (
          <>
            <NavLink to="/signup">Login</NavLink>
          </>
        )}
      </nav>
    </header>
  );
};

export default Header;
