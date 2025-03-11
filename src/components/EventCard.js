export default function EventCard({ event }) {
    return (
      <div className="bg-white shadow-lg rounded-xl p-4 border hover:scale-105 transition-transform duration-300">
        <h4 className="text-lg font-bold text-indigo-700 mb-1">{event.title}</h4>
        <p className="text-sm text-gray-600 mb-1">📅 {event.date}</p>
        <p className="text-sm text-gray-600 mb-1">📍 {event.location}</p>
        <p className="text-sm text-gray-800 mb-2">{event.description}</p>
        <span className="inline-block bg-indigo-100 text-indigo-800 text-xs px-3 py-1 rounded-full">{event.category}</span>
      </div>
    );
  }
  