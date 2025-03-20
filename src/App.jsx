import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import React from "react";
import Navbar from "./assets/components/Navbar"; // Ensure correct path
import Home from "./pages/Home";
import Category from "./pages/Category";
import Signup from "./pages/Signup";
import Login from "./pages/Login";
import Doctors from "./pages/Doctors";
// Ensure this file exists

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/category" element={<Category />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/login" element={<Login />} />
        <Route path="/doctors" element={<Doctors />} />
      
      </Routes>
    </Router>
  );
}

export default App;
