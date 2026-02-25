import { Link } from "react-router-dom";

export default function Hero() {
  return (
      <div className="bg-gradient-to-r from-blue-900 to-blue-700 text-white px-10 py-20 flex items-center min-h-[70vh]">      
      {/* LEFT SIDE */}
      <div className="max-w-xl">
        <h1 className="text-5xl font-bold leading-tight">
          Launch Your Career <br />
          <span className="text-orange-400">to New Heights!</span>
        </h1>

        <p className="mt-4 text-lg text-gray-200">
          Join the best career fairs & networking events
        </p>

        <div className="mt-6 space-x-4">
          <Link to="/Events">
            <button className="bg-orange-500 px-6 py-3 rounded hover:bg-orange-600 transition">
              Explore Events
            </button>
          </Link>

          <Link to="/About">
            <button className="border border-white px-6 py-3 rounded hover:bg-white hover:text-blue-900 transition">
              How It Works
            </button>
          </Link>
        </div>
      </div>

      {/* RIGHT SIDE (ADD IMAGE) */}
      <div className="hidden md:block flex-1">
        {/*<img
          src="https://source.unsplash.com/600x400/?business,meeting"
          className="rounded-lg shadow-lg"
        />*/}
      </div>

    </div>
  );
}