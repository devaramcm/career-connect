import CountUp from "react-countup";
import { useInView } from "react-intersection-observer";

export default function About() {

  // ✅ ADD THIS (YOU MISSED IT)
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.3,
  });

  return (
    <div className="bg-gray-50">

      {/* HERO SECTION */}
      <div className="bg-gradient-to-r from-blue-900 to-blue-700 text-white py-20 px-10 text-center">
        <h1 className="text-4xl font-bold">About CareerConnect</h1>
        <p className="mt-4 text-lg max-w-2xl mx-auto">
          Bridging the gap between talented individuals and top employers through
          innovative virtual career fairs and networking events.
        </p>
      </div>

      {/* ABOUT CONTENT */}
      <div className="px-10 py-16 max-w-5xl mx-auto text-center">
        <h2 className="text-3xl font-bold mb-6">Who We Are</h2>
        <p className="text-gray-600 leading-relaxed">
          CareerConnect is a platform designed to help job seekers connect with
          companies through virtual career fairs, networking events, and skill
          development resources. Our goal is to simplify the hiring process and
          make career opportunities accessible to everyone.
        </p>
      </div>

      {/* MISSION & VISION */}
      <div className="grid md:grid-cols-2 gap-8 px-10 pb-16 max-w-6xl mx-auto">
        
        <div className="bg-white p-8 rounded-lg shadow hover:shadow-xl transition">
          <h3 className="text-2xl font-semibold mb-3">Our Mission</h3>
          <p className="text-gray-600">
            To empower individuals by connecting them with the right career
            opportunities and helping them grow professionally.
          </p>
        </div>

        <div className="bg-white p-8 rounded-lg shadow hover:shadow-xl transition">
          <h3 className="text-2xl font-semibold mb-3">Our Vision</h3>
          <p className="text-gray-600">
            To become the leading platform for virtual career networking and
            recruitment across the globe.
          </p>
        </div>

      </div>

      {/* STATS SECTION */}
      <div ref={ref} className="bg-blue-900 text-white py-16 px-10">
        <div className="grid md:grid-cols-3 text-center gap-8">
          
          <div>
            <h2 className="text-4xl font-bold">
              {inView ? <CountUp end={500} duration={2} /> : 0}+
            </h2>
            <p className="mt-2">Events Hosted</p>
          </div>

          <div>
            <h2 className="text-4xl font-bold">
              {inView ? <CountUp end={10} duration={2} /> : 0}K+
            </h2>
            <p className="mt-2">Job Seekers</p>
          </div>

          <div>
            <h2 className="text-4xl font-bold">
              {inView ? <CountUp end={300} duration={2} /> : 0}+
            </h2>
            <p className="mt-2">Companies</p>
          </div>

        </div>
      </div>

      {/* TEAM SECTION */}
      <div className="px-10 py-16 text-center">
        <h2 className="text-3xl font-bold mb-10">Our Team</h2>

        <div className="grid md:grid-cols-3 gap-8">
          
          <div className="bg-white p-6 rounded-lg shadow hover:shadow-xl transition">
            <img
              src="https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=300"
              alt="team"
              className="w-24 h-24 mx-auto rounded-full object-cover"
            />
            <h3 className="mt-4 font-semibold">Sarah Johnson</h3>
            <p className="text-gray-500">CEO & Founder</p>
          </div>

          <div className="bg-white p-6 rounded-lg shadow hover:shadow-xl transition">
            <img
              src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=300"
              alt="team"
              className="w-24 h-24 mx-auto rounded-full object-cover"
            />
            <h3 className="mt-4 font-semibold">Michael Lee</h3>
            <p className="text-gray-500">Head of Operations</p>
          </div>

          <div className="bg-white p-6 rounded-lg shadow hover:shadow-xl transition">
            <img
              src="https://images.unsplash.com/photo-1524504388940-b1c1722653e1?w=300"
              alt="team"
              className="w-24 h-24 mx-auto rounded-full object-cover"
            />
            <h3 className="mt-4 font-semibold">Priya Sharma</h3>
            <p className="text-gray-500">HR Manager</p>
          </div>

        </div>
      </div>

    </div>
  );
}