export default function Events() {
  const events = [
    {
      title: "Tech & Innovation Expo",
      date: "May 18",
      location: "San Francisco"
    },
    {
      title: "Business & Finance Fair",
      date: "June 5",
      location: "New York"
    },
    {
      title: "Healthcare Career Expo",
      date: "June 20",
      location: "Chicago"
    }
  ];

  return (
    <div className="px-10 py-16">
      <h2 className="text-3xl font-bold text-center mb-10">
        Featured Events
      </h2>

      <div className="grid md:grid-cols-3 gap-6">
        {events.map((event, i) => (
          <div key={i} className="bg-white shadow rounded p-5 hover:shadow-xl transition duration-300">
            <h3 className="font-bold text-lg">{event.title}</h3>
            <p className="text-gray-500 mt-2">
              {event.date} | {event.location}
            </p>

            <button className="mt-4 border px-4 py-2 rounded hover:bg-blue-600 hover:text-white transition">
              View Details
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}