import { useState } from "react";
import { Link } from "react-router-dom";

export default function Home() {
  const [location, setLocation] = useState(null);
  const [error, setError] = useState("");

  const fetchLocation = () => {
    if (!navigator.geolocation) {
      setError("Geolocation is not supported by your browser.");
      return;
    }

    navigator.geolocation.getCurrentPosition(
      (position) => {
        const { latitude, longitude } = position.coords;
        setLocation({ latitude, longitude });
        setError("");
      },
      () => {
        setError("Unable to retrieve your location. Please allow location access.");
      }
    );
  };

  return (
    <div
      className="relative min-h-screen flex flex-col items-center justify-center text-white text-center p-6"
      style={{
        backgroundImage: "url('https://source.unsplash.com/1600x900/?animals,rescue')",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {/* Gradient Overlay for Modern Look */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/60 to-black/80"></div>

      <div className="relative z-10">
        {/* Hero Section */}
        <h1 className="text-6xl font-extrabold mb-6 drop-shadow-lg animate-fadeIn">
          🐾 Welcome to <span className="text-yellow-300">PashuCure</span>
        </h1>
        <p className="text-lg max-w-3xl mb-6 px-4 drop-shadow-md animate-fadeIn delay-100">
                  "Because Every Paw Deserves Care 🐾" <br /> "Helping Those Who Can't Speak for Themselves ❤️"
        </p>
        <Link
          to="/service"
          className="bg-yellow-400 hover:bg-yellow-500 text-black font-bold py-3 px-8 rounded-lg text-lg shadow-lg transition-all transform hover:scale-110 animate-bounce delay-300"
        >
          🚑 Get Emergency Help
        </Link>

        {/* Features Section */}
        <div className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl animate-fadeIn delay-300">
          <div className="bg-white bg-opacity-20 p-6 rounded-lg shadow-lg text-black transition transform hover:scale-105 hover:bg-opacity-30">
            <h3 className="text-xl font-semibold">🐶 Rescue Services</h3>
            <p className="text-sm mt-2">Immediate response for injured and stray animals.</p>
          </div>
          <div className="bg-white bg-opacity-20 p-6 rounded-lg shadow-lg text-black transition transform hover:scale-105 hover:bg-opacity-30">
            <h3 className="text-xl font-semibold">👨‍⚕️ Vet Assistance</h3>
            <p className="text-sm mt-2">Professional veterinary care available 24/7.</p>
          </div>
          <div className="bg-white bg-opacity-20 p-6 rounded-lg shadow-lg text-black transition transform hover:scale-105 hover:bg-opacity-30">
            <h3 className="text-xl font-semibold">🏡 Adoption Services</h3>
            <p className="text-sm mt-2">Find a loving home for rescued animals.</p>
          </div>
          <div className="bg-white bg-opacity-20 p-6 rounded-lg shadow-lg text-black transition transform hover:scale-105 hover:bg-opacity-30">
            <h3 className="text-xl font-semibold">🏠 Animal Shelters</h3>
            <p className="text-sm mt-2">Safe spaces for rescued animals to recover.</p>
          </div>
          <div className="bg-white bg-opacity-20 p-6 rounded-lg shadow-lg text-black transition transform hover:scale-105 hover:bg-opacity-30">
            <h3 className="text-xl font-semibold">🍲 Food Donation</h3>
            <p className="text-sm mt-2">Helping feed stray and rescued animals.</p>
          </div>
          <div className="bg-white bg-opacity-20 p-6 rounded-lg shadow-lg text-black transition transform hover:scale-105 hover:bg-opacity-30">
            <h3 className="text-xl font-semibold">🤝 Volunteer With Us</h3>
            <p className="text-sm mt-2">Join us in making a difference for animals.</p>
          </div>
        </div>

        {/* Fun Animal Facts */}
        <div className="mt-6 bg-yellow-500 p-4 rounded-lg shadow-lg max-w-3xl text-black font-bold">
          🐾 Did you know? A dog’s nose print is as unique as a human fingerprint!
        </div>

        {/* Current Location Section */}
        <div className="mt-6 bg-white p-4 rounded-lg shadow-lg max-w-md text-black text-center">
          <h3 className="text-lg font-semibold">📍 Your Location</h3>
          <button
            onClick={fetchLocation}
            className="mt-2 bg-yellow-500 hover:bg-yellow-600 text-white font-bold py-2 px-4 rounded transition"
          >
            Get Current Location
          </button>
          {location && (
            <p className="mt-2 text-sm">
              🌍 Latitude: {location.latitude}, Longitude: {location.longitude}
            </p>
          )}
          {error && <p className="mt-2 text-red-600">{error}</p>}
        </div>

        {/* Testimonials Section */}
        <div className="mt-10 bg-white bg-opacity-20 p-6 rounded-lg shadow-lg text-black max-w-4xl">
          <h2 className="text-2xl font-semibold">💬 What People Say</h2>
          <p className="mt-4 italic">"PashuCure saved my pet’s life! The emergency vet service was a lifesaver. - Priya M."</p>
          <p className="mt-2 italic">"Amazing team! Their rescue service helped a stray dog in my area. - Rohit K."</p>
        </div>

        {/* Contact Section */}
        <div className="mt-10">
          <h2 className="text-2xl font-semibold drop-shadow-md">📞 Contact Us</h2>
          <p className="mt-2 text-lg">Emergency Hotline: <span className="font-bold text-yellow-300">+1 800-123-4567</span></p>
          <p>📍 Location: 123 Animal Care Street, City, Country</p>
        </div>
      </div>
    </div>
  );
}
