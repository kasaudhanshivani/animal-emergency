import { useState, useEffect } from "react";
import { MapPin } from "lucide-react";

export default function LocationFetcher() {
  const [location, setLocation] = useState({ city: "Fetching...", latitude: null, longitude: null });
  const [error, setError] = useState(null);

  useEffect(() => {
    if ("geolocation" in navigator) {
      navigator.geolocation.getCurrentPosition(
        async (position) => {
          const { latitude, longitude } = position.coords;
          try {
            // Reverse Geocoding using OpenStreetMap API
            const res = await fetch(
              `https://nominatim.openstreetmap.org/reverse?format=json&lat=${latitude}&lon=${longitude}`
            );
            const data = await res.json();

            setLocation({
              city:
                data.address.city ||
                data.address.town ||
                data.address.village ||
                data.address.state_district || // Fallback to district if city is not found
                data.address.state || // Fallback to state if district is not found
                "Unknown",
              latitude,
              longitude,
            });
          } catch {
            setLocation({ city: "Unknown", latitude, longitude });
          }
        },
        (err) => {
          setError("Unable to retrieve location. Please enable location access.");
        },
        { enableHighAccuracy: true, timeout: 10000, maximumAge: 0 } // High accuracy mode
      );
    } else {
      setError("Geolocation is not supported by your browser.");
    }
  }, []);

  return (
    <div className="flex justify-center items-center h-screen bg-gray-100">
      <div className="bg-white shadow-lg rounded-2xl p-6 w-96 text-center">
        <div className="flex items-center justify-center bg-blue-100 p-4 rounded-full w-16 h-16 mx-auto">
          <MapPin className="text-blue-600 w-8 h-8" />
        </div>
        <h2 className="text-xl font-semibold text-gray-800 mt-4">Your Current Location</h2>
        {error ? (
          <p className="text-red-500 mt-2">{error}</p>
        ) : (
          <p className="text-gray-600 mt-2">
            <strong>City:</strong> {location.city} <br />
            <strong>Latitude:</strong> {location.latitude} <br />
            <strong>Longitude:</strong> {location.longitude}
          </p>
        )}
      </div>
    </div>
  );
}
