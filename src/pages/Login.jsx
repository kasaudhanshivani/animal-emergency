import { useNavigate } from "react-router-dom";

export default function Login() {
  return (
    <div className="bg-gray-900 text-white min-h-screen flex items-center justify-center p-6">
      <div className="bg-gray-800 p-8 rounded-lg shadow-lg w-full max-w-md">
        <h2 className="text-3xl font-bold text-center mb-6">Login</h2>
        
        <form>
          <div className="mb-4">
            <label className="block text-gray-300 text-sm font-semibold mb-2">
              Email Address
            </label>
            <input
              type="email"
              placeholder="Enter your email"
              className="w-full p-3 rounded-lg bg-gray-700 text-white border border-gray-600 focus:outline-none focus:ring-2 focus:ring-red-500"
              required
            />
          </div>

          <div className="mb-4">
            <label className="block text-gray-300 text-sm font-semibold mb-2">
              Password
            </label>
            <input
              type="password"
              placeholder="Enter your password"
              className="w-full p-3 rounded-lg bg-gray-700 text-white border border-gray-600 focus:outline-none focus:ring-2 focus:ring-red-500"
              required
            />
          </div>

          <button className="w-full bg-white text-gray-900 font-bold py-3 rounded-lg border border-gray-300 hover:bg-gray-100 transition">
            Login
          </button>
        </form>

        <p className="text-center text-gray-400 mt-4">
          Don't have an account? <a href="/signup" className="text-red-400 hover:underline">Sign Up</a>
        </p>
      </div>
    </div>
  );
}
