export default function Features() {
  const items = [
    { title: "Upcoming Events", desc: "Find career fairs near you" },
    { title: "Networking", desc: "Connect with top employers" },
    { title: "Career Resources", desc: "Improve your resume & skills" },
  ];

  return (
    <div className="grid md:grid-cols-3 gap-6 px-10 py-12 bg-gray-100">
      {items.map((item, i) => (
        <div key={i} className="bg-white p-6 shadow rounded-lg hover:shadow-xl transition duration-300">
          <h3 className="font-bold text-lg">{item.title}</h3>
          <p className="text-gray-500 mt-2">{item.desc}</p>
          <button className="mt-4 text-blue-600">Learn More</button>
        </div>
      ))}
    </div>
  );
}