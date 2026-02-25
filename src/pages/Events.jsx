import { useState } from "react";
import img1 from "../images/1.jpg";
import img2 from "../images/2.jpg";
import img3 from "../images/3.jpg";
import img4 from "../images/4.jpg";
import img5 from "../images/5.jpg";
import img6 from "../images/6.jpg";

export default function Events() {
  const [search, setSearch] = useState("");

  const events = [
    {
      id: 1,
      title: "Tech & Innovation Expo",
      date: "May 18, 2026",
      location: "Bangalore",
      image: img1,
    },
    {
      id: 2,
      title: "Business & Finance Fair",
      date: "June 5, 2026",
      location: "Cochin",
      image: img2,
    },
    {
    id: 3,
    title: "Healthcare Career Expo",
    date: "June 20, 2026",
    location: "Chennai",
    image: img3,
    },
    {
      id: 4,
      title: "Engineering Career Meet",
      date: "July 10, 2026",
      location: "Hydrabad",
      image: img4,
    },
    {
    id: 5,
    title: "Marketing & Sales Summit",
    date: "August 2, 2026",
    location: "Delhi",
    image: img5,
    },
    {
    id: 6,
    title: "Startup & Entrepreneurship Meet",
    date: "August 15, 2026",
    location: "Mumbai",
    image: img6,
    },
  ];

  const filteredEvents = events.filter((event) =>
    event.title.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="px-10 py-16 bg-gray-50 min-h-screen">
      
      {/* TITLE */}
      <h1 className="text-4xl font-bold text-center mb-6">
        Explore Events
      </h1>

      {/* SEARCH BAR */}
      <div className="flex justify-center mb-10">
        <input
          type="text"
          placeholder="Search events..."
          className="w-full max-w-md p-3 border rounded-lg shadow-sm"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
      </div>

      {/* EVENT GRID */}
      <div className="grid md:grid-cols-3 gap-8">
        {filteredEvents.map((event) => (
          <div
            key={event.id}
            className="bg-white rounded-lg shadow hover:shadow-xl transition duration-300 overflow-hidden"
          >
            
            {/* IMAGE */}
            <img
              src={event.image}
              alt={event.title}
              className="w-full h-48 object-cover"
            />

            {/* CONTENT */}
            <div className="p-5">
              <h2 className="text-xl font-semibold">{event.title}</h2>
              
              <p className="text-gray-500 mt-2">{event.date}</p>
              <p className="text-gray-500">{event.location}</p>

              <button className="mt-4 bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition">
                View Details
              </button>
            </div>

          </div>
        ))}
      </div>

      {/* NO RESULTS */}
      {filteredEvents.length === 0 && (
        <p className="text-center mt-10 text-gray-500">
          No events found
        </p>
      )}

    </div>
  );
}