import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";

import Homepage from "../pages/Homepage";
import SignupPage from "../pages/SignupPage";
import { Toaster } from "react-hot-toast";

const AppRouter = () => (
  <>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/signup" element={<SignupPage />} />
      </Routes>
    </BrowserRouter>
    <Toaster />
  </>
);

export default AppRouter;
