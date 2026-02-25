export default function Testimonials() {
  const reviews = [
    {
      text: "I landed my dream job thanks to this fair!",
      name: "Sarah M."
    },
    {
      text: "Networking opened so many doors!",
      name: "Jason L."
    }
  ];

  return (
    <div className="bg-gray-100 py-20 px-10">
      <h2 className="text-3xl font-bold text-center mb-10">
        Success Stories
      </h2>

      <div className="grid md:grid-cols-2 gap-6">
        {reviews.map((r, i) => (
          <div key={i} className="bg-white p-6 shadow rounded">
            <p>"{r.text}"</p>
            <h4 className="mt-4 font-bold">- {r.name}</h4>
          </div>
        ))}
      </div>
    </div>
  );
}