import { Link } from 'react-router-dom';

export default function Home() {
  return (
    <section className="bg-gradient-to-r from-purple-500 via-pink-500 to-red-500 text-white min-h-screen flex flex-col justify-center items-center text-center p-8">
      <h1 className="text-4xl md:text-6xl font-bold mb-4">Connecting People Across Faiths & Interests</h1>
      <p className="text-lg md:text-xl mb-6 max-w-2xl">Connecting people of all faiths through events and community support. Join us to explore, connect, and uplift communities.</p>
      <Link to="/events">
        <button className="bg-yellow-300 text-black px-6 py-3 text-lg font-semibold rounded-full shadow hover:bg-yellow-400 transition-all">Explore Events</button>
      </Link>
    </section>
  );
}