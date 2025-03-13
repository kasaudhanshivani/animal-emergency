import { Link } from "react-router-dom";

const navigation = [
  { name: "Home", path: "/" },
  { name: "Service", path: "/service" },
  { name: "Category", path: "/category" },
  { name: "Reports", path: "/reports" },
];

export default function Navbar() {
  return (
    <nav className="bg-[#ff6600] w-screen shadow-lg"> {/* Orange Background */}
      <div className="w-full mx-auto max-w-7xl px-6 lg:px-8">
        <div className="flex h-20 items-center justify-between">

          {/* Logo */}
          <div className="flex items-center">
            <img
              src="/src/assets/logo.png"  // Ensure the correct logo path
              alt="Animal Rescue Logo"
              className="h-10 w-10"
            />
            <h2 className="ml-4 text-white text-xl font-bold">PashuCure</h2>
          </div>

          {/* Navigation Links */}
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
          </div>

          {/* Signup/Login Button */}
          <div className="flex items-center space-x-6">
            <Link
              to="/signup"
              className="bg-white hover:bg-gray-200 text-[#ff6600] font-semibold px-4 py-2 rounded-lg transition-all"
            >
              Signup / Login
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}
