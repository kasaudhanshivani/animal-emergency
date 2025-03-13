import { useState } from "react";

const LocationFetcher = () => {
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
      (err) => {
        setError("Unable to retrieve your location. Please allow location access.");
      }
    );
  };

  return (
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
  );
};

export default LocationFetcher;
