import { Link } from "react-router-dom";
import { useState, useEffect } from "react";

const navigation = [
  { name: "Home", path: "/" },
  { name: "Category", path: "/category" },
  { name: "Discussions", path: "/discussions" }, 
];

const serviceDropdown = [
  { name: "General Services", path: "/service" },
  { name: "Reports", path: "/reports" },
];

export default function Navbar() {
  const [showServiceDropdown, setShowServiceDropdown] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const closeDropdown = (e) => {
      if (!e.target.closest(".dropdown")) {
        setShowServiceDropdown(false);
      }
    };
    document.addEventListener("click", closeDropdown);
    return () => document.removeEventListener("click", closeDropdown);
  }, []);

  return (
    <nav className="bg-[#ff6600] w-screen shadow-lg">
      <div className="w-full mx-auto max-w-7xl px-6 lg:px-8">
        <div className="flex h-20 items-center justify-between">
          {/* Logo */}
          <div className="flex items-center">
            <img src="C:\Users\new pc\Desktop\animal-emergency\src\assets\logo.png" alt="Logo" className="h-10 w-10" />
            <h2 className="ml-4 text-white text-xl font-bold">PashuCure</h2>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex space-x-8">
            {navigation.map((item) => (
              <Link
                key={item.name}
                to={item.path}
                className="text-white hover:text-black hover:border-b-2 border-white px-3 py-2 text-lg font-medium transition-all"
              >
                {item.name}
              </Link>
            ))}

            {/* Service Dropdown */}
            <div className="relative dropdown">
              <button
                onClick={() => setShowServiceDropdown(!showServiceDropdown)}
                className="text-white hover:text-black px-3 py-2 text-lg font-medium transition-all"
              >
                Service ▼
              </button>
              {showServiceDropdown && (
                <div className="absolute bg-white text-black rounded-md shadow-md mt-2 w-40">
                  {serviceDropdown.map((item) => (
                    <Link 
                      key={item.name} 
                      to={item.path} 
                      className="block px-4 py-2 hover:bg-gray-200"
                      onClick={() => setShowServiceDropdown(false)} // ✅ Fix: Close dropdown when clicking an item
                    >
                      {item.name}
                    </Link>
                  ))}
                </div>
              )}
            </div>

            {/* Find Doctors Link */}
            <Link to="/doctors" className="text-white hover:underline">
              Find Doctors
            </Link>
          </div>

          {/* Signup/Login Button */}
          <div className="hidden md:flex items-center space-x-6">
            <Link to="/signup" className="bg-white hover:bg-gray-200 text-[#ff6600] font-semibold px-4 py-2 rounded-lg transition-all">
              Signup / Login
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-white"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle mobile menu"
          >
            ☰
          </button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden bg-[#ff6600] text-white py-4 space-y-4">
            {navigation.map((item) => (
              <Link
                key={item.name}
                to={item.path}
                className="block text-center py-2 hover:bg-[#e65c00]"
                onClick={() => setIsMobileMenuOpen(false)} // ✅ Fix: Close menu on selection
              >
                {item.name}
              </Link>
            ))}
            <Link 
              to="/doctors" 
              className="block text-center py-2 hover:bg-[#e65c00]"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Find Doctors
            </Link>
            <Link 
              to="/signup" 
              className="block text-center bg-white text-[#ff6600] font-semibold py-2 mx-6 rounded-lg hover:bg-gray-200"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Signup / Login
            </Link>
          </div>
        )}
      </div>
    </nav>
  );
}
