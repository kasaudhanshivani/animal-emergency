import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

export default function Home() {
  const [location, setLocation] = useState({ city: "Fetching...", lat: null, lon: null });
  const [nearbyDoctors, setNearbyDoctors] = useState([]);
  const [testimonials, setTestimonials] = useState([
    { name: "Amit Kumar", review: "Amazing platform for animal rescue and veterinary services!", rating: 5 },
    { name: "Priya Singh", review: "Found a vet nearby within minutes. Highly recommended!", rating: 4.5 },
    { name: "Rahul Sharma", review: "Great initiative to help animals in need.", rating: 5 }
  ]);

  useEffect(() => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        async (position) => {
          const { latitude, longitude } = position.coords;
          setLocation({ lat: latitude, lon: longitude, city: "Fetching city..." });

          try {
            const res = await fetch(
              `https://nominatim.openstreetmap.org/reverse?format=json&lat=${latitude}&lon=${longitude}`
            );
            const data = await res.json();
            setLocation((prev) => ({ ...prev, city: data.address.city || "Unknown" }));

            const doctors = [
              { name: "Dr. Amit Sharma", specialty: "Veterinarian", distance: "2 km" },
              { name: "Dr. Neha Gupta", specialty: "Animal Surgeon", distance: "3.5 km" },
              { name: "Dr. Raj Verma", specialty: "Pet Nutritionist", distance: "5 km" }
            ];
            setNearbyDoctors(doctors);
          } catch (error) {
            setLocation((prev) => ({ ...prev, city: "Unable to fetch city" }));
          }
        },
        () => setLocation({ city: "Location access denied", lat: null, lon: null })
      );
    } else {
      setLocation({ city: "Geolocation not supported", lat: null, lon: null });
    }
  }, []);

  return (
    <div className="bg-gray-50">
      {/* Hero Section */}
      <section className="relative w-full h-[80vh] flex items-center justify-center bg-black text-white">
        <video autoPlay loop muted className="absolute w-full h-full object-cover opacity-30">
          <source src="/assets/cute-dog.mp4" type="video/mp4" />
        </video>
        <div className="relative z-10 text-center max-w-3xl px-6">
          <h1 className="text-5xl font-extrabold text-orange-500">🐾 Compassion in Action</h1>
          <p className="mt-4 text-lg text-gray-200">
            Bridging the gap between animals in need and the help they deserve.
          </p>
          <Link to="/signup">
            <motion.button
              whileHover={{ scale: 1.1 }}
              className="mt-6 px-6 py-3 bg-orange-500 text-white font-semibold rounded-lg hover:bg-orange-600 transition-all"
            >
              Get Started 🚀
            </motion.button>
          </Link>
        </div>
      </section>

      {/* User Location Section */}
      <section className="py-12 px-6 bg-gray-100 text-center">
        <h2 className="text-4xl font-bold text-gray-800">📍 Your Location</h2>
        <p className="text-gray-600 mt-2 text-lg">
          {location.city !== "Fetching city..." ? `You're in ${location.city}` : "Fetching location..."}
        </p>
        {location.lat && location.lon ? (
          <p className="text-gray-600 mt-2 text-lg">
            Latitude: {location.lat.toFixed(4)}, Longitude: {location.lon.toFixed(4)}
          </p>
        ) : (
          <p className="text-gray-500 mt-2">Unable to retrieve coordinates</p>
        )}
      </section>

      {/* Nearby Doctors Section */}
      <section className="py-12 px-6 bg-white">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-4xl font-bold text-gray-800">🩺 Nearby Veterinarians</h2>
          <p className="text-gray-600 mt-2 text-lg">Find doctors available in your area</p>

          <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
            {nearbyDoctors.map((doctor, index) => (
              <motion.div key={index} className="p-6 bg-black text-white rounded-lg shadow-lg hover:scale-105 transition-all">
                <h3 className="text-xl font-bold text-orange-500">{doctor.name}</h3>
                <p className="mt-2">{doctor.specialty}</p>
                <p className="text-gray-400">{doctor.distance} away</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 px-6 bg-gray-100 text-center">
        <h2 className="text-4xl font-bold text-gray-800">💡 Why Choose Us?</h2>
        <p className="text-gray-600 mt-2 text-lg">
          We are dedicated to the well-being of animals and offer the best services.
        </p>
        <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {[
            { title: "🔍 Accurate Vet Search", description: "Find trusted veterinarians near you instantly." },
            { title: "🚑 Emergency Help", description: "Quick response for urgent animal care needs." },
            { title: "🌿 Adoption Support", description: "Helping abandoned animals find loving homes." }
          ].map((feature, index) => (
            <motion.div key={index} className="p-6 bg-white rounded-lg shadow-md hover:scale-105 transition-all">
              <h3 className="text-xl font-bold text-orange-500">{feature.title}</h3>
              <p className="mt-2 text-gray-600">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 px-6 bg-white text-center">
        <h2 className="text-4xl font-bold text-gray-800">🌟 Testimonials</h2>
        <p className="text-gray-600 mt-2 text-lg">What people say about us</p>
        <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div key={index} className="p-6 bg-gray-100 rounded-lg shadow-lg hover:scale-105 transition-all">
              <h3 className="text-xl font-bold">{testimonial.name}</h3>
              <p className="mt-2 text-gray-600">"{testimonial.review}"</p>
              <p className="mt-2 text-yellow-500">⭐ {testimonial.rating}/5</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Call to Action */}
      <section className="bg-gray-900 text-white py-16 px-6 text-center">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold">Be a Voice for the Voiceless! 🐾</h2>
          <p className="mt-4 text-lg">
            Join us in our mission to protect, rescue, and care for animals in need.
          </p>
          <Link to="/signup">
            <motion.button whileHover={{ scale: 1.1 }} className="mt-6 px-6 py-3 bg-orange-500 text-white font-semibold rounded-lg hover:bg-orange-600 transition-all">
              Get Involved
            </motion.button>
          </Link>
        </div>
      </section>
    </div>
  );
}
