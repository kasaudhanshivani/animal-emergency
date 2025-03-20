import { useEffect, useState } from "react";
import { motion } from "framer-motion";

const doctors = [
  { id: 1, name: "Dr. Ayesha Sharma", specialty: "Cardiologist", rating: 4.8, image: "/assets/doctor1.jpg" },
  { id: 2, name: "Dr. Rohan Mehta", specialty: "Dentist", rating: 4.6, image: "/assets/doctor2.jpg" },
  { id: 3, name: "Dr. Priya Kapoor", specialty: "Neurologist", rating: 4.9, image: "/assets/doctor3.jpg" },
  { id: 4, name: "Dr. Arjun Verma", specialty: "Orthopedic", rating: 4.7, image: "/assets/doctor4.jpg" },
];

export default function NearbyDoctors() {
  const [location, setLocation] = useState({ city: "Fetching..." });

  useEffect(() => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        async (position) => {
          const { latitude, longitude } = position.coords;
          const res = await fetch(`https://nominatim.openstreetmap.org/reverse?format=json&lat=${latitude}&lon=${longitude}`);
          const data = await res.json();
          setLocation({ city: data.address.city || "Unknown" });
        },
        () => setLocation({ city: "Location access denied" })
      );
    } else {
      setLocation({ city: "Geolocation not supported" });
    }
  }, []);

  return (
    <div className="bg-gray-900 text-white py-16 px-6">
      <div className="max-w-6xl mx-auto text-center">
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="text-4xl font-bold text-orange-500"
        >
          🏥 Nearby Doctors in {location.city}
        </motion.h2>
        <p className="text-gray-400 mt-3 text-lg">
          Find the best doctors near you & book instant appointments.
        </p>

        {/* Doctors List */}
        <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
          {doctors.map((doctor, index) => (
            <motion.div
              key={doctor.id}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className="bg-gray-800 p-6 rounded-xl shadow-lg hover:shadow-xl transition-all"
            >
              <img src={doctor.image} alt={doctor.name} className="w-32 h-32 mx-auto rounded-full border-4 border-orange-500" />
              <h3 className="mt-4 text-xl font-bold">{doctor.name}</h3>
              <p className="text-orange-400">{doctor.specialty}</p>
              <p className="mt-2 text-yellow-400 text-lg font-semibold">⭐ {doctor.rating}</p>
              <button className="mt-4 px-5 py-2 bg-orange-500 text-black font-semibold rounded-lg hover:bg-orange-600 transition-all">
                Book Appointment
              </button>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
