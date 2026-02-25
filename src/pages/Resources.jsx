import { useState } from "react";

export default function Resources() {
  const [search, setSearch] = useState("");

  const resources = [
    {
      id: 1,
      title: "How to Build a Resume",
      type: "Article",
      link: "#",
    },
    {
      id: 2,
      title: "Ace Your Interview",
      type: "Video",
      link: "#",
    },
    {
      id: 3,
      title: "Top Career Skills in 2026",
      type: "Guide",
      link: "#",
    },
    {
      id: 4,
      title: "LinkedIn Profile Optimization",
      type: "Article",
      link: "#",
    },
    {
      id: 5,
      title: "Networking Tips for Students",
      type: "Video",
      link: "#",
    },
    {
      id: 6,
      title: "Portfolio Building Guide",
      type: "Guide",
      link: "#",
    },
  ];

  const filteredResources = resources.filter((item) =>
    item.title.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="bg-gray-50 min-h-screen px-10 py-16">

      {/* HEADER */}
      <div className="text-center mb-10">
        <h1 className="text-4xl font-bold">Career Resources</h1>
        <p className="text-gray-600 mt-2">
          Learn, grow, and prepare for your dream career
        </p>
      </div>

      {/* SEARCH */}
      <div className="flex justify-center mb-10">
        <input
          type="text"
          placeholder="Search resources..."
          className="w-full max-w-md p-3 border rounded-lg shadow-sm"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
      </div>

      {/* RESOURCE GRID */}
      <div className="grid md:grid-cols-3 gap-8">
        {filteredResources.map((item) => (
          <div
            key={item.id}
            className="bg-white p-6 rounded-lg shadow hover:shadow-xl transition duration-300"
          >
            <h2 className="text-xl font-semibold">{item.title}</h2>

            <span className="inline-block mt-2 text-sm bg-blue-100 text-blue-600 px-2 py-1 rounded">
              {item.type}
            </span>

            <button className="mt-4 w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700 transition">
              View Resource
            </button>
          </div>
        ))}
      </div>

      {/* NO RESULTS */}
      {filteredResources.length === 0 && (
        <p className="text-center mt-10 text-gray-500">
          No resources found
        </p>
      )}

    </div>
  );
}