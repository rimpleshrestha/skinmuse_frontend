import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Homepage from "./pages/Homepage";
import SignupPage from "./pages/SignupPage";
import RegisterPage from "./pages/RegisterPage"; // ✅ Make sure this line exists

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/signup" element={<SignupPage />} />
        <Route path="/register" element={<RegisterPage />} />{" "}
        {/* ✅ Add this */}
      </Routes>
    </Router>
  );
}

export default App;
